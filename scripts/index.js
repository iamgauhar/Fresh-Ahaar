let small = [
	"https://www.kindmeal.my/photos/shop/5/504-3481-m.jpg",
	"https://www.kindmeal.my/photos/shop/5/549-4094-m.jpg",
	"https://www.kindmeal.my/photos/shop/5/593-4434-m.jpg",
	"https://www.kindmeal.my/photos/shop/2/277-1549-m.jpg",
	"https://www.kindmeal.my/photos/shop/5/592-4483-m.jpg",
	"https://www.kindmeal.my/photos/shop/6/603-4533-m.jpg",
];

let i = 0;

let img = document.createElement("img");
img.setAttribute("class", "smallslide");

setInterval(() => {
	if (small.length === i) {
		i = 0;
	}
	img.src = small[i];
	document.getElementById("slide2").append(img);
	i++;
}, 2500);

document.getElementById("slide2").addEventListener("click", redirect);
function redirect() {
	window.location.href ="hotpicks.html" ;
	console.log("hi")
}

let big = [
	"https://www.kindmeal.my/photos/deal/7/700-4802-m.jpg",
	"https://www.kindmeal.my/photos/deal/7/701-4904-m.jpg",
	"https://www.kindmeal.my/photos/deal/7/708-4923-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/684-4446-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/644-3810-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/627-3532-m.jpg",
	"https://www.kindmeal.my/photos/deal/6/669-4206-m.jpg",
];

let text = [
	"Tasty Midas Touch,15% Off",
	"Nature Dining,10% Off-Camp Forest",
	"Tasty, Joyful Moments, 10% Off -Moment of Joy",
	"Mangga Natural Lifestyle,20% Off -Mangga Vegetarial Cafe",
	"Lei Cha & Organic Meals, 20% Off -- Green Talk Healthy Organic & Cafe",
	"wholesome Western Experience,20% Off -- Piccolo Cafe",
	"Plant-Based Culinary Experience, 15% Off --Pc Studio Cafe",
];
let disc = [
	"15% Discount",
	"10% Discount",
	"20% Discount",
	"10% Discount",
	"15% Discount",
	"20% Discount",
	"10% Discount",
];

let img1 = document.createElement("img");
img1.setAttribute("class", "big");

let textcon = document.createElement("p");
textcon.setAttribute("class", "textcon");
let dis = document.createElement("h3");
dis.setAttribute("class", "disc");
setInterval(() => {
	if (big.length === i && text.length == i && disc.length == 1) {
		i = 0;
	}
	img1.src = big[i];
	textcon.innerText = text[i];
	dis.innerText = disc[i];
	document.getElementById("discount").append(dis);
	document.getElementById("slidetext").append(textcon);
	document.getElementById("slide1").append(img1);
}, 2500);

document.getElementById("slide1").addEventListener("click", redirect1);
function redirect1() {
	window.location.href = "hotpicks.html";
}

big.map(function (ele) {
	let div = document.createElement("div");
	div.setAttribute("class", "downdiv");
	let img = document.createElement("img");
	img.src = ele;
	img.setAttribute("class", "divimage");
	div.append(img);
	document.getElementById("downslide").append(div);
});
