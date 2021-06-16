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
		'<p><span class="blue">그러든지,</span> 말든지.</p><div class="result">정답!</div>'; 
	} else if (clicked.matches('.fail')) {
		quizResult1.innerHTML = 
		'<p><span class="red">그러던지,</span> 말든지.</p><div class="result">오답!</div>';
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
		'<p><span class="blue">아니에요,</span> 괜찮아요.</p><div class="result">정답!</div>'; 
	} else if (clicked.matches('.fail')) {
		quizResult2.innerHTML = 
		'<p><span class="red">아니예요,</span> 괜찮아요.</p><div class="result">오답!</div>';
		quizResultTip2.style.visibility = 'visible';
	}

	
});




quizResult2.addEventListener('click',() => {
	quizResult2.style.visibility = 'hidden';
	quizResultTip2.style.visibility = 'hidden';
});







quizList3.addEventListener('click',event => {
	const clicked = event.target; 
	quizResult3.style.visibility='visible';

	if (clicked.matches('.success')) {
		quizResult3.innerHTML = 
		'<p>벽에 포스터 좀 <span class="blue">붙여줘.</span></p><div class="result">정답!</div>'; 
	} else if (clicked.matches('.fail')) {
		quizResult3.innerHTML = 
		'<p>벽에 포스터 좀 <span class="red">붙혀줘.</span></p><div class="result">오답!</div>';
		quizResultTip3.style.visibility = 'visible';
	}

	
});




quizResult3.addEventListener('click',() => {
	quizResult3.style.visibility = 'hidden';
	quizResultTip3.style.visibility = 'hidden';
});