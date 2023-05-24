// 1.	Пользователь вводит данные. Если он ввел число, то преобразуйте его в 16-ричную систему 
// счисления (вывод в верхнем регистре). Если число дробное – округлите его до наибольшего, наименьшего
// и ближайшего целого. Если пользователь ввел текст, то преобразуйте его к верхнему и нижнему регистру.

function dataTransformation() {

	data=prompt("Введите данные", "");

	if (isFinite(data)){		//Number(data) тоже работает
		if (data%1==0){
			alert(`число в шестнадцатиричной системе счисления: ${(Number(data)).toString(16)}`);
		} else {
			alert(`округление до наибольшего: ${Math.ceil(data)}, наименьшего: ${Math.floor(data)}  и ближайшего целого: ${Math.round(data)} `);
		}
	} else {
		alert(`верхний регистр: ${data.toUpperCase()}, нижний регистр: ${data.toLowerCase()}`);
	}
}


//2.	Выпускник сдает ЦТ по русскому языку. Ему дано словарное слово, необходимо ввести в текстовое поле 
//правильный вариант ответа. Проверьте его ответ и сообщите в каком символе он допустил ошибку, если она есть.

function checkWord() {

	let studAnsw=prompt("Напишите слово д_риж_р", "");
	let vocabularWord='дирижёр';

	if (studAnsw.toLowerCase().trim() === vocabularWord.toLowerCase()) {
		alert("Верно");
	} else if(vocabularWord[1]!=studAnsw[1] && vocabularWord[3]==studAnsw[3]) {
		alert("привильно будет писать дИрижёр");
	} else if(vocabularWord[3]!=studAnsw[3] && vocabularWord[1]==studAnsw[1]) {
		alert("привильно будет писать дирИжёр");
	} else if(vocabularWord[3]!=studAnsw[3] && vocabularWord[1]!=studAnsw[1]) {
		alert("привильно будет писать дИрИжёр");
	} else {
		alert("допущена ошибка!");
	}

}
	

//3.	Разработайте геометрический калькулятор для расчета параметров треугольника: площадь, периметр,
// высота, cos, sin, tg, ctg. Пользователь указывает длину катетов.

function geomCalc() {

	let catetus_1=+prompt("Длина первого катета", "5");
	let catetus_2=+prompt("Длина второго катета", "5");

	let square=(catetus_1*catetus_2)/2;
	let hipot=Math.sqrt(catetus_1**2+catetus_2**2);
	let per=hipot+catetus_1+catetus_2;
	let h=(square*2)/hipot;
	let cos=catetus_1/hipot;
	let sin=catetus_2/hipot;
	let tg=catetus_1/catetus_2;
	let ctg=catetus_2/catetus_1;

	alert(`Параметры треугольника: \n 
	Катеты: ${catetus_1}, ${catetus_2} \n
	Площадь ${square} \n
	Периметр ${per} \n
	Высота ${h} \n
	cos ${cos}, sin ${sin}, tg ${tg}, ctg ${ctg}  `  )
}


//4

function concatArrays() {

	function concat(currentElem, nextElem) {
		if (Array.isArray(nextElem)){
			return nextElem.reduce(concat,currentElem);
		} else {
			return currentElem.concat(nextElem);
		}
	};

	let arr=[1, [1, 2, [3, 4]],[2,4]];

	let result=arr.reduce(concat, []);
	alert (result);
}

	

//5.	Найдите сумму элементов массива, если вложенность массива неизвестна. 

function sumArrayElements() {

	function sum(currentElem, nextElem){ 
		if (Array.isArray(nextElem)){
			return nextElem.reduce(sum,currentElem);
		} else {
			return currentElem+nextElem;
		}
	}

	let newArr=[1, [1, 2, [3, 4]],[2,4]].reduce(sum,0);

	alert (newArr);
}


//6.	Напишите функцию, которая на вход принимает массив из студентов, где студент — это объект 
//с полями «имя», «возраст» и «номер группы» {name: string, age: number, groupId: number}, а на 
//выходе возвращает объект, где ключ — это номер группы, а значение — массив из студентов старше 17 лет этой группы.

function createObjectFromArr() {

	let students=[
		{name:"Вася", age: 18, groupId: 3},
		{name:"Петя", age: 17, groupId: 2},
		{name:"Коля", age: 19, groupId: 3},
		{name:"Лёша", age: 20, groupId: 4},
		{name:"Маша", age: 17, groupId: 5},
	];

	let studOlder17=students.filter(student=>student.age>17);

	let groupsArray=[];
	for(i=0; i<studOlder17.length; i++) {
		if(!groupsArray.includes(studOlder17[i].groupId))
			groupsArray.push(studOlder17[i].groupId);
	}

	let studentsByGroup={};

	groupsArray.forEach(group=>studentsByGroup[group]=[]);

	for (i=0; i<studOlder17.length; i++) {
		studentsByGroup[studOlder17[i].groupId].push(groupsArray[i]);
	}

	for(i=0; i<studOlder17.length; i++){
		alert(`Имя: ${studOlder17[i].name} \nВозраст: ${studOlder17[i].age} `)
	}
	
}


//7.	Вам дана строка, состоящая из символов ASCII. Переведите символы в код - число total1, 
//замените все цифры 7 на 1 - число total2. И вычтите из total1 число total2.

function stringTransform() {
	let str='ASCII';
	let total1='';

	for(i=0; i< str.length; i++) {
		 total1+=str.codePointAt(i);
	}

	let total2=total1.replace(/7/g,1);
	
	alert(`Результат: total1 = ${total1},  \ntotal2 = ${total2}, \ntotal1 - total2 = ${total1-total2} `);
}
