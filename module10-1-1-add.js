const groceries = {
    "73Wakv": {
        name: "Orange Juice",
        price: 1.5,
        discount: 10
    },
    "5L3db9": {
        name: "Chocolate",
        price: 2,
        discount: 0
    },
};

const getTotalPriceOfShoppingBag = (shoppingBagArray) => {
    let sumPrice = 0;
    for (const item of shoppingBagArray) {
        const product = groceries[item.productId];
        if (product) {
            const discountPrice = product.price * (100 - product.discount) / 100;
            sumPrice += discountPrice * item.count;
        }
    };
    return sumPrice.toFixed(2);
};

const shoppingBag = [
    {
        productId: "73Wakv",
        count: 3
    },
    {
        productId: "5L3db9",
        count: 23
    }
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log("totalPrice", totalPrice);
