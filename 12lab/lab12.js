let ballFlag = false;

let ball=document.querySelector('.ball');
let ballArea=document.querySelector('.ballArea');

function handler1() {
    ballFlag = true;
    ball.style.transition = 'none'
}

function handler2(e) {
    if (e.pageY >= window.innerHeight/2 && ballFlag) {
        ball.style.top = e.pageY + 'px'; 
        ball.style.left = e.pageX - 50 + 'px';
        distanceY = window.innerHeight - e.pageY; 
        distanceX = window.innerWidth - e.pageX - 50;
    }
}

function handler3() {
    ball.style.transition = '0.3s ease-out';
    ballFlag = false;
    ball.style.top = distanceY + 'px';
    ball.style.left = distanceX + 'px';
}

if(ballArea){
    ball.addEventListener('mousedown', handler1);
    ballArea.addEventListener('mousemove', handler2);
    ball.addEventListener('mouseup', handler3);
} else {
    alert ("Что-то пошло не так");
}















/*
let ball=document.querySelector('.ball');
let ballArea=document.querySelector('.ballArea');
let distanceY = 0, //
    distanceX = 0;


ball.onmousedown = function(event) {  // (1) отследить нажатие

    //event.clientX / event.clientY – координаты курсора в момент клика относительно окна, для событий мыши.
    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    let shiftY = event.clientY - ball.getBoundingClientRect().top;
    /*alert(event.clientX);
    alert(ball.getBoundingClientRect().left);
    alert(shiftX);
      */

    // передвинуть мяч под координаты курсора
    // и сдвинуть на половину ширины/высоты для центрирования
    
/*
    //событем mousemove отслеживается на document, а не на ball
    function onMouseMove(e) {
       
        if(event.pageY >= window.innerHeight/2) {
            
            //получаем новые координаты 
           ball.style.left = e.pageX - shiftX  + 'px';
           ball.style.top = e.pageY - shiftY + 'px';
           distanceY = window.innerHeight - e.pageY; // насколько отодвигаю, настолько и перемещается через серединy
           distanceX = window.innerWidth - e.pageX - 50;
        }

    }

    // (3) перемещать по экрану
    ball.addEventListener('mousemove', onMouseMove);


    // (4) положить мяч, удалить более ненужные обработчики событий
    ball.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);

        ball.style.transition = '0.3s ease-out';
        ball.style.top = distanceX + 'px';
        ball.style.left = distanceY+ 'px';
        ball.onmouseup = null;
        
    };

};

//отключить браузерный Drag and Drop
ball.ondragstart = function() { 
  return false;
};
*/