// const num1 = 100;
// const num2 = 50;
// let val;

//number to srting

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2,33,1);
// val = Math.max(2,444,5);
// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);

// // const fristName = "Williams"
// // const lastName = "Johnson"

// // let vals;

// // vals = fristName + lastName;
// // vals = fristName + " " + lastName
// // console.log(vals)

// // const firstName = 'William';
// const firstName = 'William';
// // const lastName = 'Johnson';
// const lastName = 'Johnson';
// // const age = 36;
// const age = 36;
// // const str = 'Hello there my name is Brad';
// const str = 'Hello there my name is Brad';
// // const tags = 'web design,web development,programming';



// // let val;
// let val;

// // val = firstName + lastName;
// val = firstName + lastName;

// // // Concatenation
// // val = firstName + ' ' + lastName;
// val = firstName + ' ' + lastName;

// // // Append
// // val = 'Brad ';
// val = 'Brad ';
// // val += 'Traversy';
// val += 'Traversy';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// val =  'That\'s awesome, I can\'t wait';

// // Length
// val = firstName.length;

// // concat()
// val = firstName.concat(' ', lastName);

// // Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// // indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// // charAt()
// val = firstName.charAt('2');
// // Get last char
// val = firstName.charAt(firstName.length - 1);


// // substring()
// val = firstName.substring(0, 4);


// // slice()
// val = firstName.slice(0,4);

// val = firstName.slice(-3);

// // split()
// val = str.split(' ');

// val = tags.split(',');


// // replace()
// val = str.replace('Brad', 'Jack');


// Create some arrays
// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// // MUTATING ARRAYS
// // // Add on to end
// // numbers.push(250);
// // // Add on to front
// // numbers.unshift(120);
// // // Take off from end
// // numbers.pop();
// // // Take off from front
// // numbers.shift();
// // // Splice values
// // numbers.splice(1,3);
// // // Reverse
// // numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);

// // Sorting arrays
// val = fruit.sort();
// // val = numbers.sort();

// // // Use the "compare function"
// // val = numbers.sort(function(x, y){
// //   return x - y;
// // });

// // // Reverse sort
// // val = numbers.sort(function(x, y){
// //   return y - x;
// // });

// // Find
// function over50(num){
//   return num > 50;
// }

// val = numbers.find(over50);

// console.log(numbers);

// let val;

// const today = new Date();
// let birthday = new Date('7-6-1978')

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getTime();

// birthday.setMonth(2)

// console.log(birthday);

// const id = 100;

// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`)
// }else {
//     console.log('No id')
// }

// const color = 'yellow';
// if(color === 'red'){
//     console.log('Color is Red';
// }else if(color === 'blue'){
//     console.log('color is blue')
// }else{
//     console.log('console is not defiened');
// }

// //logical operators

// const name = 'Steve';
// const age = 20;

// if(age > 0 && age <  12){
//     console.log(`${name}is a child`);
// }else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`);
// }else{
//     console.log(`${name} is an adult`)
// }


// //Ternary operator
// console.log(id === 100 ? 'correct' : 'incorrect');

const square = function(x = 3){
    return x*x;
};

const todo = {
    add: function(){
        console.log('Add todo..')
    },
    edit: function(id){
        console.log('Edit todo ${id}')
    }
}