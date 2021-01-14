const DEFAULT_AUTHOR = {
    name: 'David',
    lastname: 'Castrillón'
};

const DEFAULT_CATEGORIES = [
    "Celulares y Teléfonos",
    "Celulares y Smartphones"
];

const DEFUALT_ITEMS = [
    {
        "id": "MLA883283424",
        "title": "Samsung Galaxy A11 64 Gb Azul 3 Gb Ram",
        "picture": "http://http2.mlstatic.com/D_789249-MLA44549127179_012021-I.jpg",
        "condition": "new",
        "free_shipping": true,
        "price": {
            "currency": "ARS",
            "amount": 24499,
            "decimals": 2
        },
        "address": {
            "state_id": "AR-B",
            "state_name": "Buenos Aires",
            "city_id": null,
            "city_name": "Villa Celina"
        }
    },
    {
        "id": "MLA884498895",
        "title": "Samsung Galaxy A51 128 Gb Prism Crush White 4 Gb Ram",
        "picture": "http://http2.mlstatic.com/D_780046-MLA44443560272_122020-I.jpg",
        "condition": "new",
        "free_shipping": true,
        "price": {
            "currency": "ARS",
            "amount": 43999,
            "decimals": 2
        },
        "address": {
            "state_id": "AR-B",
            "state_name": "Buenos Aires",
            "city_id": null,
            "city_name": "Villa Celina"
        }
    },
    {
        "id": "MLA879498982",
        "title": "Samsung Galaxy A31 128 Gb Prism Crush Black 4 Gb Ram",
        "picture": "http://http2.mlstatic.com/D_951218-MLA44516081303_012021-I.jpg",
        "condition": "new",
        "free_shipping": true,
        "price": {
            "currency": "ARS",
            "amount": 38999,
            "decimals": 2
        },
        "address": {
            "state_id": "AR-B",
            "state_name": "Buenos Aires",
            "city_id": null,
            "city_name": "Villa Celina"
        }
    },
    {
        "id": "MLA866669727",
        "title": "Samsung Galaxy A01 32 Gb Negro 2 Gb Ram",
        "picture": "http://http2.mlstatic.com/D_688107-MLA41815295112_052020-I.jpg",
        "condition": "new",
        "free_shipping": true,
        "price": {
            "currency": "ARS",
            "amount": 17299,
            "decimals": 2
        },
        "address": {
            "state_id": "AR-C",
            "state_name": "Capital Federal",
            "city_id": "TUxBQk7a0TcwOTRa",
            "city_name": "Núñez"
        }
    }
];

const DEFUALT_ITEM = {
    "id": "MLA897438952",
    "title": "Auriculares Inalámbricos Apple AirPods With Charging Case (2nd Generation) Blanco",
    "picture": "http://http2.mlstatic.com/D_695135-MLA42770626210_072020-O.jpg",
    "condition": "new",
    "free_shipping": true,
    "price": {
        "currency": "ARS",
        "amount": 23000,
        "decimals": 2
    },
    "sold_quantity": 250,
    "description": "mi primera descripcion"
};

const DEFAULT_READ_ALL = {
    "author": {
        "lastname": "Castrillón",
        "name": "David"
    },
    "categories": ["Celulares y Teléfonos", "Celulares y Smartphones"],
    "items": [{
        "address": {
            "city_id": null,
            "city_name": "Villa Celina",
            "state_id": "AR-B",
            "state_name": "Buenos Aires"
        },
        "condition": "new",
        "free_shipping": true,
        "id": "MLA883283424",
        "picture": "http://http2.mlstatic.com/D_789249-MLA44549127179_012021-I.jpg",
        "price": {
            "amount": 24499,
            "currency": "ARS",
            "decimals": 2
        },
        "title": "Samsung Galaxy A11 64 Gb Azul 3 Gb Ram"
    }, {
        "address": {
            "city_id": null,
            "city_name": "Villa Celina",
            "state_id": "AR-B",
            "state_name": "Buenos Aires"
        },
        "condition": "new",
        "free_shipping": true,
        "id": "MLA884498895",
        "picture": "http://http2.mlstatic.com/D_780046-MLA44443560272_122020-I.jpg",
        "price": {
            "amount": 43999,
            "currency": "ARS",
            "decimals": 2
        },
        "title": "Samsung Galaxy A51 128 Gb Prism Crush White 4 Gb Ram"
    }, {
        "address": {
            "city_id": null,
            "city_name": "Villa Celina",
            "state_id": "AR-B",
            "state_name": "Buenos Aires"
        },
        "condition": "new",
        "free_shipping": true,
        "id": "MLA879498982",
        "picture": "http://http2.mlstatic.com/D_951218-MLA44516081303_012021-I.jpg",
        "price": {
            "amount": 38999,
            "currency": "ARS",
            "decimals": 2
        },
        "title": "Samsung Galaxy A31 128 Gb Prism Crush Black 4 Gb Ram"
    }, {
        "address": {
            "city_id": "TUxBQk7a0TcwOTRa",
            "city_name": "Núñez",
            "state_id": "AR-C",
            "state_name": "Capital Federal"
        },
        "condition": "new",
        "free_shipping": true,
        "id": "MLA866669727",
        "picture": "http://http2.mlstatic.com/D_688107-MLA41815295112_052020-I.jpg",
        "price": {
            "amount": 17299,
            "currency": "ARS",
            "decimals": 2
        },
        "title": "Samsung Galaxy A01 32 Gb Negro 2 Gb Ram"
    }]
};

const DEFUALT_READ_BY_ID = {
    "author": {
        "name": "David",
        "lastname": "Castrillón"
    },
    "item": {
        "id": "MLA897438952",
        "title": "Auriculares Inalámbricos Apple AirPods With Charging Case (2nd Generation) Blanco",
        "picture": "http://http2.mlstatic.com/D_695135-MLA42770626210_072020-O.jpg",
        "condition": "new",
        "free_shipping": true,
        "price": {
            "currency": "ARS",
            "amount": 23000,
            "decimals": 2
        },
        "sold_quantity": 250,
        "description": "Los AirPods reinventan el concepto de auriculares inalámbricos. Los sacás del estuche y ya funcionan con tu iPhone, Apple Watch, iPad o Mac. Se configuran con un simple toque, se activan automáticamente y están siempre conectados. Incluso detectan si los llevás puestos y detienen la reproducción cuando te los sacás. Además, Siri hace todo por vos,  solo tenés que pedirle que ajuste el volumen, cambie de canción, haga una llamada o te diga cómo llegar a algún sitio.\n\nEl formato perfecto para vos\nAl ser in-ear aíslan el ruido del exterior, mejoran la calidad del audio y son de tamaño pequeño para poder insertarse en tu oreja. Son ideales para acompañarte a la hora de hacer ejercicio mientras te sumergís en el mejor sonido envolvente."
    }
};

module.exports = {
    DEFAULT_AUTHOR,
    DEFAULT_CATEGORIES,
    DEFUALT_ITEMS,
    DEFUALT_ITEM,
    DEFAULT_READ_ALL,
    DEFUALT_READ_BY_ID
};
