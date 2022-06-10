



function newStyle() {
	let newColor = '';
	let newFont = ''; 
	let x = Math.floor(Math.random()*7); 
	switch (x){
	  case 0:
		newColor = 'red';
		newFont = 'Times New Roman'; 
		break;
	  case 1: 
		newColor = 'blue';
		newFont = 'Florence, cursive'; 
		break;
	  case 2:
		newColor = 'yellow';
		newFont = 'Verdana';
		break; 
	  case 3:
		newColor= 'purple';
		newFont = 'Courier New';
		break
	  case 4:
		newColor = 'cyan';
		newFont = 'Georgia'; 
		break;
	  case 5:
		  newColor = 'maroon';
		  newFont = 'Palatino';
		  break;
	  case 6: 
		  newColor = 'lime';
		  newFont = 'Impact';
		  break;
	}
	var elem = document.getElementById('OnCLick2');
	elem.style.color = newColor;
	elem.style.fontFamily = newFont; 
  }

function changeColor(elmt) {
    //alert(this);
    elmt.innerHTML = "Click Again";
    //var tagnName = document.getElementById(elmt)
    var randomcolor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    elmt.style.color = randomcolor;
}

function createBingoCard() {
  // console.log('in createBingoCard');
  // console.log('12-random-bingo-card');
  for (var i = 0; i <= 23; i++) {
    var newRandomNum = Math.floor(Math.random() * 75);
    // console.log('newRandomNum', newRandomNum);
    document.getElementById('square' + i).innerHTML = newRandomNum;
  }
}

let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

function showInfo(){
	if (moreInfo.style.display == 'block'){
      moreInfo.style.display =('none');
	  readMore.innerHTML = 'Read More';
	}
	else
	{
		moreInfo.style.display =('block');
		readMore.innerHTML = 'Read Less';
	}
}
readMore.addEventListener('click', showInfo);
//document.getElementById('bingoreset').onclick = createBingoCard;

onload = createBingoCard;
let colorButton = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let scrollButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
event.target.style.backgroundColor = randomColor;
}

colorButton.addEventListener('click',colorChange);
scrollButton.onwheel = colorChange;


let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');
// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
	itemOne.style.width = ''
	itemTwo .style.backgroundColor = ''
	itemThree.innerHTML = 'The mouse must leave the box to change the text'
	itemFive.style.display = "none"
  };
  resetButton.onclick = reset;
  
  function increaseWidth(){
	itemOne.style.width = '600px';
  }
  function changeBackground(){
	itemTwo.style.backgroundColor = "red";
  }
  function changeText(){
	itemThree.innerHTML = "The mouse has left the element";
  }
  function showItem(){
	itemFive.style.display = 'block';
  }
  itemTwo.addEventListener('mouseup',changeBackground);
  itemOne.addEventListener('mouseover', increaseWidth);
  itemThree.addEventListener('mouseout',changeText);
  itemFour.addEventListener('mousedown', showItem);

let ball = document.getElementById('float-circle');
function up(){
  ball.style.bottom = '250px';
}
function down(){
  ball.style.bottom = '50px';
}
document.addEventListener('keydown', up);
document.addEventListener('keyup', down);

