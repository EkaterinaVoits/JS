//-------------------1 TASK-----------------------

const cards=document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
	const card=cards[i];
	card.addEventListener('mousemove', rotateCard);
	card.addEventListener('mouseout', stopRotateCard);
}

function rotateCard(event) {
	const cardItem=this.querySelector('.card-item');

	const halfHeight = cardItem.offsetHeight / 2; 
    const halfWidth = cardItem.offsetWidth / 2;
	
	cardItem.style.transform='rotateX('+-(event.offsetY-halfHeight)/5+'deg) rotateY(' + (event.offsetX - halfWidth)/ 5 + 'deg)'
}

function stopRotateCard(event) {
	const cardItem=this.querySelector('.card-item');
	cardItem.style.transform='rotate(0)';
}


//-------------------2 TASK-----------------------

// const circle = document.querySelector('.progress-ring__circle');
// const radius = circle.r.baseVal.value;
// const circumference = 2 * Math.PI * radius;
// const input = document.querySelector('.percent');

// input.addEventListener('change', function() {
//     setProgress(input.value);
// })

// circle.style.strokeDasharray = `${circumference}`; //два параметра-на скольок отрезков разбивается, и сколько расстояние между ними
// circle.style.strokeDashoffset = circumference;

// function setProgress(percent) {
//     const offset = circumference - percent / 100 * circumference; //параметр dashoffsets
//     circle.style.strokeDashoffset = offset;
// }


//-------------------3 TASK-----------------------

function parallax(event) {
	this.querySelectorAll('.layer').forEach(layer=> {
		let speed = layer.getAttribute('data-speed');
		layer.style.transform=`translateX(${event.clientX*speed/1000}px)`
	});
}

document.addEventListener('mousemove', parallax);


