const btn_submitAvaliation = document.querySelector('#btn-submit-avaliation');
const frm_popupRating = document.querySelector('#frm-popup-rating');
const popupRating = document.querySelector('.popup-rating');
const inputs = document.querySelectorAll('.popup-rating__input');

var select_rating;

const getValue = (el) => {
	select_rating = el.value;
};

btn_submitAvaliation.onclick = function (e) {
	// e.preventDefault();
	if (select_rating === undefined) {
		console.log(inputs);
		inputs.forEach(item => {
			item.classList.add('focus');
			setTimeout(() => item.classList.remove('focus'), 500);
		});
		return;
	}
	PopupRatingComponent(popupRating, select_rating)
};

const PopupRatingComponent = (father, data) => {
	father.innerHTML = "";
	const element = `
	<div class="popup-rating--success">
		<div class="popup-rating__image">
			<img src="images/illustration-thank-you.svg" alt="">
		</div>
		<div class="poup-rating__body">
			<span class="popup-rating__avaliation">You selected ${data} of 5</span>
			<h2 class="popup-rating__title" >Thank you!</h2>
			<p class="popup-rating__text">We appreciate you taking the time to give a rating. If you ever need more support,
				don’t hesitate to get in touch!</p>
		</div>
	</div>`;

	father.insertAdjacentHTML("beforeend", element);
}
