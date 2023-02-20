// console.log("hello");
// var firstName = "subham";
//  console.log(firstName);
  
//  let firstname = "bapun";
//  console.log(firstname);
 
// // const pi=3.14 ;
// // console.log(pi);


// // pi=3.15;
// // console.log(pi);


// let firstName = "subham";
// console.log(firstName);
// console.log(firstName[2]);
// console.log(firstName.length);
// console.log(firstName[firstName.length-2]);


// var 1value = 2;//invalid syntax
// console.log(1value);

// var value1 = 5;
// console.log(value1);

// var first_name = "subham";
// console.log(first_name);

// var _firstname = "subham";
// console.log(_firstname);

// var _first_name ="bapun";
// console.log(_first_name);

// var $firstname ="hari";//doubt
// console.log($firstname);

// let firstName = "harish";
// // let firstName ="rama";//we can not define let keyword once declare
// console.log(firstName);

// let firstName ="rama";
// firstName = "dama";
// console.log(firstName);
// console.log(firstName);

//using trim() function we can remove the space
// let firstName = "    anurag"  ;
// console.log(firstName.length);
// firstName= firstName.trim();
// console.log(firstName);
// console.log(firstName.length);
   
//using toUppercase() and toLowercase()
// let firstName ="subham";
// console.log(firstName);
// let upperCase = firstName.toUpperCase();
// console.log("the upper case is :" + upperCase);//concatination
// lowerCase = upperCase.toLowerCase();
// console.log("the lower case is:" + lowerCase);//conactination

//using slice string 
// let firstName ="subham";
// console.log(firstName);
// let slicestring= firstName.slice(0,2);
// console.log("the slice string is:"+slicestring);


// let age =25;
// let firstName="subham";
// console.log(typeof age);
// console.log(typeof firstName);
// let a = (typeof age);
// console.log("the type of variable is"+ a);


//CONVERT STRING TO NUMBER
// let age =+"22.4";
// console.log(typeof age);//by using the symbol of + it will covert any string into number

// conver number to string
// let age = 12;
// let firstName ="subham";
// console.log(typeof age);
// console.log(typeof firstName);
// age =String(age);
// console.log("type of age is :"+ typeof age);
// firstName= Number(firstName);
// console.log("type of firstName is :"+ typeof firstName);



// let age = 18;
// let firstName = "Bhanu";
// age = String(age);
// firstName = Number(firstName);
// console.log("Type of age is " + typeof age);
// console.log("type of first name is " + typeof firstName);

// var a ="subham";
// console.log(a);


// let subject = "  math ";
// console.log(subject);
// subject = subject.trim();
// console.log(subject);
// let subject =(uppercase);
// uppercase = subject.toUpperCase();
// console.log(uppercase);

// Write a JavaScript program to test the first character of a string is uppercase or not using regular expression.

// let firstName = "Subham";
// // if(firstName[0]=="S"){
//     console.log("the character is capital");
// }else{
//     console.log("the character is small");
// }


// let age =30;
// let firstName="subham";
// // my name is subham and my age is 30;
// let aboutMe=("my name is " + firstName + "and my age is "+ 30);//concatination
// console.log(aboutMe);

// let age =30;
// let firstName="subham";
// // using operator
// let aboutMe=`my name is ${firstName} and my age is ${age}`
// console.log(aboutMe);

// undefiend
// let firstName;
// console.log(typeof firstName);//undefined

// firstName ="subham";
// console.log(typeof firstName);//string
 
// var firstName= null;
// console.log(typeof firstName);//object comes whe tje value is null

// BigInt
// console.log(Number.MAX_SAFE_INTEGER);
//  let phoneNumber = BigInt(64376477476464);
//  let adress = 53535n;
//  console.log(phoneNumber + adress);


// let num1 = 7;
// let num2 = 8;
// console.log(num1==num2);//==check only the value

// let num1 ="7";
// let num2 = 7;
// console.log(num1===num2);//===check the data type and value both

// if else
// let age =prompt("enter your age");
// if (age>=18)
// {
//     console.log("you r eligable for vote");

// }else{
//     console.log("you are not eligable for vote");
// }


// let firstName="";//false,"",null,undefined,0 there is no value
// if(firstName){
//     console.log(firstName)
// }else{
//     console.log("empty");
// }

// let photoSize =1;
// if(photoSize>=3){
//     console.log( "photoSize can not be uploaded ");
// }else{
//     console.log("photoSize uploaded");
// }


//ternary operator
// let age=5;
// let drink =age>5 ? "coffie" :"milk";
// console.log("you should drink ",drink);


// let firstName= "subham";
// let age=14;
// if (firstName[0]==="s"|| age>18){
//     console.log("one line is true");
// }else{
//     console.log("both r true");
// }


// let firstName= "subham";
// let age=19;
// if (firstName[0]==="s" & age>18){
//     console.log("both condition   is true");
// }else{
//     console.log("both condition is false");
// }

