
// 1. Напишите функцию, которая рассчитывает площадь, диаметр и длину окружности круга. Радиус круга вводит пользователь.

function calcCircleParams() {
	
	let rad = +prompt("Введите радиус окружности:",2);
	
	while(rad <=0) {/*проверка на правильность ввода значений*/
		alert("Ошибка, попробуйте ещё раз");
		rad = +prompt("Введите радиус окружности:",2);
	};

	document.write("Диаметр окружности: " +2*rad +"<br/>"); 
	document.write("Площадь окружности: "+Math.round(Math.PI*Math.pow(rad,2))+"<br/>"); 
	document.write("Длина окружности: " +Math.round(Math.PI*2*rad)+"<br/>"); 
}


/* 2.Реализуйте функцию, которая сообщает пользователю, что его заказ на сумму s принят. 
	Пользователь добавляет товары в корзину (вводит стоимость каждого товара в окно prompt). 
	Если сумма стоимости товаров превысила денежные средства на банковской карте покупателя, 
	сообщите об этом пользователю и предупредите, что последний товар он купить не может, 
	поэтому он должен либо завершить покупку, либо выбрать товар с меньшей стоимостью, которая 
	не превышает остаток n на карте. Чтобы завершить покупку пользователь должен ввести «0».*/

function makeOrder() {

	let s=0;	//заказ на сумму s
	let n=100;	//остаток на карте
	let cost;

	alert("Чтобы завершить покупку, нажмите 0");

	while(cost!=0 && n>0) {

		cost =+ prompt("Введите стоимость товара", 10);

		if(n>=cost) {
			orderOperatins(cost);
		} else {
			alert(`Сумма стоимости последнего товара превысила денежные средства на банковской карте. Вы можете завершить покупку либо выбрать товар с меньшей стоимостью. Остаток на карте: ${n}`);
		}
	};

	if(cost==0 || n==0) alert(`Заказ на сумму ${s} принят. Остаток на карте: ${n}`);

	function orderOperatins(productCost) {
			n-=productCost;
			s+=productCost;
	}
}


//3.	 Реализуйте функцию с тремя параметрами. Первый параметр по умолчанию. 
//	Третий параметр вводит пользователь. Функция возвращает строку из трех параметров.


function treePaeramsFunc(hello="Здравствуйте, ", name, message) {

	name=prompt("Ваше имя","");
	message=". Хорошего дня!"

	return alert(`${hello}${name}${message}`);
}


//4.	 Реализуйте функцию, которая рассчитывает количество присутствующих студентов. 
// Имена присутствующих студентов пользователь вводит в модальное окно.


function countStud() {

	let students = [];
	let stud;

	while(stud!=0) {

		stud=prompt("Введите имя студента","Лёша")
		students.push(stud);

	};

	alert("Количество студентов: "+students.length-1);
}

//5.	 Известны стороны четырехугольника a и b. Если это квадрат, то функция params() 
//возвращает его периметр, если прямоугольник –  то площадь. 
//Создайте params() как Function Declaration и Function Expression. Вызовите ее при создании («на месте»).


function task5_1() { //Function Declaration 
	let a=3, b=3;

	if (a==b) {

		params(a,b); //вызывается-ок

		function params(a,b) {
			alert((a+b)*2);
		}

		params(a,b); //вызывается-ок

	} else {

		function params(a,b) {
			alert(a*b); 

		}
	}

	params(a,b); 
}

function task5_2() { //Function Expression

	let a=3, b=3;
	let params_2;

	if (a==b) {

		//params_2(a,b); //ошибка

		params_2=function(a,b) {
			alert((a+b)*2);
		};

		//params_2(a,b); //ошибка

	} else {

		params_2=function(a,b) {
			alert(a*b);
		};
	}

	params_2(a,b); //вызывается-ок
}


//6.	Вы забыли пароль от электронной почты. Вы помните, что он состоит из 8 символов 
//нижнего регистра. Первые 5 – это буквы английского алфавита, последние 3 – цифры.  
//Один пароль вы успеваете ввести за 3 секунды. Сколько максимум времени вам понадобится, 
//чтобы подобрать пароль? Выведите результат в виде строки «y лет m месяцев d дней h часов 
//min минут s секунд». Для простоты решения можно принять, что в месяце 30 дней.


function passGessing() {

	let enterTime=3;

	let countCombination=Math.pow(26, 5)*Math.pow(10,3);
	let timeInSec=enterTime*countCombination;  

	// 0s, 40m, 18h, 17d, 11m, 1145y

	let s=timeInSec%60;
	let m=((timeInSec-s)/60)%60;
	let hours=((timeInSec-s-m*60)/(60*60))%24;
	let days=((timeInSec-s-m*60-hours*60*60)/(60*60*24))%30;
	let months=((timeInSec-s-m*60-hours*60*60-days*60*60*24)/(60*60*24*30))%12;
	let years=(timeInSec-s-m*60-hours*60*60-days*60*60*24-months*60*60*24*30)/(60*60*24*30*12);

	alert(`${years} лет ${months} месяцев ${days} дней ${hours} часов ${m} минут ${s} секунд`);
	
	//2 variant

	/*let x=timeInSec;
	let sec_print=x%60;
	
	let min=(x-sec_print)/60;
	let min_print=min%60;
	
	let hours=(min-min_print)/60;
	let hours_print=hours%24;

	let days=(hours-hours_print)/24;
	let days_print=days%30;

	let months=(days-days_print)/30;
	let months_print=months%12;

	let years=(months-months_print)/12;
	let years_print=years;

	alert(`${years_print} лет ${months_print} месяцев ${days_print} дней ${hours_print} часов ${min_print} минут ${sec_print} секунд`);*/
}


//7.	 Задачу 3 решите, используя функцию-стрелку. 


let arrowFunc=(hello="Здравствуйте, ", name_1, message)=>{
	name=prompt("Ваше имя","");
	message=". Хорошего дня!"

	return alert(`${hello}${name}${message}`);
};
