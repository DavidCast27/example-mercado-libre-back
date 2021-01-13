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
            return {
                id: item.id,
                title: item.title,
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: 2
                },
                address: item.address
            };
        });
    }

    async _getItem (item, description) {
        const pictures = _get(item, 'pictures', []);
        const picture = _first(pictures);
        return {
            id: item.id,
            title: item.title,
            picture: picture.url,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: 2
            },
            sold_quantity: item.sold_quantity,
            description
        };
    }

}

module.exports = ItemsService;
