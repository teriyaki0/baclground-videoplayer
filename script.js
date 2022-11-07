var one = document.querySelector('#one')
var two = document.querySelector('#two')
var three = document.querySelector('#three')
var four = document.querySelector('#four')

var player1 = document.querySelector('#player_1')
var player2 = document.querySelector('#player_2')
var player3 = document.querySelector('#player_3')
var player4 = document.querySelector('#player_4')

var timer1 = document.querySelector('#timer1')
var timer2 = document.querySelector('#timer2')
var timer3 = document.querySelector('#timer3')
var timer4 = document.querySelector('#timer4')


var image = document.querySelector("#image")

var h = document.querySelector("#main_h")

function slide1() {
	h.textContent = "Text1"
	one.classList.add("slide_link_1")
	two.classList.remove("slide_link_1")
	three.classList.remove("slide_link_1")
	four.classList.remove("slide_link_1")
	image.src = "img/RcbRK2L4F5SN-LcbaAo3YBqi6YyisWSElWD1.png"
}
function slide2() {
	h.textContent = "Text2"
	one.classList.remove("slide_link_1")
	two.classList.add("slide_link_1")
	three.classList.remove("slide_link_1")
	four.classList.remove("slide_link_1")
	image.src = "img/68747470733a2f2f7777772e6d69636861656c666f676c656d616e2e636f6d2f7374617469632f7072696d69746976652f6578616d706c65732f32313337343437383731332e706e67.png"
}
function slide3() {
	h.textContent = "Text3"
	one.classList.remove("slide_link_1")
	two.classList.remove("slide_link_1")
	three.classList.add("slide_link_1")
	four.classList.remove("slide_link_1")
	image.src = "img/68747470733a2f2f7777772e6d69636861656c666f676c656d616e2e636f6d2f7374617469632f7072696d69746976652f6578616d706c65732f707972616d6964732e706e67.png"	
}
function slide4() {
	h.textContent = "Text4"
	one.classList.remove("slide_link_1")
	two.classList.remove("slide_link_1")
	three.classList.remove("slide_link_1")
	four.classList.add("slide_link_1")
	image.src = "img/68747470733a2f2f7777772e6d69636861656c666f676c656d616e2e636f6d2f7374617469632f7072696d69746976652f6578616d706c65732f32353736363530303130342e706e67.png"
}

function video1() {
	video.src = "video/videoplayback.mp4"
	timer1.classList.remove("timer")
	timer2.classList.remove("timer")
	timer3.classList.remove("timer")
	timer4.classList.remove("timer")	
	timer1.classList.add("timer")
}
function video2() {
	video.src = "video/videoplayback1.mp4"
	timer1.classList.remove("timer")
	timer2.classList.remove("timer")
	timer3.classList.remove("timer")
	timer4.classList.remove("timer")
	timer2.classList.add("timer")
}
function video3() {
	video.src = "video/videoplayback2.mp4"
	timer1.classList.remove("timer")
	timer2.classList.remove("timer")
	timer3.classList.remove("timer")
	timer4.classList.remove("timer")
	timer3.classList.add("timer")
}
function video4() {
	video.src = "video/Elementor_videoplaceholder.mp4"
	timer1.classList.remove("timer")
	timer2.classList.remove("timer")
	timer3.classList.remove("timer")
	timer4.classList.remove("timer")
	timer4.classList.add("timer")
}

one.addEventListener('click', slide1)
two.addEventListener('click', slide2)
three.addEventListener('click', slide3)
four.addEventListener('click', slide4)

player1.addEventListener("click", video1)
player2.addEventListener("click", video2)
player3.addEventListener("click", video3)
player4.addEventListener("click", video4)
