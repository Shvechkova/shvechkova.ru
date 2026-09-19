// const text = document.querySelector(".text1");
// text.innerHTML = text.innerText
// 	.split("")
// 	.map(
// 		(char, i) => `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`
// 	)
// 	.join("");


// $(document).ready(function() {
//     $('.menu-burger__header').click(function() {
//         $('.menu-burger__header').toggleClass('open-menu');
//         $('.header_menu').toggleClass('open-menu');
//         $('.main').toggleClass('open-menu');
//         $('.social').toggleClass('open-menu');



//     });

// });

// $('.menu__list-item').on('click', function(){
//     $('.header_menu').removeClass('open-menu'); 
//     $('.main').removeClass('open-menu');
//     $('.social').removeClass('open-menu');
// });

// $('.header__logo-text').on('click', function(){
//     $('.header_menu').removeClass('open-menu'); 
//     $('.main').removeClass('open-menu');
//     $('.social').removeClass('open-menu');
// });

//  $(function () {
//   new AOS.init();
//  })

// $(document).ready(function(){
//     $('#contact-form').submit(function(){
//             // var subject = $(this).find("#subject :selected").text();
//             var name = $(this).find("#name").val();
//             var email = $(this).find("#email").val();
//             var message = $(this).find("#message").val();

//             if(!!name && !!email && !!message){
//                 $.ajax({
//                     type: "POST",
//                     url: "/email.php",
//                      data: { "name": name,"email": email, "message": message},
//                     cache: false,
//                     success: function(){
//                         $('.success').toggleClass('opens');
//                     }
//                 })
//             }
//         return false;
//     });
// });

function createCircularText() {
	const text = document.querySelector(".text1");
	if (!text) return;

	const textContent = text.innerText;
	const characters = textContent.split("");

	// Определяем размер экрана и соответствующие параметры
	const screenWidth = window.innerWidth;
	let fontSize, radius;

	if (screenWidth >= 1400) {
		fontSize = '46px';
		radius = 250;
	} else if (screenWidth >= 1100) {
		fontSize = '36px';
		radius = 200;
	} else {
		fontSize = '32px';
		radius = 150;
	}

	// Создаем временный элемент для измерения ширины символов
	const tempSpan = document.createElement('span');
	tempSpan.style.position = 'absolute';
	tempSpan.style.visibility = 'hidden';
	tempSpan.style.fontFamily = 'Oswald, sans-serif';
	tempSpan.style.fontSize = fontSize;
	tempSpan.style.fontWeight = '600';
	tempSpan.style.display = 'inline-block';
	tempSpan.style.textAlign = 'center';
	tempSpan.style.whiteSpace = 'nowrap';
	document.body.appendChild(tempSpan);

	// Измеряем ширину каждого символа
	const charWidths = characters.map(char => {
		tempSpan.textContent = char;
		return tempSpan.offsetWidth;
	});

	// Удаляем временный элемент
	document.body.removeChild(tempSpan);

	// Вычисляем общую ширину текста
	const totalWidth = charWidths.reduce((sum, width) => sum + width, 0);

	// Вычисляем углы с учетом ширины символов
	let currentAngle = -90; // Начинаем сверху

	text.innerHTML = characters
		.map((char, i) => {
			const charWidth = charWidths[i];
			const charAngle = (charWidth / totalWidth) * 360;
			const spanAngle = currentAngle + (charAngle / 2);
			currentAngle += charAngle;

			return `<span style="transform:rotate(${spanAngle}deg)">${char}</span>`;
		})
		.join("");
}

$(document).ready(function () {
	createCircularText();

	// Пересоздаем текст при изменении размера окна
	window.addEventListener('resize', function () {
		setTimeout(createCircularText, 100);
	});
});