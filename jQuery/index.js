$("h1").addClass("big-title margin");
// $("h1").text("Bye");
// $("h1").removeClass("big-title");
// $("h1").hasClass("margin");
// $("button").text("Bye")
// $("button").html("<em>Hey</em>")
// $("img").attr(
// 	"src",
// 	"https://media.istockphoto.com/id/1156866829/photo/luggages-moving-on-airport-conveyor-belt.webp?b=1&s=170667a&w=0&k=20&c=hSDvw-Ci0oh8dRLHe5AYUmP5girn48rTaLgyr9Nh6Mg="
// );
// $("a").attr("href", "https://yahoo.com");

// Adding Event Listeners

// $("h1").click(() => {
// 	$("h1").css("color", "purple");
// });
// for (let i = 0; i < 5; i++) {
// 	document.querySelectorAll("button")[i].addEventListener("click", () => {
// 		document.querySelector("h1").style.color = "purple";
// 	});
// }

// $("button").click(() => {
// 	$("h1").css("color", "purple");
// });

// $(document).keypress((event) => {
// 	$("h1").text(event.key);
// });

// $("h1").on("mouseover", () => {
// 	$("h1").css("color", "purple");
// });

$("button").on("click", () => {
	$("h1").toggle();
});
