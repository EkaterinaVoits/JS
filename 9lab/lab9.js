//1.    Представьте фигуры на картинке в виде объектов. 
//Обратите внимание, фигуры имеют одинаковые параметры.
//Выведите: свойства, которые отличают фигуру «зеленый круг»; 
//свойства, которые описывают фигуру «треугольник с тремя линиями»; 
//есть ли у фигуры «маленький квадрат» собственное свойство, которое определяет цвет фигуры.

function task1() {

    let printFiguresProp = "";

    let geomFigure = {
        figureType: '', 
        borderSize: '1',
        borderFill: 'чёрный',
        fill: 'белая',
    }
    printFiguresProp+=`<b>Общие свойства фигур:</b> <br>Толщина обводки: ${geomFigure.borderSize},<br>Цвет обводки: ${geomFigure.borderFill}, <br>Заливка: ${geomFigure.fill}<br><br>`;

    let quadrate = Object.create(geomFigure, {
        figureType: { value: 'квадрат'},
        fill: {  value: 'жёлтая' }, 
        sidesLength: {  value: 10 }
    });

    let inheritQuadrate = Object.create(quadrate, {
        sidesLength: {  value: 5 },
    })

    let circle = Object.create(geomFigure, {
        figureType: { value: 'круг'}
    });

    let inheritCircle = Object.create(circle, {
        fill: {  value: 'зелёная' }
    })

    let triangle = Object.create(geomFigure, {
        figureType: { value: 'треугольник'},
        countPerpendiculars: {value: 1}
    });

    let inheritTriangle = Object.create(triangle, {
        countPerpendiculars: {value: 3}
    })

    printFiguresProp+=`<b>Свойства, которые отличают фигуру «зеленый круг»:</b>  <br>Тип фигуры: ${inheritCircle.figureType}, <br>Заливка: ${inheritCircle.fill}<br><br>`;

    printFiguresProp+=`<b>Свойства, которые описывают фигуру «треугольник с тремя линиями»:</b>  <br>Тип фигуры: ${inheritTriangle.figureType}, <br>Количество перпендикуляров: ${inheritTriangle.countPerpendiculars}<br><br>`;

    printFiguresProp+=`<b>Есть ли у фигуры «маленький квадрат» собственное свойство, которое определяет цвет фигуры:</b>  <br>${inheritQuadrate.hasOwnProperty('fill')}, <br>Заливка: ${inheritQuadrate.fill}`;

    document.getElementById("div_task1").innerHTML = printFiguresProp;
}


// Реализуйте класс Validator, который будет проверять строки. Разработать следующие методы:
// А)  isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. 
//  Если является - возвращает true, если не является - то false.  Предусмотреть полную проверку, а не только на наличие символа @
// Б)  isDomain для проверки домена (.by, .бай) 
// В) isDate для проверки даты 
// Г) isPhone для проверки телефона оператора А1( 29ххххххх, 44ххххххх)

function task2() {

    class Validator {
        isEmail(email) {
            return email.match(/^([\w\-\.])+\@([\w\-\.])+\.([A-Za-z]{2,4})$/) ? true : false;
        }
        isDomain(domain) {
            return domain.match(/^([a-z0-9]){2,100}\.(by|бай)$/) ? true : false;
        } 
        isDate(date) {
            return date.match(/^\d{2}[\. | \- | \s]\d{2}[\. | \- | \s](\d{4}|\d{2})$/) ? true : false;
        }
        isPhone(phone) {
            return phone.match(/^\+375?[\(|\s](25|29|33|44)?[\)|\s][0-9]{3}-[0-9]{2}-[0-9]{2}$/) ? true : false;
        }
    }

    let resultStr='';

    resultStr+=(new Validator().isEmail("Kate06042003@gmail.com"))+`<br>`;
    resultStr+=(new Validator().isEmail("456tgfd_rrrr.erte-er@mail.co"))+`<br>`;

    resultStr+=(new Validator().isDomain("ewrtyu.by"))+`<br>`;
    resultStr+=(new Validator().isDomain("2345_678ytgfds.бай"))+`<br>`;

    resultStr+=(new Validator().isDate("12.12.23"))+`<br>`;
    resultStr+=(new Validator().isDate("12-12-2023"))+`<br>`;

    resultStr+=(new Validator().isPhone("+375(29)666-66-66"))+`<br>`;
    resultStr+=(new Validator().isPhone("+375 44 444-44-44"))+`<br>`;

    document.getElementById("div_task2").innerHTML = resultStr;

}


