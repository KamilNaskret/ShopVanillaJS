import {products} from "./Products.mjs";

class Product{
    constructor(id,title,price,author,image){
        this.id=id;
        this.title=title;
        this.price=price;
        this.author=author;
        this.image=image;
        this.container=null;
        this.initialize();
        this.productItem();
    }
    initialize(){
        this.container=document.querySelector('[data-productContainer]');
    }
    productItem(){
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
            <img class="product__img alt="product-image" src=${this.image}>
            <h2 class="product__title">${this.title}</h2>
            <p class="product__author">${this.author}</p>
            <button class="product__button">Kup Teraz! <span>${this.price} zł</span></button>  
        `;
        this.container.appendChild(div);
    }
}
export{Product};