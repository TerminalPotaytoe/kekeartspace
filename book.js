const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(e) {
	e.preventDefault();

	const name = document.getElementById("name").value;
	const phone = document.getElementById("phone").value;
	const programme = document.getElementById("programme").value;
	const date = document.getElementById("date").value;
	const time = document.getElementById("time").value;
	const notes = document.getElementById("notes").value;

	const message =
` *New Booking Request*

 Name: ${name}
 Phone: ${phone}
 Programme: ${programme}
 Date: ${date}
 Time: ${time}

 Notes:
${notes}`;

	const url = `https://wa.me/6580877237?text=${encodeURIComponent(message)}`;

	window.open(url,"_blank");
});

