//1 Вы – модератор на форуме о собаках. Существуют определённые правила модерации комментариев 
//пользователей: длина комментария не более n символов; запрещается использовать слова с корнем 
//«кот» – он заменяется на символ *; слова с корнем «собак» должны быть с большой буквы; 
//перед словом «пес» обязательно должно быть слово «многоуважаемый». Выполните модерацию комментария 
//пользователя и опубликуйте на форуме, правильный комментарий.

function dogsForum() {

	let n=+prompt("Введите длину комментариев", "50");
	let comment=prompt("Ваш комментарий", "");

	if(comment.length>=n) {
		alert(`Ваш комментарий слишком длинный. Введите комментарий ещё раз длиной не более ${n} символов`);
		comment=prompt("Ваш комментарий", "");
	} else if(comment=="") {
		alert(`Введите комментарий`);
		comment=prompt("Ваш комментарий", "");
	} 

	let rightComment=comment.replaceAll('кот', '*').replaceAll('собак', 'Собак').replaceAll('пес', 'многоуважаемый пес');
	alert(`Ваш комментарий: ${rightComment}`);

}


//2 Пользователь вводит свое имя, которое может состоять из одного или нескольких слов. 
//Выведите  имя следующим образом: если оно состоит из одного слова, то слева и справа 
//добавляются по 3 символа *; если из нескольких слов – то каждое слово на отдельной строке 
//и все слова выравнены по правому краю.

function nameTransform() {

	let userName=prompt("Ваше имя", "").trim();

    document.getElementById("task2").innerHTML = "";

    if(userName.includes(" ")) {
    	splitStr(" ");
    } else if (userName.includes("-")) {
    	splitStr("-");
    } else {
    	userName = "***" + userName + "***";
        div = document.getElementById('task2');
        div.style.textAlign="center";
        div.innerHTML += userName;
    }


    function splitStr(splitChar) {
    	let someUserNames = userName.split(splitChar);
    	let printUserNames="";

    	for(let name of someUserNames) {
    		printUserNames+=name+"<br>"; 
    	}

    	div = document.getElementById('task2');
    	div.style.textAlign="right";
    	div.innerHTML+=printUserNames;
    }
}


//3 По номеру дня недели определить какой это день: 1 – пн, 2 – вт, … , 7 – вс.
//Используйте объект. Выведите все нечетные дни (номер и название) и их количество.

function defineDay() {

	let dateObj={
		1:"пн", 
		2:"вт", 
		3:"ср", 
		4:"чт", 
		5:"пт", 
		6:"сб", 
		7:"вс"
	};

	let key=prompt("Введите число от 1 до 7", "1");
	alert(dateObj[key]);

	let printOddDays="Нечётные дни: \n";
	let countOddDays=0;
	
	for(let key in dateObj) 
	{
		if(key%2==1){
			printOddDays+=key+" "+dateObj[key]+"\n";
			countOddDays++;
		}
	}

	printOddDays+=`Количество нечётных дней: ${countOddDays}`;
	alert(printOddDays);
}


//4 На сайте все элементы оформлены одинаково. У всех кнопок одинаковые ширина, высота, 
//цвет фона и текста. Все ссылки имеют одинаковые размер шрифта, гарнитуру и цвет текста. 
//Для привлечения внимания элементы выделяют желтым цветом (цвет фона). Создайте объекты для кнопок, 
//для ссылок и акцентных элементов (3 объекта!!). Используя эти объекты, создайте акцентные кнопки и ссылки.

function makeElementsStyle() {

	let buttonObj ={
		width: "250px",
		height: "40px",
		"text-align": "center",
		"background-color": "#f2bfc6",
		"font-size": "20px", 
		"font-family": "cursive",
		margin: "10px",
	};

	let linkObj = {
		"font-family": "Open Sans",
		"font-size": "20px", 
		color:"blue",	
		margin: "10px",
	};

	let accentObj = {
		"background-color": "yellow",
	};

	let btn=document.createElement("button");
	btn.innerHTML="button_4task";
	Object.assign(btn.style,buttonObj);
	document.body.appendChild(btn);

	let link=document.createElement("a");
	link.innerHTML="link_4task";
	Object.assign(link.style,linkObj);
	document.body.appendChild(link);

	let accentBtn=document.createElement("button");
	accentBtn.innerHTML="accentButton_4task";
	Object.assign(accentBtn.style,buttonObj, accentObj);
	document.body.appendChild(accentBtn);

	let accentLink=document.createElement("a");
	accentLink.innerHTML="accentlLink_4task";
	Object.assign(accentLink.style,linkObj, accentObj);
	document.body.appendChild(accentLink);

}


//5 Создайте функцию, которая принимает несколько объектов в качестве параметров и 
//возвращает новый объект со всеми свойствами из входных объектов.

function paramsFunc() {

	let user = {
		name:"Alex",
		age: 20,
	};
	let studies = {
		grade: 3,
		group: 10	
	}
	let memberBrsm= {
		isMember : false,
	}

	function creatingObject(u, s, m) {
		let clone= Object.assign({},user, studies, memberBrsm );
		return "Студент: "+clone.name+"<br>Группа: "+ clone.group+"<br>Член БРСМ: "+ clone.isMember;
	}

	document.getElementById("task5").innerHTML = creatingObject(user, studies, memberBrsm);
}



//6.Создайте башню-пирамиду, состоящую из символов "*". В качестве входного параметра 
//приходит число этажей башни.

function buildingTower() {

	countFloors=+prompt("Введите число этажей башни", "3");
	let printTower="";

	function buildTower(countFloors) {

		for(i=1; i<=countFloors; i++)
		{
			for(j=1;j<=(2*i-1); j++)
			{
				printTower+="*";
			}
			printTower+="<br>";
		}
		return printTower;
	}

	document.getElementById("task6").innerHTML = buildTower(countFloors);
	
}