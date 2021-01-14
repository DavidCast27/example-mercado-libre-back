const { ItemsService } = require('../');
const config = require('../../../config');
const { DEFUALT_FILTERS, DEFUALT_RESULTS, DEFAULT_API_ITEM } = require('../__mocks__/items.responseApi.mocks');
const { DEFAULT_AUTHOR, DEFAULT_CATEGORIES, DEFUALT_ITEMS, DEFUALT_ITEM, DEFAULT_READ_ALL, DEFUALT_READ_BY_ID } = require('../__mocks__/items.services.mocks');

describe('Items services', () => {
    let _itemsService;

    beforeEach(() => {
        _itemsService = new ItemsService({ config });
    });

    test('_getAthor method should return a json with defualt author', () => {
        const gottenAuthor = _itemsService._getAthor();
        expect(gottenAuthor).toMatchObject(DEFAULT_AUTHOR);
    });

    test('_getCategories method should return a json with defualt categories', () => {
        const gottenCategories = _itemsService._getCategories(DEFUALT_FILTERS);
        expect(gottenCategories).toMatchObject(DEFAULT_CATEGORIES);
    });

    test('_getItems method should return a json with defualt items', () => {
        const gottenItems = _itemsService._getItems(DEFUALT_RESULTS);
        expect(gottenItems).toEqual(DEFUALT_ITEMS);
    });

    test('_getItem method should return a json with defualt item', () => {
        const gottenItem = _itemsService._getItem(DEFAULT_API_ITEM, "mi primera descripcion");
        expect(gottenItem).toEqual(DEFUALT_ITEM);
    });


    test('readAll method should return a json with defualt items', async () => {
        const gottenItems = await _itemsService.readAll("samsung");
        expect(gottenItems).toEqual(DEFAULT_READ_ALL);
    });

    test('readById method should return a json with defualt item', async () => {
        const gottenItems = await _itemsService.readById("MLA897438952");
        expect(gottenItems).toEqual(DEFUALT_READ_BY_ID);
    });

});
