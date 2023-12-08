const ratings = document.querySelectorAll('.rating-container>.svg-container');
const userRating = document.querySelector('.user-rating');
const button = document.querySelector('button');
const feedback = document.querySelector('.feedback');
const result = document.querySelector('.result');

let selectedRating;

function resetPrevious(previous) {
	previous.classList.remove('active');
	previous.removeAttribute('active');
	previous.style.pointerEvents = 'auto';
}

function handleClick(event) {
	ratings.forEach(resetPrevious);
	event.target.classList.add('active');
	event.target.setAttribute('active', 'true');
	selectedRating = event.target.getAttribute('id');
	console.log(selectedRating);
	event.target.style.pointerEvents = 'none';
}

function handleSubmit(event) {
	userRating.innerText = selectedRating || 0;
	feedback.style.display = 'none';
	result.style.display = 'flex';
}

ratings.forEach(rating => rating.addEventListener('click', handleClick));

button.addEventListener('click', handleSubmit);