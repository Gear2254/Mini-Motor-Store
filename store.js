class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart_items')) || [];
    }

    addItem(item) {
        this.items.push(item);
        this.save();
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.save();
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.unitPrice, 0);
    }

    save() {
        localStorage.setItem('cart_items', JSON.stringify(this.items));
    }
}

const myCart = new ShoppingCart();