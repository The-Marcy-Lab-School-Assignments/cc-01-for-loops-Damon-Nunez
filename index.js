//1
function countToFifty(){
for(var i = 1; i <= 50; i++) {
    console.log(i);
}
}

//2
function countFromOne(num){
for(var i = 1; i < num ;i++){
    console.log(i);
}
 }


//3
const threeAndFiveInFifty = () => {
    for(let i = 1; i < 51; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}

const threeOrFive = (int) => {
      for(let i = 1; i < int + 1; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            console.log(i);
        }
    }
}
//5
function triple(numbers){
let output = [];
for (let x of numbers)
output.push(x * 3);
 return output;
}


console.log(triple([4,8,10,]));
console.log(countFromOne(5));
console.log(countToFifty());