// 2.  Реализовать класс Student (имя, фамилия, факультет, № зачетки). 
//Конструктор, метод getFullName() вывод имени и фамилии студента, метод getCourse(), 
//выводит текущий курс студента, вычисляя его из номера зачетки, метод getDev(), 
//который выводит количество студентов специальности ДЭВИ.

// Пример:
// Номер зачетки 71201300, где 7 – шифр факультета (7- ФИТ, 6- ИД), далее одна цифра шифр 
//специальности (1-ПОИТ, 2-ИСИТ, 3-ДЭВИ, 4- ПОИБМС),  20 – две последние цифры года поступления, 
//далее одна цифра – 1-бюджет, 2- платники, и три цифры- порядковый номер. 

// Создать массив из 10 студентов, вывести в табличной форме по курсам. 

// Например:
// ФИТ, 
// 1 курс:                         2 курс: 
// Иван Иванов           Петр Петров
// Издательское дело
// 1 курс:
// Петр Петров         Иван Иванов


function task3() {

    class Student {
        constructor(Name, LastName, Faculty, IdRecordBook) {
            this.name = Name;
            this.lastName = LastName;
            this.faculty = Faculty;
            this.idRecordBook = IdRecordBook;
        }
        getFullName() {
            return `${this.name} ${this.lastName}`;
        }
        getCourse() {
            return (new Date().getFullYear() + 1) % 100 - Number(this.idRecordBook.toString().slice(2,4));
        }
        static getDev(studentsArr) {
            let DEIVIstudetnsArr = [];
            for (let stud of studentsArr) {
                if((stud.idRecordBook.toString()[0]) == 7 && (stud.idRecordBook.toString()[1] == 3)) {
                    DEIVIstudetnsArr.push(stud);
                }
            }
            return DEIVIstudetnsArr.length;
        }
    }

    let students = [new Student("Войцехович", "Екатерина", "ФИТ", 73203111),  
                    new Student("Потапчик", "Алла", "ФИТ", 73203112),
                    new Student("Белова", "Виктория", "ФИТ", 72211142), 
                    new Student("Масько", "Дарья", "ФИТ", 71213353), 
                    new Student("Петров", "Коля", "ФИТ", 72223343), 
                    new Student("Иванов", "Андрей", "ФИТ", 73223333), 
                    new Student("Сидоров", "Александр", "ФИТ", 71193336), 
                    new Student("Кинль", "Анастасия", "ТОВ", 61194444),
                    new Student("Крейдич", "Ульяна", "ТОВ", 61204444)]; 

    alert(`Количество дизайнеров: `+Student.getDev(students));

    let print=`<style>table{border:solid black 1x; border-collapse: collapse;text-align: center;} td{border: 1px solid black;padding: 10px;} </style>`;
    
    printStudentsTable(students, 'ФИТ');
    printStudentsTable(students, 'ТОВ');

    function printStudentsTable(studArr, Faculty) {
        print+=`<table><tr>`;
        print+=`<td>${Faculty}</td>`;
        print+=`</tr>`;
        for(i=1; i<5; i++) {
            print+=`<tr><td><b>${i} курс</b></td></tr><tr>`;
            for(let stud of studArr) {
                if(stud.faculty==Faculty){
                    if(stud.getCourse()==i){
                        print+=`<td>${stud.getFullName()}</td>`;
                    }   
                }
                print+=`</tr>`;
            }
        }
        document.getElementById("div_task3").innerHTML = print;
    }

    // function printStudentsTable(studArr) {
    //     let print=`<style>table{border:solid black 1x; border-collapse: collapse;text-align: center;} td{border: 1px solid black;padding: 10px;} </style>`;
    //     print+=`<table><tr>`;
    //     for(let stud of studArr) {
    //         for(i=0; i<11; i++) {
    //             if()
    //         }
    //     }
        
    //     document.getElementById("div_task3").innerHTML = print;
    // }


}