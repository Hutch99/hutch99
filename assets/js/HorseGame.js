  let rollCount = 0;
  let money = 0;
  const annountment = (words1 = '') => {
    document.getElementById('announcement1').innerHTML = words1;
  }

  
  class Horse {
    constructor(moves, number) {
      this._maxMoves = moves;
      this._currentMove = 0;
      this._currentLoc = 'start-' + number;
      this._name = 'horse-' + number;
      this._number = number;
      this._startLoc = 'start-' + number;
      this._finishLoc = 'finished-' + number;
      this._scratched = false;
      this._cost = '0';
    }
    
    get name() {
      return this._name;
    }
    get number(){
      return this._number;
    }
    
    get currentLoc() {
      return this._currentLoc;
    }
    set currentLoc(num) {
      this._currentLoc = num;
    }

    get currentMove(){
      return this._currentMove;
    }
    set currentMove(num){
      this._currentMove = num;
    }

    get maxMoves() {
        return this._maxMoves;
      }

    get scratched() {
        return this._scratched;
      }
    set scratched(bol) {
        this._scratched = bol;
    }

    get cost(){
      return this._cost;
    }
    
    set cost(num){
      this._cost = num;
    }
    moveForward() {
      this.currentMove++;
        //return this.currentMove;
    }

    moveBackward(){
      this.currentMove--;
        //return this.currentMove;
    }
    set currentMove(num){
        const out1 = document.getElementById('horse-'+ this.number +'-out-1');
        const out2 = document.getElementById('horse-'+ this.number +'-out-2');
        const out3 = document.getElementById('horse-'+ this.number +'-out-3');
        const out4 = document.getElementById('horse-'+ this.number +'-out-4');
        const finish = document.getElementById('finish-'+ this.number);
        const start = document.getElementById('start-'+ this.number);
        if(typeof num === 'number' && num <= this.maxMoves && num > -5){
            this._currentMove = num;
            for(let i = 1; i <= this.maxMoves; i++){
              const move = document.getElementById('horse-'+ this.number +'-move-' + i);
              (move ? move.innerHTML = 'O' : false);
              (move ? move.style.background = '' : false);
            };
            (start ? start.innerHTML = 'O' : false);
            (start ? start.style.background = '' : false);
            (out1 ? out1.innerHTML = 'O' : false);
            (out1 ? out1.style.background = '' : false);
            (out2 ? out2.innerHTML = 'O' : false);
            (out2 ? out2.style.background = '' : false);
            (out3 ? out3.innerHTML = 'O' : false);
            (out3 ? out3.style.background = '' : false);
            (out4 ? out4.innerHTML = 'O' : false);
            (out4 ? out4.style.background = '' : false);
            (finish ? finish.innerHTML ='+': false);
            (finish ? finish.style.animation = '' : false);
            (finish ? finish.style.background = '' : false);
            switch (num) {
                case this.maxMoves:
                    this.scratched = false;
                    finish.innerHTML = this.number;
                    finish.style.background = 'green';
                    finish.style.animation = 'blinker 1s linear infinite';
                    break;
                case 0:
                    this.scratched = false;
                    start.innerHTML = this.number;
                    start.style.background = 'green';
                    break;
                case -1:
                    this.scratched = true;
                    this.cost = 1; 
                    out1.innerHTML = this.number+'- $1'; 
                    out1.style.background = 'RED';
                    break;
                case -2:
                    this.scratched = true;
                    this.cost = 2; 
                    out2.innerHTML = this.number+'- $2';
                    out2.style.background = 'RED';
                    break;
                case -3:
                    this.scratched = true;
                    this.cost = 3; 
                    out3.innerHTML = this.number+'- $3';
                    out3.style.background = 'RED';
                    break;
                case -4:
                    this.scratched = true;
                    this.cost = 4; 
                    out4.innerHTML = this.number+'- $4';
                    out4.style.background = 'RED';
                    break;
                default:
                  if(num > 0 && num < this.maxMoves){
                    this.scratched = false;
                    document.getElementById('horse-'+ this.number +'-move-' + num).innerHTML = this.number;
                    document.getElementById('horse-'+ this.number +'-move-' + num).style.background = 'green';
                  }
                  else{
                    console.log(`no move - Number: ${num}. MaxMoves: ${this.maxMoves}`);
                  }
              }            
        }
        else{
            console.log('error - number at Top or Bottom: ${num}');
        }
    }
  };

  const winGame = () => {  //win game function
        //show popup with summary and buttons to reset game and start over or quit?
  };


  //dice mechanics - class? roll, 


  const rollDice = () => {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    const diceTotal = dice1 + dice2 - 2;
    console.log(diceTotal);
    if(!horses[diceTotal].scratched){
    switch (rollCount) {
      case 0:
            horses[diceTotal].currentMove = -1; 
            annountment('Horse #:'+ horses[diceTotal].number +' is first scratch')       
        break;
      case 1:
            horses[diceTotal].currentMove = -2; 
            annountment('Horse #:'+ horses[diceTotal].number +' is second scratch')  
        break;
      case 2:
            horses[diceTotal].currentMove = -3; 
            annountment('Horse #:'+ horses[diceTotal].number +' is third scratch')  
        break;
      case 3:
            horses[diceTotal].currentMove = -4; 
            annountment('Horse #:'+ horses[diceTotal].number +' is the last scratch')  
        break;
      default:
        horses[diceTotal].moveForward(); 
        annountment('Horse #:'+ horses[diceTotal].number +' advances!')  
        break;
    }
    rollCount++;
  }
  else if(rollCount > 3){
    money = money + horses[diceTotal].cost;
    document.getElementById('money').innerHTML = '$'+money;
    annountment('Horse #:'+ horses[diceTotal].number +' is scratched! Put $'+ horses[diceTotal].cost +' in the pot!!'); 
    }
    else{
      annountment('Horse #:'+ horses[diceTotal].number +' cant scratch twice, roll again!'); 
      console.log(rollCount);
    }
    document.getElementById('dice1').innerHTML = dice1;
    document.getElementById('dice2').innerHTML = dice2;
  };


//cards mechanics - class?, deal, list of cards
  class Deck{
    constructor(){
      this.deck = [];
      this.reset();
      this.shuffle();
    }
    reset(){
      this.deck = [];
      const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
      const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
      for (let suit in suits) {
        for (let value in values) {
          this.deck.push(`${values[value]} of ${suits[suit]}`);
        }
      }
    }
    shuffle(){
      const { deck } = this;
      let m = deck.length, i;
      while(m){
        i = Math.floor(Math.random() * m--);
        [deck[m], deck[i]] = [deck[i], deck[m]];
      }
      return this;
    }
    deal(){
      return this.deck.pop();
    }
  }
  
const deck1 = new Deck();
//   console.log(deck1.deck);


//keep track of money in the pot
//players - class? money, hand, name, order?
//add player, remove player?
const horses = [];
horses[0] = new Horse(3,2);
horses[1] = new Horse(5,3);
horses[2] = new Horse(7,4);
horses[3] = new Horse(9,5);
horses[4] = new Horse(12,6);
horses[5] = new Horse(13,7);
horses[6] = new Horse(12,8);
horses[7] = new Horse(9,9);
horses[8] = new Horse(7,10);
horses[9] = new Horse(5,11);
horses[10] = new Horse(3,12);


const restartGame = () => {
  //restart game function
  for (let h=0; h <= 10; h++){
    horses[h].currentMove = 0;
  }
  rollCount = 0;
  money = 0;
  document.getElementById('money').innerHTML = '$'+money;
  annountment('Welcome! Roll Dice to start.');
}

restartGame();


