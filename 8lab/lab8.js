//1.	Хранилище всего имеющегося товара в интернет-магазине представляет собой объект products.  
//Весь товар разделен на категории, одна из них «Обувь», которая в свою очередь делится на виды 
//«Ботинки», «Кроссовки», «Сандалии». О каждой паре обуви хранится следующая информация: 
//уникальный номер товара, размер обуви, цвет, цена. 
//2.	Реализуйте итератор для объекта products для доступа к каждому товару.
//4.	Каждый товар (пара обуви) из предыдущей задачи представляет собой однотипные объекты. 
//Учитывая это, каким образом мы можем оптимизировать создание нового товара в хранилище? 
//Оптимизируйте объект-хранилище, при этом свойства «id», «цвет» и «размер» должны быть доступны 
//только для чтения, свойство «id» не может быть удалено. 
//5.	Добавьте в описание товара новые свойства: «скидка» и «конечная стоимость» (стоимость 
//с учетом скидки). Добавьте геттер и сеттер для свойства «конечная стоимость», 
//учитывая то, что свойства «скидка» и «конечная стоимость» взаимозависимые.

function Product(id, size, color, price, discount) {
	this.id=id;
	this.size=size;
	this.color=color;
	this.price=price;
	this.discount = discount;
    Object.defineProperty(this, "finalPrice", {
        get(){
            return this.price * (1 - this.discount);
        },
        set(value){
        	this.finalPrice = value;
        }
    });
}

Object.defineProperty(Product, "id", {
	writable: false, 
	configurable: false
});
Object.defineProperty(Product, "color", {
	writable: false
});
Object.defineProperty(Product, "size", {
	writable: false
});


let products = {
    shoes: { //category
    	// boots - type, new Product(1000, 37, "чёрный", 240) - prod
        boots: [new Product(1000, 37, "чёрный", 240,0.4), new Product(1001, 38, "белый", 245, 0.2),new Product(1002, 39, "бежевый", 225,0.01)],
        sneakers: [new Product(2000, 36, "розовый", 180, 0.3), new Product(2001, 38, "синий", 190, 0.15),new Product(2002, 39, "чёрный", 220, 0.01)],
        sandals: [new Product(3000, 38, "чёрный", 120, 0.15), new Product(3001, 36, "белый", 110, 0.1)] 
    },
    [Symbol.iterator]() { 
    	let category=Object.values(this.shoes);
    	let typeIndex=0;
    	let prodIndex=0;

    	return {
    		next() {
    			if (prodIndex >= category[typeIndex].length) {
    				typeIndex++;
    				prodIndex=0;
    			}

    			if (typeIndex >= category.length) {
    				return { value: undefined, done: true }; 
    			}

    			return {
    				value:category[typeIndex][prodIndex++],
    				done: false 
    			};
    		}
    	}
    }
}


function printProducts() {
	let printAllProducts="";
	for (let prod of products) {
		printAllProducts+=`<br>Уникальный номер: ${prod.id}, Размер обуви: ${prod.size}, Цвет: ${prod.color}, Цена: ${prod.price} BYN, Скидка: ${prod.discount*100}%, Итоговая цена: ${prod.finalPrice} BYN`; 
	}
	document.getElementById("printAllProductsDIV").innerHTML = printAllProducts;
}

 
//3.	Реализуйте фильтр обуви по цене в заданном диапазоне, по заданному размеру, по заданному цвету. 
//Выведите номера товаров, соответствующих заданному условию (фильтру).

function filterProducts(){
	let printFilterProducts="";

	let chooseAction=+prompt("Выберите- фильтр обуви: 1-по цене, 2-по размеру, 3-по цвету.", "1");

	switch(chooseAction) {
		case 1:
				let minPrice=+prompt("Введите минимальную цену поиска");
				let maxPrice=+prompt("Введите максимальную цену поиска");
				printFilterProducts+=`<b>Обувь в диапазоне от ${minPrice} BYN до ${maxPrice} BYN</b>`;
				for (let prod of products) {
					if(prod.price > minPrice && prod.price < maxPrice)
						printFilterProducts+=`<br>Уникальный номер: ${prod.id}, Размер обуви: ${prod.size}, Цвет: ${prod.color}, Цена: ${prod.price} BYN`; 
				}
				document.getElementById("printAllProductsDIV").innerHTML = printFilterProducts;
     		break;

     	case 2:
     			let prodSize=+prompt("Введите размер");
				printFilterProducts+=`<b>Обувь ${prodSize} размера</b>`;
				for (let prod of products) {
					if(prod.size==prodSize)
						printFilterProducts+=`<br>Уникальный номер: ${prod.id}, Размер обуви: ${prod.size}, Цвет: ${prod.color}, Цена: ${prod.price} BYN`; 
				}
				document.getElementById("printAllProductsDIV").innerHTML = printFilterProducts;
     		break;

     	case 3:
     			let prodColor=prompt("Введите цвет");
				printFilterProducts+=`<b>Обувь цвета: ${prodColor.toLowerCase()}</b>`;
				for (let prod of products) {
					if(prod.color==prodColor.trim().toLowerCase())
						printFilterProducts+=`<br>Уникальный номер: ${prod.id}, Размер обуви: ${prod.size}, Цвет: ${prod.color}, Цена: ${prod.price} BYN`; 
				}
				document.getElementById("printAllProductsDIV").innerHTML = printFilterProducts;
     		break;

     	default:
     		alert("Некорректный ввод");
     		break;

	}
}








