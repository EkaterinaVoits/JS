//Используя метод работы с DOM, создайте классы Product и Button, 
//которые описывают представление элементов на странице. 
//Используя эти классы, добавьте на страницу нужные элементы.

//Разработайте класс Product, который позволяет добавлять 
//(удалять, изменять) товар в каталог интернет-магазина. 
//Фрагмент макета каталога:

//Описание каждого продукта на странице содержит изображение товара, 
//название, стоимость и кнопку «В корзину». 

/*Класс Product должен позволять:
- добавлять товар на страницу;
- удалять конкретный товар (например, по коду);
- устанавливать изображение товара (ссылку на изображение 
можно передавать в качестве параметры метода);
- устанавливать название товара;
- устанавливать стоимость товара;

Для создания кнопок разработайте класс Button, который позволяет:
- создать, удалить кнопку;
- устанавливать размеры кнопки;
- устанавливать фон кнопки;
- устанавливать текст кнопки.

После того как все товары добавлены на страницу, найдите все 
нечетные товары и задайте им серый фон.

Структура разработанных классов/модулей, должна быть гибкой: 
легко расширяться, изменяться по мере необходимости. 
*/



class Button {
    constructor(Text, Style) {
        this.Button = document.createElement("button");
        this.Button.innerText = Text;
        this.id= Math.floor(Math.random() * 1000) + 1; 
        Object.assign(this.Button.style, {
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '10px 20px',
            cursor: 'pointer',
            margin: '3px'
        }, Style);
    }
    CreateButton(selector) {
        this.Parent = selector; 
        this.Parent.appendChild(this.Button);
    }
    Click(action) {
        this.Button.onclick = action;
    }
}


class Product {
    constructor(Title, Price, Image) {
        this.Product = document.createElement('div');
        this.id = Math.floor(Math.random() * 1000) + 1;
        this.Product.className = "product";

        if ( document.getElementsByClassName("product").length % 2 != 0 ) {
            Object.assign(this.Product.style, {backgroundColor: "#fcf6f6"});
        } else{
            Object.assign(this.Product.style, {backgroundColor: "white"});
        }

        this.title = document.createElement("h4");
        this.title.textContent = Title; 
        this.Product.appendChild(this.title);

        this.price = document.createElement("span");
        this.price.textContent = '$'+Price+'.00'; 
        this.Product.appendChild(this.price);

        this.image = document.createElement("img");
        this.image.src = Image;
        this.Product.appendChild(this.image);


        this.AddToBasketProduct_btn = new Button("В корзину", {
            backgroundColor: '#edb8ba',
        });
        this.AddToBasketProduct_btn.CreateButton(this.Product);
        this.AddToBasketProduct_btn.Click(() => {
            alert("Товар добавлен в корзину");
        });

        this.ChangeContentProduct_btn=new Button("Изменить", {
            backgroundColor: '#edb8ba',
        });
        this.ChangeContentProduct_btn.CreateButton(this.Product);
        this.ChangeContentProduct_btn.Click(() => {
            id_toChange = this.id;
            document.forms[0].elements['title'].value = this.title.textContent;
            document.forms[0].elements['price'].value = this.price.textContent.substring(1);
        });

        this.DeleteFromCatalogProduct_btn=new Button("Удалить", {
            backgroundColor: '#edb8ba',
        });
        this.DeleteFromCatalogProduct_btn.CreateButton(this.Product);
        this.DeleteFromCatalogProduct_btn.Click(() => {
            this.DeleteProduct();
        });
    }

    CreateProduct(selector) {
        this.Parent = selector; 
        selector.appendChild(this.Product); 
    }
    DeleteProduct() {
        this.Product.remove();
    }
    EditProductTitle(Title) {
        this.title.textContent = Title;
    }
    EditProductPrice(Price) {
        this.price.textContent = "$"+ Price+'.00';
    }
}


let catalog =[];
let id_toChange;

const productList= [
    {
        id:999,
        title: 'Macbook Pro',
        price: 2500,
        image: 'https://cdn0.i-store.by/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/201111082127721924/201210170013606399.png@webp'
    },
    {
        id:998,
        title: 'Lenovo Ideapad',
        price: 960,
        image: 'https://m.sila.by/img/catalog2015/img12/tovar128598_2.jpg'
    },
    {
        id:997,
        title: 'HP Pavilion 13',
        price: 1050,
        image: 'https://fk.by/uploads/images/cache/2019/01/03/noutbuk-hp-pavilion-13-an0003nw-5mn63ea-pink-1100x500.jpg'
    },
]


for(let i=0; i<productList.length; i++) {
    productList[i]=new Product(productList[i].title, productList[i].price, productList[i].image); 
    productList[i].CreateProduct(document.querySelector('.container'));
    catalog.push(productList[i]);
}

function AddToCatalog() {
    let productItem = new Product(document.forms[0].elements["title"].value, document.forms[0].elements["price"].value, URL.createObjectURL(document.forms[0].elements["file"].files[0])); 
    productItem.CreateProduct(document.querySelector('.container'));
    catalog.push(productItem);
    
    document.forms[0].elements['file'].value = null;
    document.forms[0].elements['title'].value = '';
    document.forms[0].elements['price'].value = '';
}

function ChangeProductItem() {
    catalog.forEach(prod => {
        if (prod.id == id_toChange){
            prod.EditProductTitle(document.forms[0].elements['title'].value);
            prod.EditProductPrice(document.forms[0].elements['price'].value);
        }
    });
    document.forms[0].elements['file'].value = null;
    document.forms[0].elements['title'].value = '';
    document.forms[0].elements['price'].value = '';
}