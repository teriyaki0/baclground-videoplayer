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
var text = document.querySelector("#text")




function slide1() {
	h.textContent = "Мальдивы.... райский уголок"
	text.textContent = "В начале 70-х годов путешественники-ныряльщики открыли для туризма удивительный подводный мир Мальдивских островов. Бесчисленное количество диковинных разноцветных рыбок среди сказочно красивых кораллов, яркие краски, белоснежный песок пляжей, чистейшее море и редкой красоты закаты - это Мальдивы. На Мальдивах Вас ожидают белые пляжи и великолепные лагуны с кристально чистой водой. Эти острова - одно из самых лучших в мире мест для подводного плавания."
	one.classList.add("slide_link_1")
	two.classList.remove("slide_link_1")
	three.classList.remove("slide_link_1")
	four.classList.remove("slide_link_1")
	image.src = "./img/Maldivi.jpg"
}
function slide2() {
	text.textContent = "О Риме говорят и пишут много.Впечатляющие панорамы Рима чередуются одна за другой. Одной можно любоваться свысока, другую нужно найти, блуждая по римским улочкам между величественными зданиями. Таким открытием для меня была изюминка Рима - квартал Коппеде (Quartiere Coppedè), который находится в самом сердце города, между Саларией (Salaria) и Номентаной (Nomentana), в элитном жилом квартале Триэстэ (Trieste)."
	h.textContent = "Незнакомый Рим"
	one.classList.remove("slide_link_1")
	two.classList.add("slide_link_1")
	three.classList.remove("slide_link_1")
	four.classList.remove("slide_link_1")
	image.src = "./img/roma2.jpg"
}
function slide3() {
	text.textContent = "Киото – один из древнейших городов Японии, и место, где в давние времена располагалась столица страны. Первоначально город назывался Хэйанке, что в переводе с японского означает «Город мира и спокойствия». Именно о Киото, который местные жители неспроста зовут «Городом тысячи храмов». Всему миру, японский город Киото, известен своими многочисленными храмами, барами гейш и тем, что он, один из немногих городов в стране, уцелел от разрушений Второй Мировой войны. Киото – город необыкновенный, красочный и очень романтичный."
	h.textContent = "Киото"
	one.classList.remove("slide_link_1")
	two.classList.remove("slide_link_1")
	three.classList.add("slide_link_1")
	four.classList.remove("slide_link_1")
	image.src = "./img/kioto2.jpg"	
}
function slide4() {
	text.textContent = "Париж – город вечной любви, столица романтики, колыбель современной моды, родина кинематографа как искусства, город-вдохновение для поэтов, художников и дизайнеров; музей под открытым небом с великолепными памятниками архитектуры и достопримечательностями, известными на весь мир. Изучать Париж можно долго, но не нужно спешить. Не откажите себе в удовольствии начинать каждое утро на отдыхе, как истинный француз: заглянуть в ближайшее кафе на одной из очаровательных улочек, выпить чашку бодрящего кофе и съесть мягкий хрустящий круассан."
	h.textContent = "Париж"
	one.classList.remove("slide_link_1")
	two.classList.remove("slide_link_1")
	three.classList.remove("slide_link_1")
	four.classList.add("slide_link_1")
	image.src = "./img/paris2.jpg"
}

function video1() {
	video.src =('./video/videoplayback.mp4')
	timer1.classList.remove("timer")
	timer2.classList.remove("timer")
	timer3.classList.remove("timer")
	timer4.classList.remove("timer")	
	timer1.classList.add("timer")
}
function video2() {
	video.src =('./video/Rome..mp4')
	timer1.classList.remove("timer")
	timer2.classList.remove("timer")
	timer3.classList.remove("timer")
	timer4.classList.remove("timer")
	timer2.classList.add("timer")
}
function video3() {
	video.src =('./video/KyotoJapan.mp4')
	timer1.classList.remove("timer")
	timer2.classList.remove("timer")
	timer3.classList.remove("timer")
	timer4.classList.remove("timer")
	timer3.classList.add("timer")
}
function video4() {
	video.src =('./video/Paris.mp4')
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
