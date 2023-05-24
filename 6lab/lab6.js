// 1.	Реализуйте функцию без параметров. Вызовите ее с произвольным количеством аргументов.
// Если вы передали не более 3-х аргументов, то функция должна возвращать строку, 
// состоящую из значений всех аргументов. Если вы передали более 3-х, но не более 5-ти 
// аргументов – то типы аргументов. Если более 5-ти и не более 7-ми – то   количество 
// аргументов. Если более 7-ми – то сообщение о том, что количество аргументов очень большое.

function task1() {

	function withoutParams(){
		if(arguments.length<=3) {
			let printParamsStr="";
			for (i = 0; i < arguments.length; i++) {
		        printParamsStr += arguments[i] + ", ";
		    }
		    alert("Значеня всех аргументов: "+printParamsStr);
		} else if (arguments.length > 3 && arguments.length <= 5) {
			let printTypesStr="";
			for (i = 0; i < arguments.length; i++) {
		        printTypesStr += typeof arguments[i] + ", ";
		    }
		    alert("Типы переданных аргументов: "+printTypesStr);
		} else if (arguments.length > 5 && arguments.length <= 7) { 
			alert("Количество параметров: " + arguments.length);
		} else if (arguments.length > 7) {
			alert("Количество аргументов очень большое");
		}
	}

	withoutParams(1,2);
	withoutParams(1, null, "b", 5.7);
	withoutParams(1,2,3,4,5,6);
	withoutParams(1,2,3,4,5,6,7,8,9);
}

//2 (примеры)

/*
1. a не определено
2. a не определено
3. не удается получить доступ к 'a' перед инициализацией
4. undefined
5. не удается получить доступ к 'a' перед инициализацией
6. 2
7. 3   
*/

// var a=2;
// window.a=3; свойство глобального объекта 
// alert(a);


//3.	Создайте функцию вычисления суммы s двух чисел a и b. a передается 
//в качестве аргумента функции, b на 1 больше a – рассчитывается в функции. 
//Функция выводит сумму s. Чему будет равен LexicalEnvironment на каждом шаге 
//выполнения функции (укажите в комментариях)?

function task3() {
	function sum(a) {
		// LexicalEnvironment = { a: 2}
		let b = a + 1; // LexicalEnvironment = { a: 2, b: 3}
		let s = a + b; // LexicalEnvironment = { a: 2, b: 3, s: 5}
		alert(s);
	}

	sum(2);
}


//4.	Что будет выведено в окне? Почему не undefined?

function task4() {
	let s = 5; 
	function sum() {
    	alert(s);
	}

	sum(); //5
}


//5
//Вариант 2
//Когда код хочет получить доступ к переменной – сначала происходит поиск во 
//внутреннем лексическом окружении, затем во внешнем, затем в следующем и так далее, до глобального.

function task5() {
	let currentCount=1; 

	function makeCounter() {
		return function() {
			return currentCount++;
		};
	}

	let counter=makeCounter();
	let counter2=makeCounter();

	alert(counter()); //1
	alert(counter()); //2

	alert(counter2()); //3
	alert(counter2()); //4
}


//6.	Функция sum принимает параметра a и b и выводит их значения. 
//Дополните функцию чтобы была возможность рассчитать сумму чисел вне функции и записать результат в свойство функции s.

function task6() {
	function sum(a, b) {
    	sum.a = a;
    	sum.b = b;
    	alert(`a = ${a}, b = ${b}`);
  }

  sum(2, 3);

  //sum.s = a + b;
  sum.s = sum.a + sum.b;
  alert(sum.s);
}


//7.	

function task7() {
	let value = 0;

	function f() {
		if (1) {
		value = true;
		} else {
		value = false;
		}

		alert(value); // true
	}

	f();
}


//8.	Выведите имена всех функций из предыдущих задач.

function task8() {
	alert(task1.name);
	alert(task3.name);
	alert(task4.name);
	alert(task5.name);
	alert(task6.name);
	alert(task7.name);
	alert(task8.name);
	
}
