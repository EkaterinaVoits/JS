let gameUsersSet = new Set(["Катя", "Петя", "Коля", "Саша", "Алексей", "Юля"]);
let gameUsersArr = ["Катя", "Петя", "Коля", "Саша", "Алексей", "Юля"];

// 1.	Пользователи регистрируются в игре, вводя свое имя. Проверьте является ли имя пользователя уникальным. 

function checkUserExistence() {
	let userName=prompt("Введите имя", "");

	if(gameUsersSet.has(userName)){
		alert(`Игрок с именем ${userName} уже существует`);
	} else {
		gameUsersSet.add(userName);
		alert("Вы успешно зарегистрировались!");
	}
}

// 2.	Реализуйте возможность сортировки списка игроков по алфавиту в прямом и обратном порядке; 
//	поиск игроков по длине имени; поиск игроков по первой букве имени. 

function sortAndSearchUsers() {

	let chooseAction=+prompt("Выберите действие над списком: 1-сортировка списка игроков по алфавиту в прямом порядке; 2-в обратном порядке; 3-поиск игроков по длине имени; 4-поиск игроков по первой букве имени.", "");

	switch(chooseAction) {
		case 1:
			alert(gameUsersArr.sort());
     		break;
     	case 2:
     		alert(gameUsersArr.sort().reverse());
     		break;
     	case 3:
     		let userNameLength=+prompt("Введите длину имени","4");
     		let printUsersStr="";

     		for(let user of gameUsersArr) {
     			if(user.length==userNameLength){
     				printUsersStr+=user+"\n";
     			}
     		}
     		alert(printUsersStr);
     		break;
     	case 4:
     		let firstLetter=prompt("Введите первую букву имени","А");
     		let printUsersStr2="";

     		for(let user of gameUsersArr) {
     			if(user[0]==firstLetter.toString()){
     				printUsersStr2+=user+"\n";
     			}
     		}
     		alert(printUsersStr2);
     		break;
     	default:
     		alert("Некорректный ввод");
     		break;
	}
}


// 3.	Какую структуру данных (массив или set) вы использовали для решения задач 1 и 2? Почему? 
//Для сравнения реализуйте решение задач 1 и 2 выбрав другую структуру.


function checkUserExistence2() {
	let userName=prompt("Введите имя", "");

	if(gameUsersArr.find(user=>user==userName)){
		alert(`Игрок с именем ${userName} уже существует`);
	} else {
		gameUsersArr.push(userName);
		alert("Вы успешно зарегистрировались!");
	}
}

function sortAndSearchUsers2() {

	let chooseAction=+prompt("Выберите действие над списком: 1-сортировка списка игроков по алфавиту в прямом порядке; 2-в обратном порядке; 3-поиск игроков по длине имени; 4-поиск игроков по первой букве имени.", "");

	switch(chooseAction) {
		case 1:
			let printSortedUsers="";
			let sortedSet=new Set(["Катя", "Петя", "Коля", "Саша", "Алексей", "Юля"].sort());
			for(let user of sortedSet){
				printSortedUsers+=user+"\n";
			}
			alert(printSortedUsers);
     		break;
     	case 2:
     		let printSortedUsersDesc="";
			let sortedSet2=new Set(["Катя", "Петя", "Коля", "Саша", "Алексей", "Юля"].sort().reverse());
			for(let user of sortedSet2){
				printSortedUsersDesc+=user+"\n";
			}
			alert(printSortedUsersDesc);
     		break;
     	case 3:
     		let userNameLength=+prompt("Введите длину имени","4");
     		let printUsersStr="";

     		for(let user of gameUsersSet) {
     			if(user.length==userNameLength){
     				printUsersStr+=user+"\n";
     			}
     		}
     		alert(printUsersStr);
     		break;
     	case 4:
     		let firstLetter=prompt("Введите первую букву имени","А");
     		let printUsersStr2="";

     		for(let user of gameUsersSet) {
     			if(user[0]==firstLetter.toString()){
     				printUsersStr2+=user+"\n";
     			}
     		}
     		alert(printUsersStr2);
     		break;
     	default:
     		alert("Некорректный ввод");
     		break;
	}
}