// let temperature= 102;
// let yourTemperature=90;
// if (yourTemperature>=102){
//     console.log("need covid test");
// }else if(yourTemperature>98){
//     console.log("no need of covid test");
// }else{
//     console.log("normal temp");
// }

// let marks= 20;
// if(marks>=60  )
// {
//     console.log("first division");
// } else if(marks>=50 && marks<59)
// {
//     console.log("second division");
// }else if(marks>=30 && marks<49)
// {
//     console.log("third division");
// }else {
//     console.log("fail");
// }
    

// let marks = 30;
// if(marks>=60)
//     {
//     console.log("first division");
//     } 
//     else if(marks>=50 && marks<=59)
//     {
//          console.log("second division");
//     }
//     else if(marks>=31 && marks<=49)
//     {
//         console.log("third division");
//     }
//     else 
//     {
//     console.log("Fail");
//     }


//switch
// let day=0;
// switch(day){
//         case 0:
//         console.log("sunday");
//         break;
//         case 1:
//         console.log("monday");
//         break;
//         case 2:
//         console.log("tuesday");
//         break;
//         case 3:
//         console.log("wednesday");
//         break;
//         case 4:
//         console.log("thrusday");
//         break;
//         case 5:
//         console.log("friday");
//         break;
//         case 6:
//         console.log("saturday");
//         break;
//         default:
//             console.log("invalidday");
// }




// // while loop
// //  let i=0;
// //  while(i<=7){
// //     console.log(i);
// //     i++
// //  }

// let i=0;
// let sum=0;
// while(i<=10){
//     sum=sum +i;
//     i++;
// }
// console.log(sum);
    

// let total=0;
// for(i=0;i<=9;i++){
//     total=total+i;
// }
// console.log(total);

// break

// for (i=1;i<=10;i++)
// {
//     if(i===4)
//     {
//         break;
//     }
//  console.log(i);
// }
// console.log("out of loop");


// for (i=1;i<=10;i++)
// {
//     if(i===4)
//     {
//         continue;
//     }
//  console.log(i);
// }
// console.log("out of loop");

// let i=8;
// do{
//     console.log(i);
//     i++;
// }while(i<=10){
//     console.log("out of loop");
// }


// let fruits=["banana","mango","apple"];
// console.log(fruits);
// fruits.push("mango");//push function is used for adding item in last
// console.log(fruits);


// let fruits=["banana","mango","apple"];
// console.log(fruits);
// let poppedFruits= fruits.pop();//pop function is used for adding item in last
// console.log("poppedfruits is",poppedFruits);
// console.log(fruits);

//unshift
// let fruits=["banana","mango","apple"];
// console.log(fruits);
// fruits.unshift("grapes");//unshift add the item in the begning of array
// console.log(fruits);


// let fruits=["banana","mango","apple"];
// console.log(fruits);
// let removeFruits= fruits.shift();//shift function is used for adding item in last
// console.log("remove fruits is",removeFruits);
// console.log(fruits);

// premitive and reference
// let array1 = ["item1", "item2", "item3"];
// let array2 = array1;
// console.log("array 1 is ", array1);
// console.log("array 2 is " , array2);
// array1.push("item4");
// console.log("array 1 is ", array1);
// console.log("array 2 is " , array2);


// let fruits = ["apple", "orange", "banana" ];
// console.log(fruits);
// fruits[1] = "mango";
// console.log(fruits);
// fruits[-1] = "orange"; 
// console.log(fruits);

// console.log(typeof fruits[0]);
// console.log(Array.isArray(fruits));
// let fruits = ["apple", "orange", "banana" ]
// console.log(fruits);
// fruits[1] = "mango";
// console.log(fruits);
// fruits[-1] = "orange"; 
// console.log(fruits);

// console.log(typeof fruits[0]);
// console.log(Array.isArray(fruits)); // it shows if the array is an array or not.


//how to clonr array
// how to concatination 
// let array1 =["item1","item2"];
// let array2 =array1.slice(0);


// let array1 =["item1","item2"];
// let array2 =[].concat(array1);
// array1.push("item 4");



// let array1 =["item1","item2"];
// let array2 =[...array1 ,"item3","item4"];//spread operator adding items

// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

// let array1 =["item1","item2"];
// let oneMoreArray =["item4","item5"];
// let array2=[...array1,...oneMoreArray];
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);
  

// let fruits=["mango","banana","apple"];
// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i].toUpperCase());
// }

// Okay
// Right
// Like
// Yeah
// Yes
// Ahah
// Hmm
// No repetation of words. 
// No one worded answers.

//for of loop in array
// const fruits=["apple","banana","grapes"];
// const fruits1=[]; 
// for(let fruit of fruits)
// {
//     // console.log(fruits);//doubt
//     fruits1.push(fruit.toUpperCase());
// }
// console.log(fruits1);

// for in loop in array
// const fruits=["apple","banana","grapes"];
// const fruits1=[];
// for(let index in fruits)
// {
//     fruits1.push(fruits[index].toUpperCase());
    
// }
// console.log(fruits1);

 //array destructuring
