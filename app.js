const reviews=[
	{
		stars:5,
		text:"We had such a wonderful and meaningful time at the KeKe Art Space studio. It was more than just a drawing class.",
		author:"SP CHIN SALLY"
	},
	{
		stars:5,
		text:"This was my first time taking a scratch painting class, and I didn't expect it to be so much fun. The teacher helped us create beautiful artwork.",
		author:"Sally Lee"
	},
	{
		stars:5,
		text:"New art academy in Singapore - perfect for anyone interested in art! Suitable for anyone who wants to study art.",
		author:"Sumin Jeong"
	},
	{
		stars:5,
		text:"The environment was quiet and comfortable. Teacher KeKe was friendly and patient.",
		author:"Wan Wan"
	}
];

let currentReview=0;

const reviewSlider=document.getElementById("reviewSlider");
const reviewDots=document.getElementById("reviewDots");
const prevBtn=document.getElementById("prevReview");
const nextBtn=document.getElementById("nextReview");

function buildReviews(){
	reviewSlider.innerHTML="";
	reviewDots.innerHTML="";

	reviews.forEach((review,index)=>{

		const card=document.createElement("div");
		card.className=`review ${index===0?"active":""}`;

		card.innerHTML=`
			<div class="stars">${"★".repeat(review.stars)}</div>
			<p>"${review.text}"</p>
			<h4>- ${review.author}</h4>
		`;

		reviewSlider.appendChild(card);

		const dot=document.createElement("span");
		dot.className=`dot ${index===0?"active-dot":""}`;

		dot.addEventListener("click",()=>{
			showReview(index);
		});

		reviewDots.appendChild(dot);

	});

}

function showReview(index){

	currentReview=index;

	document.querySelectorAll(".review").forEach((review,i)=>{
		review.classList.toggle("active",i===index);
	});

	document.querySelectorAll(".dot").forEach((dot,i)=>{
		dot.classList.toggle("active-dot",i===index);
	});

}

function nextReview(){
	showReview((currentReview+1)%reviews.length);
}

function prevReview(){
	showReview((currentReview-1+reviews.length)%reviews.length);
}

nextBtn.addEventListener("click",nextReview);
prevBtn.addEventListener("click",prevReview);

setInterval(nextReview,5000);

function revealSections(){

	document.querySelectorAll("section").forEach(section=>{

		const top=section.getBoundingClientRect().top;

		if(top<window.innerHeight-100){
			section.classList.add("show");
		}

	});

}

window.addEventListener("scroll",revealSections);

document.addEventListener("DOMContentLoaded",()=>{

	buildReviews();
	revealSections();

});

/* ==========================================
   KEKE BOOKING PAGE
   ========================================== */

const OWNER_NUMBER = "6580877237";

const CHILD_PACKAGES = [
	{
		name: "1 Session",
		price: "SGD 60"
	},
	{
		name: "5 Sessions",
		price: "SGD 250"
	}
];

const ADULT_PACKAGES = [
	{
		name: "1 Session",
		price: "SGD 70"
	},
	{
		name: "5 Sessions",
		price: "SGD 300"
	}
];

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

	const programme = document.getElementById("programme");

	const nameInput = document.getElementById("name");
	const phoneInput = document.getElementById("phone");
	const dateInput = document.getElementById("date");
	const timeInput = document.getElementById("time");
	const notesInput = document.getElementById("notes");

	const cards = document.querySelectorAll(".programme-card");

	programme.addEventListener("change", () => {

		populatePackages();

		cards.forEach(card => {

			card.classList.remove("selected");

			const title =
				card.querySelector("h3").textContent;

			if (
				title.includes("Creative") &&
				programme.value.includes("Creative")
			)
				card.classList.add("selected");

			if (
				title.includes("Professional") &&
				programme.value.includes("Professional")
			)
				card.classList.add("selected");

			if (
				title.includes("DSA") &&
				programme.value.includes("DSA")
			)
				card.classList.add("selected");

			if (
				title.includes("Adult") &&
				programme.value.includes("Adult")
			)
				card.classList.add("selected");

		});

	});

	cards.forEach(card => {

		card.addEventListener("click", () => {

			const text =
				card.querySelector("h3").textContent;

			if (text.includes("Creative"))
				programme.value =
					"Creative Art Programme";

			if (text.includes("Professional"))
				programme.value =
					"Professional & Advanced Drawing";

			if (text.includes("DSA"))
				programme.value =
					"DSA Portfolio Programme";

			if (text.includes("Adult"))
				programme.value =
					"Adult Art Course";

			programme.dispatchEvent(
				new Event("change")
			);

			document
				.getElementById("booking-form")
				.scrollIntoView({
					behavior: "smooth"
				});

		});

	});

	bookingForm.addEventListener("submit", e => {

		e.preventDefault();

		if (
			!nameInput.value.trim() ||
			!phoneInput.value.trim() ||
			!programme.value ||
			!packageSelect.value
		) {

			alert(
				"Please complete all required fields."
			);

			return;

		}

		const message =
`🎨 *New Booking Request*

👤 Name:
${nameInput.value}

📞 Phone:
${phoneInput.value}

🎨 Programme:
${programme.value}

📦 Package:
${packageSelect.value}

📅 Preferred Date:
${dateInput.value || "Not specified"}

🕒 Preferred Time:
${timeInput.value || "Not specified"}

📝 Notes:
${notesInput.value || "None"}

Submitted via Keke Art Space Website.`;

		const url =
			`https://wa.me/${OWNER_NUMBER}?text=${encodeURIComponent(message)}`;

		window.open(url, "_blank");

	});

}

/* ==========================================
   SCROLL ANIMATIONS
   ========================================== */

const observer =
	new IntersectionObserver(entries => {

		entries.forEach(entry => {

			if (entry.isIntersecting) {

				entry.target.classList.add("show");

			}

		});

	},
	{
		threshold: 0.15
	});

document
	.querySelectorAll(
	".programme-card,.card,.booking-form"
	)
	.forEach(el => {

		el.classList.add("hidden");

		observer.observe(el);

	});

/* ==========================================
   FLOATING WHATSAPP BUTTON
   ========================================== */

const floating =
	document.querySelector(".floating-whatsapp");

if (floating) {

	floating.href =
		`https://wa.me/${OWNER_NUMBER}`;

}