// 4.	Присвойте каждому игроку четырехзначный идентификатор (id может принимать значения в диапазоне [1, 9999]) 
//и сохраните количество набранных им баллов за последнюю игру. Для имитации набранных баллов используйте 
//методы генерации случайных чисел.

function generateRandNumb() {
  return Math.floor(Math.random() * 1000);
}

let gameUsersSet2 = new Set([
	{ name: "Катя"}, 
	{ name: "Петя"}, 
	{ name: "Коля"}, 
	{ name:"Саша" }, 
	{ name:"Алексей"}, 
	{ name:"Юля"} 
]);

function createIDandPoints() {
	for(let user of gameUsersSet2) {
		let id = Symbol("id");
		user[id]=Math.floor(Math.random() * 9998+1);
		user["lastGamePoints"]=generateRandNumb();
	}

	let printUsersWithPoints="";
	for(let user of gameUsersSet2){
    	printUsersWithPoints+=`${user.name} ${user.lastGamePoints} \n`;
    }
    alert(printUsersWithPoints);
}


// 5.	Составьте список игроков, занявших 1-е, 2-е, 3-е места в результате последней игры. 

function createPrizesList() {
	let ratingSet = Array.from(gameUsersSet2).sort(function(a, b) {
		return b.lastGamePoints - a.lastGamePoints;
	});

	let printPrizesList=`1 место\n${ratingSet[0].name} ${ratingSet[0].lastGamePoints} \n 2 место\n${ratingSet[1].name} ${ratingSet[1].lastGamePoints} \n3 место\n${ratingSet[3].name} ${ratingSet[3].lastGamePoints}`;
    alert(printPrizesList);
}


// 6.	Реализуйте возможность сохранять результаты последних 10 игр. Использование какой структуры данных здесь рационально?
//у каждого игрока 10 игр

let usersResultGames = new Map();

function keepTenResults() {
	gameUsersSet2.forEach((user)=> {
		usersResultGames.set(user.name,[
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			user.lastGamePoints ]);
	});

	let printUsersWithPoints="";
	for(let user of usersResultGames){
    	printUsersWithPoints+=user+"\n";
    }
	alert(printUsersWithPoints);
}


//7.	Увеличьте число игроков до n (n задает преподаватель) и определите победителей 
//по результатам каждой игры.

function findWiners(){

	if(usersResultGames.size==0){
		alert("Сначала запустите задание 6");
	}
	else {

		let n=+prompt("Введите n", "");

	if(usersResultGames.size>=n) {
		alert(`Игроков не может быть ${usersResultGames.size} и меньше`);
	} else {

		while(usersResultGames.size!=n && usersResultGames.size<n) {
			let userName=prompt("Введите имя игрока (не могут повторяться)", "");
			//gameUsersSet2.add(userName);

			usersResultGames.set(userName,[
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb(),
			generateRandNumb()]);
		}
		alert("Добавление новых игроков прошло успешно!");
	}

	let printWinnersGames="";

	for (let i = 0; i < 10; i++) {
		let gameWinner;
		let gameWinnerPoints = 0;
	      
		usersResultGames.forEach((val, key) => {
		    if (val[i] > gameWinnerPoints) {
		        gameWinner = key;
		        gameWinnerPoints = val[i];
		    }
		});
		  
		printWinnersGames+="<br><b>Игра "+(i + 1)+" </b>   Победитель: "+gameWinner+", Количество баллов:"+gameWinnerPoints;
		//alert(`Игра ${i + 1}\nПобедитель: ${gameWinner} \nКоличество баллов:${gameWinnerPoints} \n\n`);
	}

	//alert(printWinnersGames);
	document.getElementById("task7").innerHTML = printWinnersGames;
}
}
