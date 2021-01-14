const _map = require('lodash/map');
const _get = require('lodash/get');
const _find = require('lodash/find');
const _slice = require('lodash/slice');
const _first = require('lodash/first');
const { getHttp } = require('../../common/js/httpMethod');
// const mockDetail = require('../../mocks/mockDetail.json');
// const mockList = require('../../mocks/mockList.json');

class ItemsService {

    async readById(id) {
        const pathItem = `https://api.mercadolibre.com/items/${id}`;
        const pathDesc = `${pathItem}/description`;
        const resItem = await getHttp(pathItem);
        const resDesc = await getHttp(pathDesc);
        const dataItem = resItem.data;
        const description = _get(resDesc, 'data.plain_text');
        const resultAuthor = await this._getAthor();
        const resultData = await this._getItem(dataItem, description);
        return {
            author: resultAuthor,
            item: resultData
        };
        // return mockDetail;
    }

    async readAll(query) {
        const path = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
        const { data } = await getHttp(path);
        const { results, filters } = data;
        const resultsItems = await this._getItems(results);
        const resultAuthor = await this._getAthor();
        const resultsCategories = await this._getCategories(filters);
        return {
            author: resultAuthor,
            categories: resultsCategories,
            items: resultsItems
        };
        // return mockList;
    }

    async _getAthor () {
        return {
            name: 'David',
            lastname: 'Castrillón'
        };
    }

    async _getCategories(filters) {
        const categoryFinder = _find(filters, (element) => element.id === 'category');
        const values = _get(categoryFinder, 'values', []);
        const value = _first(values);
        const pathFromRoot = _get(value, 'path_from_root', []);
        const categories = _map(pathFromRoot, (category) => category.name);
        return categories;
    }

    async _getItems (results) {
        const resultsSlice = _slice(results, 0, 4);
        return _map(resultsSlice, (item) => {
            const id = _get(item, 'id', '');
            const title = _get(item, 'title', '');
            const picture = _get(item, 'thumbnail', '');
            const condition = _get(item, 'condition', '');
            const freeShipping = _get(item, 'shipping.free_shipping', '');
            const currency = _get(item, 'currency_id');
            const amount = _get(item, 'price', '');
            const decimals = 2;
            const address = _get(item, 'address', {});
            return {
                id,
                title,
                picture,
                condition,
                free_shipping: freeShipping,
                price: {
                    currency,
                    amount,
                    decimals
                },
                address
            };
        });
    }

    async _getItem (item, description) {
        const id = _get(item, 'id', '');
        const title = _get(item, 'title', '');
        const picture = _get(item, 'pictures[0].url', '');
        const condition = _get(item, 'condition', '');
        const freeShipping = _get(item, 'shipping.free_shipping', '');
        const currency = _get(item, 'currency_id');
        const amount = _get(item, 'price', '');
        const decimals = 2;
        const soldQuantity = _get(item, 'sold_quantity');
        return {
            id,
            title,
            picture,
            condition,
            free_shipping: freeShipping,
            price: {
                currency,
                amount,
                decimals
            },
            sold_quantity: soldQuantity,
            description
        };
    }

}

module.exports = ItemsService;
