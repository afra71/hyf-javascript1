//step 1
let helloWorld = ["merhaba, Dünya", "Hallo Wereld", "Hallo Welt"];
console.log(helloWorld[0]);
console.log(helloWorld[1]);
console.log(helloWorld[2]);
//step 2
console.log("I'm awesome");
//step 3
let x;
console.log('the value of my variable x, I suppose: undefined');
console.log('the value of my variable x will be:' + x );
x=3;
console.log('the value of my variable x, I suppose: 3');
console.log('the value of my variable x will be:' + x );
//step 4
let y="merhaba";
console.log("The value of my string, I suppose that: merhaba");
console.log("The actual value of y is: " + y);
y="hallo";
console.log("The value of my string, I suppose that: hallo");
console.log("The actual value of y is: " + y);
// step 5
let z = 7.25;
console.log(z);
let a = 7.27;
console.log(a);
if (a > z) {
   console.log(a);
}else {
   console.log(z);
}
//step 6
let array=[];
console.log("empty array");
let pets=['cats','birds','fish'];
console.log("my favorite pets");
pets.push("baby pig")
console.log(pets);
//step 7
let myString = "this is a test";
console.log(myString);
let strLength = myString.length;
console.log(strLength);
//step 8
let xa=5;
let yb="hallo";
if(typeof(xa)== typeof(yb)){
    console.log("same) x and y are SAME TYPE: " + typeof(xa));
}else{
    console.log("same) xa and yb are not same type:" + typeof(xa)+ ", " + typeof(yb))};
let k=8;
let l='leo';
let m=[1,2,3,4,5,4,3,2,1];
let n=false;

console.log("the value is:"+k);
console.log("the value is:"+l);
console.log("the value is:"+m);
console.log("the value is:"+n);

console.log("Type of k:"+typeof(k));
console.log("Type of l:"+typeof(l));
console.log("Type of m:"+typeof(m));
console.log("Type of n:"+typeof(n));


if (k===l){
    console.log("same");}
    else{
        console.log("not same");
    }
    if (k===m){
        console.log("same");}
        else{
            console.log("not same");
        }
        if (m===n){
            console.log("same");}
            else{
                console.log("not same");
            }
            if (n===l){
                console.log("same");}
                else{
                    console.log("not same");
                }


       //step 9
       
       x=7;
       x=x%3;
       console.log("it would be ==> 7%3=1");
       console.log("7 % 3 =", x);

       console.log("1) 12 % 2=", 12%2 );
       console.log("1) 100 % 4=", 100%4 );
       console.log("1) 25 % 8=", 25%8 );
       console.log("1) 75 % 3=", 75%3 );


       //step 10

    let ar= [15,07,97,'afra',];
    console.log(ar);

if (6/0===10/0){
    console.log("compare: 6/0 ===10/0");
}else{
    console.log("cannot compare: 6/0===10/0");
}

console.log("I understand the concepts");