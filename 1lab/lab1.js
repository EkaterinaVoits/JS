//----------------------------ЗАДАНИЕ 1-----------------------------
//1.	Выполните форматирование кода, согласно рекомендациям (п.2).

function pow(x,n) {
   let result=1;

   for(var i=0; i<n; i++) {
   	result *=x;
   }

   	return result;   
}

/*x=prompt("x?",'');
n=prompt("n?",'');

if (n<0) {
	alert('Степень ${n} не поддерживается, введите целую степень, большую 0');	
} else {
	alert(pow(x, n));
}*/


//----------------------------ЗАДАНИЕ 2-----------------------------
//2.	Объявите переменные и задайте им следующие значения: имя пользователя, 
//название города, год рождения, красный цвет, ответ пользователя (да/нет), 
//бесконечность, 532, периметр четырехугольника 120 мм, сообщение пользователю «Введенные данные неверны».

function task2() {
	let userName='Kate',
		cityName='Minsk';
	let myBirthday = new Date(2003, 4, 6);
	const COLOR_RED="rgb(255,0,0)";
	let userAnswer=confirm("yes/no");
	let infinity=Infinity,
		number=532,
		perQuadr='периметр четырёхугольника 120 мм',
		message=alert('Введённые данные неверны');
}


//----------------------------ЗАДАНИЕ 3-----------------------------
//3.	Определите тип перменных: 

let a = 5;	//number
let name1 = "Name";	//string
let i = 0;	//number
let double = 0.23;	//number
let result = 1/0;	//number
let answer = true;	//boolean
let no1 = null;		//object

document.write("<h3>Задание 3</h3>")
document.write("Типы данных: a: "  + typeof(a) +", name1: "+ typeof(name1) +", i: "+ typeof(i)+", double: " + typeof(double) +", result: "+ typeof(result)+", answer: " +  typeof(answer) + ", no1: " +typeof(no1))


//----------------------------ЗАДАНИЕ 4-----------------------------
//Вычислите площадь четырехугольника А, если его стороны равны 45 мм и 21 мм. 

let side1=45,
	side2=21;

let sqare=side1*side2;

document.write("<h3>Задание 4</h3>")
document.write(sqare);	


//----------------------------ЗАДАНИЕ 5-----------------------------
//5.	Сколько квадратов В со сторонами 5 мм поместятся в четырехугольник А (45мм х 21мм). 

let count,
	sideB=5,
	sideA1=45,
	sideA2=21;

let sqareA=sideA1*sideA2,
	sqareB=sideB*sideB;

count=Math.floor(sqareA/sqareB); 

document.write("<h3>Задание 5</h3>")
document.write(count);	


//----------------------------ЗАДАНИЕ 6-----------------------------
//6.	Что больше а или b? 

let i1 = 2;
let a1 = ++i1; 
let b1 = i1++;  


//----------------------------ЗАДАНИЕ 7-----------------------------
//7.	Что больше «Привет» или «привет»? «Привет» или «Пока»? 45 или «53»? 
//false или 3? true или «3»? 3 или «5мм»? null или undefined? 

compare1='Привет'>'привет'; //false
compare2=('Привет'>'Пока')?true:false; //true
compare3=45>'53'; //false
compare4=false>3; //false
compare5=(true>'3')?true:false; //false
compare6=(3>'5мм')?true:false; //false
compare7=(null>undefined)?true:false; //false

document.write("<h3>Задание 7</h3>")
document.write(compare1+"<br>"+compare2+"<br>"+compare3+"<br>"+compare4+"<br>"+compare5+"<br>"+compare6+"<br>"+compare7+"<br>");	


//----------------------------ЗАДАНИЕ 8-----------------------------
//8.	Выведите сообщение о том, что введенные пользователем данные неверные

function task8() {

 	x=+prompt("Введите x: ", "x");

	if((x<15 || x>31) && x!=33 && x%2==0) {
		alert("Введённые данные верные");
	} else {
		alert("Введённые данные неверные");
	}
}


