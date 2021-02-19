import {Product} from "./Products/Product.mjs";
import {products} from "./Products/Products.mjs";


class Shop{
    constructor(){
        this.products=null;
        this.shop=null;
        this.shopList=null;
        this.container=null;
        this.buttons=null;
        this.initialize();
        this.addEventListeners();
    }
    initialize(){
        this.products=products;
        this.shop=document.querySelector('[data-shop]');
        this.shopList=document.querySelector('[data-shoplist]');
        this.container=document.querySelector('[data-productContainer]');
        this.makeProducts();
        this.buttons=[...document.querySelectorAll('.product__button')];
    }
    makeProducts(){
        products.map((product) => {
            const {id,title,price,author,img}=product;
            const shopProduct = new Product(id,title,price,author,img);
        })
    }
    addEventListeners(){
        this.shop.addEventListener('click',this.openShop.bind(this));
        this.buttons.forEach((button) => {
            button.addEventListener('click',(event) => {
                this.addToShop(event);
            });
        });
    }
    addToShop(event){
        const {id,title,price,author,img} = this.products[this.buttons.indexOf(event.target)];
        const div = document.createElement('div');
        div.classList.add('shop__item');
        div.innerHTML = `
            <img class="product__img alt="product-image" src=${img}>
            <h2 class="product__title">${title}</h2>
            <p class="product__author">${author}</p>
        `;
        console.log(this)
        this.shopList.appendChild(div);
    }
    openShop(){
        this.shopList.classList.toggle('active');
        this.container.classList.toggle('activeShop');
    }
}

const shop = new Shop();
console.log(shop)