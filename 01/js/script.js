"use strict";

if (1) {
	console.log('OK');
} else {
	console.log('Error');
}

const num = 50;

// if(num < 49) {
// 	console.log('error');
// }	else if (num > 100) {
// 	console.log('Много');
// } else {
// 	console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error');


switch (num) {
	case 49:
		console.log('err');
		break;
	case 100:
		console.log('err');
		break;
	case 50:
		console.log('ok');
		break;
}