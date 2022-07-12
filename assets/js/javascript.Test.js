console.log('Node is installed!');

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){
      if(typeof num === 'number' && num >= 0){
          this._numOfSensors = num;
      }
      else{
        console.log(" Pass in a number that is greater than or equal to 0");
      }
    }
    
  };

  
  let horses = {
    2: { 
        currentLoc: 'Lily', 
        maxMoves: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    3: { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    4: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    5: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        
    }
}; 