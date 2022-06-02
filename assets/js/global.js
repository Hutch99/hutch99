



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

