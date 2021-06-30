// Image switcher code

var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/ebi.jpg')
	{		 
		myImage.setAttribute('src','images/20210622_已排版_low.jpg');
    } 
	else {
      myImage.setAttribute('src','images/ebi.jpg');
    }
}

//添加客製化歡迎訊息

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	let myName = prompt('Please enter your name.');
	if(!myName){
		setUserName();
	}
	else{
	localStorage.setItem('name', myName);
	myheading.innerHTML = '一天有24小時' + myName;
	}
}

if(!localStorage.getItem('name'))
{
	setUserName();
}
else{
	let storedName = localStorage.getItem('name')
	myHeading.innerHTML = '一天有24小時' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

//不知道為什麼要重新整理，h1才會改變成輸入名字後的結果
