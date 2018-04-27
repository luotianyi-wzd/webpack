import './style.less';
import pic from './1.jpg';
import printMe from './print.js';

function component() {
	var element = document.createElement('div');
	element.classList.add('hello');
	element.innerHTML = "Hello first_webpack";
	var btn = document.createElement('input');
	btn.type = 'button';
	btn.value = '按钮';
	btn.onclick = printMe;
	element.appendChild(btn);
	var myPic = new Image();
	myPic.src = pic;
	myPic.classList.add('cf_img');
	element.appendChild(myPic);

	return element;
}
document.body.appendChild(component());