//  const myArray =["value1","value2","value3","value4"];
//  let var1=myArray[0];
//  let var2=myArray[1];
//  console.log("value of myvar1",var1);
//  console.log("value of myvar1",var2);
//  let [var1,var2]=myArray;//let[var1, ,var2]if we give the space using , then it choose the next index value 
//  let newMyArray=myArray.slice(2);
//  console.log("value of myvar1",var1);
//  console.log("value of myvar2",var2);
//  console.log(newMyArray);

//  const myArray =["value1","value2","value3","value4"];
//  let [var1,var2,...newMyArray]=myArray;
//  console.log("value of myvar1",var1);
//  console.log("value of myvar2",var2);
//  console.log(newMyArray);


// object reference type
// const person=
// {name:"subham",
// age:"24",
// "person hobbies":["dance","play","read"]
// };//this line name and age is called as property
// console.log(person); 
// console.log(person.name);//this is called (.)notation
// console.log(person.age);
// person.gender="male";
// console.log(person);
// console.log(person["age"]);//this is known as bracket ([])notation
// console.log(person["person hobbies"]);//if there is a space between ex-person hobbies then use []notation

// const eMail="email";
// const person=
// {name:"subham",
// age:"24",
// "person hobbies":["dance","play","read"]
// }
// person[eMail]="subham@gmail.com";//here using key without any bracket variable email is print
// console.log(person);

//  how to iterate object using for in loop//there are 3 mathod below
// const person=
// {name:"subham",
// age:"24",
// "person hobbies":["dance","play","read"]
// }
// for(key in person)
// {
    // console.log(person[key]);
    // console.log(`${key} : ${person[key]}`);
    // console.log(key," :",person[key]);
// }

//how to iterate a object using object.keys
// const person=
// {name:"subham",
// age:"24",
// "person hobbies":["dance","play","read"]
// }
// console.log(Object.person(key));


// const fruits=["apple","orange"];
// let fruit1=fruits[0];
// let fruit2=fruits[1];
// console.log("value of fruits" ,fruit1);
// console.log("value of fruits" ,fruit2);

// const fruits=["apple","orange"];
// let [fruit1,fruit2]=fruits;//using let we can change the value
// console.log("value of fruits" ,fruit1);
// console.log("value of fruits" ,fruit2);

// const fruits=["apple","orange"];
// const [fruit1,fruit2]=fruits;//const can not change the value
// fruit1="apple"
// console.log("value of fruits" ,fruit1);
// console.log("value of fruits" ,fruit2);


// const fruits=["apple","orange","mango"];
// const [fruit1,fruit2]=fruits;
// let newFruits=fruits.slice(2);
// console.log("value of fruits" ,fruit1);
// console.log("value of fruits" ,fruit2);
// console.log("slice the fruit",newFruits);


// const fruits=["apple","orange","mango","banana","grapes"];
// const [fruit1,fruit2,...newFruits]=fruits;
// console.log("value of fruits" ,fruit1);
// console.log("value of fruits" ,fruit2);
// console.log("new fruits are",newFruits);

//object are reference types
//arrays are good but not sufficient for real world
//object stores key value pairs
//object dont have index


//computed properties
// const key1="objkey1";
// const key2="objkey2";

// const value1="myvalue1";
// const value2="myvalue2";

// const obj={
//     Objkey1 :"myvalue1",
//     Objkey2 :"myvalue2",
// }

// const obj={}
//     obj[key1] =value1;
//     obj[key2] = value2;

// console.log(obj);

// const obj={
//     [key1] :value1,
//     [key2] : value2,
// }
// console.log(obj);


//how spread operator works on array
// const array1=[1,2,3];
// const array2=[5,6,7];
 
// const newArray =[...array1,...array2];
// console.log(newArray);

// how spread operator works on object
// const obj1={
//     key1:"value1",
//     key2:"value2",
// };

// const obj2={
//     // key1:"hfhfh",//we can not use key value repeat again 
//     key3:"value3",
//     key4:"value4",
// };
// const newObject={...obj1,...obj2};
// console.log("the newobject is", newObject)


// let a=5;
// let b=4;

// console.log("a+b=",a+b)
// console.log("a-b=",a-b)
// console.log("a*b=",a*b)
// console.log("a/b=",a/b)
// console.log("a*b=",a*b)
// console.log("a%b=",a%b)

// console.log("a++=",a++)
// console.log("++a=",++a)
// console.log("--a=",--a)
// console.log("a--=",a--)
// console.log("a=",a)
// //assignment operator
// let c=6
// c**=5
// console.log("c=",c)
// //comparision operator
// let d=8
// let e="8"
// console.log("d===e",d!==e)
// //logical operator
// let f=8
// let g=9
// console.log(f>g && g>f)
// console.log(f>g || g>f)
// console.log(!true)


// let firstName="   subham   ";
// console.log(firstName.trim());



let age=24;
age=age+"";
console.log( age); 
git init
$ git add README.md
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin https://github.com/<UserName>/<RepoName>.git
$ git push -u origin main