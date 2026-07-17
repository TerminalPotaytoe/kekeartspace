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

	buildFAQ();

	revealSections();

});