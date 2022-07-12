let repeat = {
    num: function repeatNum(times, action, number){
                for (let i = 0; i < times; i++) {
                action(number);
                }
             },
    numInc: function repeatNumInc(times, action, number){
        for (let i = 0; i < times; i++) {
            action(number++);
        }
    },
    numDec: function repeatNumDec(times, action, number){
        for (let i = 0; i < times; i++) {
            action(number--);
        }
    }
}

console.log("Repeat 1 5 times")
repeat.num(5,console.log, 1);

console.log("Count up 5 times")
repeat.numInc(5,console.log, 1);

console.log("Count down 5 times")
repeat.numDec(5,console.log, 10);