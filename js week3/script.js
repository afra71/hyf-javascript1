

//1. Strings!

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);

let res = myString.replace(/,/g, " ");
console.log(res);

//2. Arrays!

let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.unshift('turtle');
console.log(favoriteAnimals);
favoriteAnimals.splice(1, 0, 'meerkat');
console.log('the new value of the array is: blowfish, meerkat, capricorn, giraffe, turtle');
console.log(favoriteAnimals);
let arr = new Array(4);
console.log("The length of the Array is: 5");
console.log( arr.length );
console.log( favoriteAnimals.pop() );
console.log( favoriteAnimals );
let ar = new Array('blowfish', 'capricorn', 'giraffe');
let index = favoriteAnimals.indexOf('meerkat');
if (index > -1) {
  favoriteAnimals.splice(index, 1);
}
console.log( 'The item you are looking for is at index:'+ index);



//More JavaScript 🎉


//1
function myFunction(x,y,z) {
    var result=(x+y)/z;
    return result;
}
console.log(myFunction(8,2,5));

//2

function colorCar(c){
    console.log('a' + c + 'car');
}
colorCar(' red ');

//3

let myCat = {
    name:"leo",
    age:3,
    color:"orange"
};
function catFunc(){
    console.log(myCat);
}
catFunc(myCat);

//4

function vehicleType(color,code){
    if(code==2){
console.log('a'+ color + 'motorbike')
    }
}
vehicleType(' blue ',2);

//5
3 === 3? console.log("yes"):console.log("no");

//6

function vehicle (color,code,age){
    if(code==1 && age>1){
        console.log('a'+color+'used car');
    }
}
vehicle(' blue ',1,5);

//7
vehicles=["motorbike", "caravan", "bike","plane"];

//8

console.log(vehicle[2]);

//9
function vehicle(color,code,age){
    if(code==3 &&age==1){
        console.log('a '+color +' new '+vehicles[2]);
    }
}
vehicle("green", 3, 1);

 
//10

let sum=["Amazing Joe's Garage, we service  "]
for (let i = 0; i < vehicles.length; i++) {
  sum+= vehicles[i] +'s, ' ;
  }
  console.log(sum  +' and cars');
   //11
   vehicles.push("helicopter");
   
let sum1=["Amazing Joe's Garage, we service  "]
for (let i = 0; i < vehicles.length; i++) {
  sum1+= vehicles[i] +'s, ' ;
  }
  console.log(sum1  +' and cars');
 
   //12
   let empty = {};

  

   //13&14
   let ourTeachers = {
    ivana: "html-css",
    unmesh: "CML",
    arcoVincent: "git",
    jim: "Java script",
  };
  console.log(ourTeachers);


  //15
  let x = [1,2,3];
  let y = [1,2,3];
  let z = y;
  console.log(x==y);
  console.log(x===y);
  console.log(z==y);
  console.log(x==z);

  //16
  let o1 = { foo: 'bar' };
  let o2 = { foo: 'bar' };
  let o3 = o2;
  console.log(o1);
  console.log(o2);
  console.log('o2=o3');

  console.log('yes');
  //17
  let bar = 42;
typeof typeof bar;
//this code returns string because the data type of what typeof returns is always a string, bar on the other hand is still a number.