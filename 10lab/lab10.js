//Задание 1
//1.Создайте класс описывающий веб-компонент. Конструктор этого класса принимает селектор. 
//Класс содержит методы, один из них показывает, другой – скрывает компонент.

class WebComponent {
    constructor(selector) {
        this.WebComponent = document.createElement('div');
        this.WebComponent.className = selector;
        document.getElementById('div_task1').append(this.WebComponent); 
    }
    show() {
        this.WebComponent.style.display = '';
    }
    hide() {
        this.WebComponent.style.display = 'none';
    }
}

//2. Создайте класс описывающий блочный элемент. Класс наследуется от веб-компонента 
//и принимает  options – объект свойств блочного элемента: селектор, размер, цвет.   
//Создайте два блочных элемента: первый – красного цвета размером 100х100px,
// второй – синего цвета размером 120х120px.

class BlockComponent extends WebComponent {
    constructor(selector, options) {
        super(selector); 
        Object.assign(this.WebComponent.style, options); 
    }
}

function task2() {
    let styleOfRed = {
        background: "Red",
        width: "100px",
        height: "100px",
        display: "none"
    }

    let styleOfBlue = {
        background: "Blue",
        width: "120px",
        height: "120px",
        display: "none"
    }

    let redBlock = new BlockComponent("redBlock", styleOfRed); 
    let blueBlock = new BlockComponent("blueBlock", styleOfBlue);

    let showElementsButton = document.createElement('button');
    showElementsButton.innerHTML = "Показать компоненты";
    document.getElementById('div_task2').append(showElementsButton);

    showElementsButton.onclick = function () {
        redBlock.show();
        blueBlock.show();
    }

    let hideElementsButton = document.createElement('button');
    hideElementsButton.innerHTML = "Скрыть компоненты";
    document.getElementById('div_task2').append(hideElementsButton);

    hideElementsButton.onclick = function () {
        redBlock.hide();
        blueBlock.hide();
    }
}


//3. Создайте класс, наследующий от блочного элемента, который создает круг. ]
//Создайте зеленый круг с диаметром 90px.

class CircleComponent extends BlockComponent {
    constructor(selector, options) {
        super(selector, options); 
        this.WebComponent.style.borderRadius = "50%";
    }
}

function task3() {
    let styleOfGreen = {
        background: "Green",
        width: "90px",
        height: "90px"
    }
    let greenCircle = new CircleComponent("greenCircle", styleOfGreen);
}

//Определите классы двух компонентов на выбор, например, кнопка, прелоадер, 
//пагинация, всплывающая подсказка (tooltip) и др. Каждый компонент должен 
//включать не менее четырех вариантов отображения элементов (т.е. не менее 
//трех наследующих классов от базового). Элементы должны отличаться не только 
//по внешнему виду, но по функциональности.


class Button {
    constructor(content) {
        this.Button = document.createElement("button");
        this.Button.innerText = content;
        this.Button.style.padding = "10px";
        this.Button.style.margin = "10px";
        document.body.append(this.Button);
    }
}

class Button_2 extends Button {
    constructor(content) {
        super(content);
        Object.assign(this.Button.style, {
            background: "green",
            transitionDuration: "1s"
        });
        this.Button.onclick = () => {
            Object.assign(this.Button.style, { background: "red", cursor: "grab"});
        } 
    }
}

class Button_3 extends Button {
    constructor(content, message) {
        super(content);
        Object.assign(this.Button.style, {
            background: "yellow",
            border: "0px",
            cursor: "cell",
            boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",
        });
        this.Button.onclick = function() {
            alert(message); 
        };
    }
}

class Button_4 extends Button {
    constructor(content) {
        super(content);
        Object.assign(this.Button.style, {
            background: "pink",
            opacity: "0.2",
            borderRadius: "10px",    
        });
        this.Button.onclick = () => {
            Object.assign(this.Button.style, { width:"20%", opacity:"1"});
        } 
    }
}

class Image {
    constructor(src) {
        this.Image = document.createElement("img");
        this.Image.src=src;
        this.Image.style.height="150px",
        this.Image.style.margin = "10px",
        document.body.append(this.Image);

        document.getElementById('div_task3').append(this.Image); 
    }
}

class Image_2 extends Image{
    constructor(src) {
        super(src);
        Object.assign(this.Image.style, {
            borderRadius: "10px",    
            transitionDuration: "1s"
        });
        this.Image.onclick = () => {
            Object.assign(this.Image.style, {  filter: "grayscale(100%)"});
        } 
    }
}

class Image_3 extends Image{
    constructor(src) {
        super(src);
        Object.assign(this.Image.style, {
            filter: "blur(4px)"
        });
        this.Image.onclick = () => {
            Object.assign(this.Image.style, { width:"20%", height:"20%"});
        } 
    }
}

class Image_4 extends Image{
    constructor(src) {
        super(src);
        Object.assign(this.Image.style, {
            filter: "invert(100%)",
        });
        this.Image.onclick = () => {
            Object.assign(this.Image.style, { float: "left" });
        } 
    }

}

function task4() {

    let button_1= new Button("Кнопка 1");
    let button_2=new Button_2("Кнопка 2");
    let button_3=new Button_3("Кнопка 3", "MESSAGE");
    let button_4=new Button_4("Кнопка 4");

    
    let img_1=new Image("img1.jpg");
    let img_2=new Image_2("img1.jpg");
    let img_3=new Image_3("img1.jpg");
    let img_4=new Image_4("img1.jpg");

}


