// let message = 'hello'

// let numOfDonuts = 12;
// let pi = 3.14;

// let veryLargeNum = 54321n;

// let loveCoding = true;

// let favoriteColor;
// console.log(favoriteColor);

// message = null;

// const uniqueKey = Symbol();

//------------objects-------------

// let course = {
//     name: 'js tutorial',
//     hours: 3
// };

// // console.log(course.name);

// // course.name = 'michael'

// // console.log(course['name']);

// let property = 'hours'

// console.log((course[property]));

//-----------arrays-------------

// let productColors = ['blue', 'red']

// console.log(productColors[0]);

//---------Functions------------

// function sayHi(name) {
//     console.log('Hi ' + name);
// }

// sayHi('Michael')

// function multiply(num1, num2) {
//     return num1 * num2;
// }

// console.log(multiply(2, 3));

//-----------Loops-------------

let course = {
    name: 'michael',
    age: 25
}

for(let key in course){
    console.log(course[key]); 
}

let nums = [1, 2, 3, 4];
for(let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}

for(let elements of nums){
    console.log(elements);
}
