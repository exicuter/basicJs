// stings numbers,boolean,null,undefined
const name = 'madhu';
const age = 21;
const rating =4.5;
const isColl=false;
const x = null;
const y = undefined;
let z;
console.log(typeof isColl)

// concatination
console.log('My name is '+ name +' and i am '+age );
// template string
console.log(`My name is ${name} and i am ${age}`);
const hello= `My name is ${name} and i am ${age}`;
console.log(hello);
const s='hello world!'
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.length);
console.log(s.substring(0,5).toUpperCase())
console.log(s.split(''));
console.log(s.split(','));
// arrays
const fruits = ['apples','oranges','pears','10','true'];
console.log(fruits);
console.log(fruits[1]);
fruits[4]='pppp';
console.log(fruits);
fruits.push('mangoes');
fruits.unshift('straberries');
fruits.pop();
//console.log(Array.isAraay('hello'));
console.log(fruits.indexOf('oranges'));
console.log(fruits)

const numbers = new Array(1,2,3,4,5);
console.log(numbers);
//object
const person = {
    firstName:'kommu',
    lastname:'madhavi',
    age:'21',
    hobbies:['music','movies','sports'],
    address:{
        street:'sc colony',
        City:'kurnool',
        state:'AP'
    }
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.address.City);
console.log(person.hobbies[1])
//disructives
const {firstName,lastName,address:{City}} = person;
console.log(firstName);
console.log(City);
// adding of person detailts
person.email = 'kommumadhavi2662@gmail.com';
console.log(person)
//unknown method
const todos = [
    {
        id:1,
        text:'Take out Trash',
        isCompleted: true
    },
    {
        id:2,
        text:'Metting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted:false
    }
    
];
console.log(todos[1].text)
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)
// for
for(let i=0; i<=10; i++){
    console.log(`For Lopp Number: ${i}`);
}
// while
let i = 0;
while(i<10){
    console.log(`while Lopp Number: ${i}`);
    i++;
}
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}
for(let todo of todos){
    console.log(todo.id);
}
// forEach, map,filter
todos.forEach(function(todo){
    console.log(todo.text);
});
const todoTEXT = todos.map(function(todo){
    return todo.text;

});
console.log(todoTEXT);
// if else
const l = 20;
if( l === 10){
    console.log('l is 10');
}else{
    console.log('l is NOT in 10')
}
// if incase another condition ypu have to add
const m = 20;
if( m === 10){
    console.log('m is 10');
}else if(m > 10){
    console.log('m is greater than  10');
}else{
    console.log('m is not greater than 10');
}
// multiple functions
 const n = 4;
 const c = 10;
if(n > 5 && c > 10){
    console.log('n is more than 5 or c is more than 10');
}
//terinary operator ? means then
//const a = '10';
//const color = a>10 ? 'red':'blue';
//console.log(color)
const color ='grren';
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}
//functions
const addNums = (num1,num2)=>{
    return (num1 + num2);
}
 console.log(addNums(5,5));
 // anothe way
 const addNUMS = num1 => num1+5;
 console.log(addNUMS(5))
 // constructor function
 function Person(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob= new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    Person.prototype.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    Person.prototype.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
 }
 // Instantiate object
 const Person1 = new Person('kommu','madhavi','5-7-2002');
 const Person2 = new Person ('kommu','hymavathi','5-7-2002');
 //console.log(Person2.dob.getFullYear())
 //console.log(Person1.getBirthYear())
 console.log(Person1.getFullName());
 console.log(Person2.getFullName());
 console.log(Person1);
//single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));
// multiple
console.log(document.querySelectorAll('item'))
console.log(document.getElementsByClassName('item'))
console.log(document.getElementsByTagName('l1'));
const ul = document.querySelector('item');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//
ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
const btn = document.querySelector('btn');
btn.getElementsByClassName.backgroud = 'red';
