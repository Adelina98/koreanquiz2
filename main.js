const swiper = new Swiper('.swiper-container', {
	loop:false, pagination: {el: '.swiper-pagination',},
});

const quizList1 = document.querySelector('.slide1 .quiz-list',);
const quizResult1 = document.querySelector('.slide1 .result-container');
const quizResultTip1 = document.querySelector('.result-tip');

const quizList2 = document.querySelector('.slide2 .quiz-list',);
const quizResult2 = document.querySelector('.slide2 .result-container');
const quizResultTip2 = document.querySelector('.result-tip');

const quizList3 = document.querySelector('.slide3 .quiz-list',);
const quizResult3 = document.querySelector('.slide3 .result-container');
const quizResultTip3 = document.querySelector('.result-tip');




quizList1.addEventListener('click',event => {
	const clicked = event.target; 
	quizResult1.style.visibility='visible';

	if (clicked.matches('.success')) {
		quizResult1.innerHTML = 
		'<p>계곡물에 발을 <span class="blue">담갔다.</span></p><div class="result">정답!</div>'; 
	} else if (clicked.matches('.fail')) {
		quizResult1.innerHTML = 
		'<p>계곡물에 발을 <span class="red">담궜다.</span></p><div class="result">오답!</div>';
		quizResultTip1.style.visibility = 'visible';
	}

	
});




quizResult1.addEventListener('click',() => {
	quizResult1.style.visibility = 'hidden';
	quizResultTip1.style.visibility = 'hidden';
});






quizList2.addEventListener('click',event => {
	const clicked = event.target; 
	quizResult2.style.visibility='visible';

	if (clicked.matches('.success')) {
		quizResult2.innerHTML = 
		'<p>그건 절대 <span class="blue">안 돼요.</span></p><div class="result">정답!</div>'; 
	} else if (clicked.matches('.fail')) {
		quizResult2.innerHTML = 
		'<p>그건 절대 <span class="red">안 되요.</span></p><div class="result">오답!</div>';
		quizResultTip2.style.visibility = 'visible';
	}

	
});




quizResult2.addEventListener('click',() => {
	quizResult2.style.visibility = 'hidden';
	quizResultTip2.style.visibility = 'hidden';
});







quizList3.addEventListener('click',event => {
	const clicked = event.target; 
	console.log("ok");
	quizResult3.style.visibility='visible';

	if (clicked.matches('.success')) {
		quizResult3.innerHTML = 
		'<p>나는 학생 <span class="blue">역할을 맡았어.</span></p><div class="result">정답!</div>'; 
	} else if (clicked.matches('.fail')) {
		quizResult3.innerHTML = 
		'<p>나는 학생 <span class="red">역활을 맡았어.</span></p><div class="result">오답!</div>';
		quizResultTip3.style.visibility = 'visible';
	}

	
});




quizResult3.addEventListener('click',() => {
	quizResult3.style.visibility = 'hidden';
	quizResultTip3.style.visibility = 'hidden';
});