//----------------------------ЗАДАНИЕ 9-----------------------------
//9.	Проверьте ответ пользователя на секретный вопрос. Ответ вводит пользователь в окно prompt.

 function task9() {

 	question=prompt("2+2=? ", "");

	if(question==4) {
		alert("Введённые данные верные");
	} else {
		alert("Введённые данные неверные");
	}
}


//----------------------------ЗАДАНИЕ 10-----------------------------
//10.	Пользователь выполняет вход в личный кабинет (вводит логин и пароль в prompt). Выведите 
//соответствующее сообщение об успешном/неуспешном входе в зависимости о правильности введенных данных.
 
 function task10() {

	login=prompt("login");
	pass=+prompt("password", "");

	if(login=="voits"&&pass==1111 ) {
		alert("Вы вошли в личный кабинет");
	} else {
		alert("Введённые данные неверные");
	}
}


//----------------------------ЗАДАНИЕ 11-----------------------------
//11.	 У студента 3 экзамена: русский, математика, английский. Если он сдаст все экзамены, то 
//его переведут на следующий курс. Если он не сдаст ни одного экзамена, то его отчислят. 
//Если он не сдаст хотя бы один экзамен, то его ожидает пересдача. 
//Для решения задачи использовать логические операторы.

 function task11() {

	 alert("Введите +/-");
	 rus=prompt("русский");
	 math=prompt("математика");
	 eng=prompt("английский");

	if(rus=="+" && math=="+" && eng=="+") {
		alert("Все экзамены сданы");
	} else if (rus=="-" && math=="-" && eng=="-"){
		alert("Отчисление");
	} else {
		alert("Пересдача");
	}
}


//----------------------------ЗАДАНИЕ 12-----------------------------
//12.	 Пользователь вводит число а и число b. Вычислите сумму чисел.

function task12() {

	a=+prompt("Введите a: ", "a");
	b=+prompt("Введите b: ", "b");

	alert("Результат сложения числел a и b: " + (a+b));
}


//----------------------------ЗАДАНИЕ 13-----------------------------
//13.	 Вычислите и поясните: 

document.write("<h3>Задание 13</h3>")
document.write("true + true = "+(true + true)+"<br>");	
document.write("0 + '5' = "+(0 + "5")+"<br>");	
document.write("5 + 'мм' = "+(5 + "мм")+"<br>");
document.write("8 / Infinity = "+(8/Infinity)+"<br>");
document.write("9 *'\\n9' = "+(9*"\n9")+"<br>");
document.write("null - 1 = "+(null - 1)+"<br>");
document.write("'5'-2 = "+("5"-2)+"<br>");
document.write("'5px'-3 = "+("5px"-3)+"<br>");
document.write("true - 3= "+(true - 3)+"<br>");
document.write("7 || 0= "+(7 || 0)+"<br>");


//----------------------------ЗАДАНИЕ 14-----------------------------
//К каждому четному числу в диапазоне [1, 10] прибавьте 2, а каждое нечетное число 
//преобразуйте к виду «Xмм», где X – нечетное число. Выведите результат.

document.write("<h3>Задание 14</h3>")

for(t=1; t<11; t++){

	if(t%2==0) {
		document.write((t+2)+"<br>");
	} else {
		document.write((t+'мм')+"<br>");
	}
}


//----------------------------ЗАДАНИЕ 15-----------------------------
//15.	 Пользователь может вводить числа до тех пор, пока введенное число меньше 100.

function task15(){

	do{
		count=+prompt("Введите число: ", "");
	} while (count<100);
	
}

//----------------------------ЗАДАНИЕ 16-----------------------------
//16.	 По номеру дня недели определить какой это день: 1 – пн, 2 – вт, … , 7 – вс. Номер дня вводит пользователь.

function task16() {

	day=+prompt("Введите номер от 1 до 7: ", "");

	switch(day){
		case 1:
		alert("понедельник");
		break;
		case 2:
		alert("вторник");
		break;
		case 3:
		alert("среда");
		break;
		case 4:
		alert("четверг");
		break;
		case 5:
		alert("пятница");
		break;
		case 6:
		alert("суббота");
		break;
		case 7:
		alert("воскресенье");
		break;
	}
}