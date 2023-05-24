//1.	Пользователь проходит анкетирование, отвечая на вопросы да/нет (модальное окно confirm). 
//Количество ответов «да» и «нет» сохраняются в объекте, который содержит также имя пользователя 
//и его рейтинг –  разница ответов «да» и «нет». После каждого ответа пользователь видит в окне 
//количество своих ответов «да» и «нет» и текущий рейтинг (см. рисунок). Разработайте функцию, 
//которая возвращает объект пользователя. Для решения задачи нельзя использовать циклы, 
//глобальные переменные для значений и свойств объекта.

function usersTest() {

	createUser();
	
    function createUser() {
    	let userName=prompt("Введите имя", "");

		let user = {
			name: userName,
			numberYes: 0, 
			numberNo: 0, 
			rating: 0  // |numberYes-numberNo|
		};

		let{name, numberYes, numberNo, rating}=user; 
		askQuestion();

		function askQuestion(){
			
			let quest=confirm(name+", "+numberYes+", "+numberNo+", "+rating);
		
			if(quest==true) {
				numberYes++;
				rating=Math.abs(numberYes-numberNo);
			} else {
				numberNo++;
				rating=Math.abs(numberYes-numberNo);
			}

			if(numberYes+numberNo<=6) askQuestion();
		}

		return {
			name:name,
			numberYes: numberYes, 
			numberNo: numberNo, 
			rating: rating
		};
	}
}


//2.	Реализуйте каррированную функцию, которая рассчитывает объем прямоугольного параллелепипеда. 
//Выполните преобразование функции для неоднократного расчёта объема прямоугольных параллелепипедов, 
//у которых одно ребро одинаковой длины.


function calcVolumeParallel() {

	function volume(l) {
		return (w)=>{
			return(h)=>{
				return alert(l*w*h);
			}	
		}
	}

	const paralWithConstHeight=volume(10);
	paralWithConstHeight(5)(2);
	
	volume(100)(5)(2);
}

// function calcVolumeParallel1() {
// 	function volume(l) {
// 		return (w,h)=>{
// 			return alert(l*w*h);
// 		}
// 	}

// 	const paralWithConstHeight=volume(10);
// 	paralWithConstHeight(5,2);
	
// 	volume(100)(5,2);
// }



//3.	Пользователь совершает покупку (вводит сумму стоимости товаров). Если сумма покупки 
//превышает 200 рублей, то пользователь получает скидку 10%, если более 400 р – 20%. Реализуйте 
//функцию discount(), которая принимает параметр «размер скидки». Параметр S – сумма покупки.

function usersPurchases() {
	
	let price, sum=0;

	while(price!=0){
		price=+prompt(`Введите стоимость покупки\nДля завершения покупок нажмите 0`,"50");
		sum+=price;
	}
	
	if(sum>=200 && sum<400) {
		let tenPercent=0.1;
		let withTenPercentSale=discount(tenPercent)(sum);
		alert(`Сумма покупки: ${sum}руб\nВаша скидка: ${tenPercent*100}%\nИтого: ${withTenPercentSale}руб `)
	} else if (sum>=400) {
		let twentyPercent=0.2;
		let withTwentyPercentSale=discount(twentyPercent)(sum);
		alert(`Сумма покупки: ${sum}руб\nВаша скидка: ${twentyPercent*100}%\nИтого: ${withTwentyPercentSale}руб `)
	}

	function discount(salePercent) {
		return (sum)=> {
			return sum-salePercent*sum;
		}		
	}

	// function discount(salePercent) {
	// 	return sum-salePercent*sum;
	// }

}


//4.	Пользователь управляет движением объекта, вводя в модальное окно  команды left, right, up, down. 
//Объект совершает 10 шагов в заданном направлении (т.е. высчитываются и выводятся в консоль соответствующие
// координаты) и запрашивает новую команду. Разработайте генератор, который возвращает координаты объекта, 
//согласно заданному направлению движения. 


function moveObject() {

	let generator=generateObjCoord();

	function* generateObjCoord() {
		let command;
		let coord={
			xCoord : 0,
			yCoord : 0
		}
		//let xCoord=0, yCoord=0;

		while(command!=0) {
			//Текущее координаты объекта: (${xCoord}, ${yCoord})\n
			command=prompt(`Введите команду (left, right, up, down)\nДля завершения нажмите 0`,`left`);
			switch(command) {
				case "left":
					//yield coord.xCoord-=10;	//xCoord-=10;
					yield coord={
						xCoord : coord.xCoord-=10,
						...coord, 
					}
		     		break;
		     	case "right":
					yield coord={ 
						xCoord : coord.xCoord+=10,
						...coord,
					}
		     		break;
		     	case "up":
		     		yield coord={ 
						yCoord : coord.yCoord+=10,
						...coord,
					}
		     		break;
		     	case "down":
					yield coord={ 
						yCoord : coord.yCoord-=10,
						...coord,
					}
		     		break;
		     	case "0":
		     		break;
		     	default:
	     			alert("Некорректный ввод");
	     			break;
			}
		}

	}
	
		for(let value of generator) {
			alert(`(${value.xCoord},${value.yCoord})`);
		}

	
}
