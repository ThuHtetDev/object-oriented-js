// alert(1);
console.log("added from one");

// var, let, const

// var is global variable
// let can be re-assign// in a function
/////////////////////////////////
// ! data types
// string, numbers, boolean, null, underfined, symbol
/////////////////////////////////
// ! Concatenation
console.log('my age is ' + 22);
console.log(`My score is ${123}`)

//////////////////////////////
// ! JS Build-in function (paranthesis)
const name = 'thuhtettun';
console.log(name.toUpperCase())
console.log(name.length)
///////////////////////////////

// ! Array 
const arr = ['apple','bannan','orange'];
arr.push('mango');
arr.unshift('purple')
console.log(`${arr.indexOf('orange')} is a index of arr orange`)
console.log(arr);
/////////////////////////////////
// ! Object
const person = {
    name : 'thuhtettun',
    email : 'thuhtettun.dev@gamil.com',
    skills : [
        'php',
        'javascript',
        'database'
    ],
    marks : 100,
    attended: {
        state: 'TTC',
        uni: [
            'DSTA',
            'UOG'
        ]
    }
};
person.skills.forEach(function(item){
    console.log(item);
})
console.log(person);
///////////////////////////////////////
// ! Array of Object
const models = [
    {
        id: 1,
        name: 'myanmar'
    },
    {
        id: 2,
        name: 'thai'
    },
    {
        id: 1,
        name: 'vitenam'
    },

];
console.log(models);
///////////////////////////////////////////

// ! JSON
const JsonModel  = JSON.stringify(models);
console.log(JsonModel);

//////////////////////////////////////////

// ! Simple Programming Functional
// For 
for(let t of models){
    console.log(t.name)
}
// Foreach
models.forEach(function(t){
    console.log(t.name)
})
// map (return array)
const textArr = models.map(function(t){
    return t.name
})
console.log(textArr)
// filter
const checkId = models.filter(function(t){
                    //return conditional data
                    return t.id === 2;
                })

const checkIdOnlyText = models.filter(function(t){
                    //return conditional data
                    return t.id === 2;
                }).map(function(text){
                    return text.name
                })
console.log(checkIdOnlyText)
////////////////////////////////////
// ! conditional
// IF else
// == and ===
// operators || && 

// shorthand if statement
const x = 10;
console.log(x > 5 ? "greater than 5" : "less than 5")

// switch
let expression;
switch(expression){
    case 1:
        console.log();
        break;
    case 2:
        console.log();
        break;
}
///////////////////////////////////////////
// ! Functions
// simple function
// arrow function 
let c;
const a = (c = 1) => {
    return c
}
const f = (name = 'no') => {
    console.log(`My name is ${name}`);
    return name
}
console.log(f('thuhtettun'));

function func(){
    return 'works in return'
}
console.log(func());
console.log('...........................................');
///////////////////////////////////////////

const Person = function(firstName,SecName){
    this.firstName = firstName;
    this.SecName = SecName;

    this.fullName = function(){
        return `${firstName} ${SecName}`
    }
}
// instance obj

const p2 = new Person('pwint','phyu');


function one(){
    const c = 'haha';
    const p1 = new Person('thu','htet');
    console.log(p1.fullName());
}

function two(){
    one();
}
two();
/////////////////////////////////////////////

// ! Class
class People {
    constructor(firstName,SecName){
        this.firstName = firstName;
        this.SecName = SecName;
    }

    fullName(){
        return `${firstName} ${SecName}`
    }
}

////////////////////////////////////////////

// ! DOM
// single element seletor
// . document.getElementById()
// . document.querySelector()

// multiple element selector
// . document.querySelectorAll()
// . document.getElementByClassName()

// .innerText = '';
// .innerHTML = '';
// .remove();
// .classList.add()
// .classList.remove()

////////////////////////////////////////////

// ! Event 
// const btn = document.getElementById('clsbtn');
// btn.addEventListener('click',function(){
        // do something
//});