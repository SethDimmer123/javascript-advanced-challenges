// Question 1. Show rating

// Given a rating, display a star(*) for each full rating and a full stop(.) for each half rating.

// showRating(3) -->"* * *"

// showRating(4.5) -->"* * * * ."

// showRating(0.5) -->"." 

/* < less than */




// function showRating(rating) {
//     let ratings = ""
//     for(let i = 0; i < Math.floor(rating); ++i) {
//         ratings += "*"
//         if(i !== Math.floor (rating) - 1) {
//             ratings  +=  " ";
//         }
//     }
//     if(!Number.isInteger(rating)) {
//         ratings += " .";
//     }
//     return ratings;
// }

// console.log(showRating(3.5));






























// Question 2. Sort by lowest to highest price

// Given an array of numbers, return the prices sorted by low to high.


// sortLowToHigh([20,40,10,30,50,10]) -->[10,10,20,30,40,50]

// sortLowToHigh([5,10,0,-5]) --> [-5,0,5,10]

// sortLowToHigh([3,2,1,0]) -->[0,1,2,3]


// Answer down below


// function sortLowToHigh(numbers) {
//     return numbers.sort((a, b) => a - b);
// }

// console.log(sortLowToHigh([1,5,0,10,4])) 



// sorting sorts alphabetically

// if i want to sort by numbers

// do this a, b => a - b

// .sort method

// how to sort an array of numbers














// Question 3. Sort by highest to lowest price

// Given an array of objects, return the prices sorted by high to low.

// sortLowToHigh([
//    {id:1,price:50},
//    {id:2,price:30},
//    {id:3,price:60},
//    {id:4,price:10},
// ])
// --> [{id:1,price:50},
// --> {id:2,price:30},
// --> {id:3,price:60},
// --> {id:4,price:10},}]




// Answer down below


// function sortHighToLow(numbers) {
//     return numbers.sort((a,b) => {
//         return b.price - a.price
//     });
// }

// console.log(sortHighToLow([
//     { id: 1, price: 50 },
//     { id: 2, price: 0 },
//     { id: 3, price: 500 }
// ])
// );

// sorting objects in an array is the exact same thing as question 2

// BUT I NEED TO GET THE PROPERTY OF THAT OBJECT that i am 
// iterating over





























// Question 5. Find all the posts by a single user.

// call this API "https://jsonplaceholder.typicode.com/posts" 
// and return all the posts by any given user Id.

// async function postsByUser(userId) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts")

//     const result = await promise.json()

//     const posts = result.filter(element => element.userId === userId)

//     console.log(posts)
// }

// postsByUser(6)











// async goes next to the function
// await goes inside the function

// that is how you wait for the result


























// Question 6. First 6 Incomplete Todos

// Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo's from the result.


// async function firstSixIncomplete(userId) {
//         const promise = await fetch("https://jsonplaceholder.typicode.com/todos")

//     const result = await promise.json()

//     const incompleteTasks = result.filter(element => !element.completed).slice(0,6);

//     console.log(incompleteTasks);
// }

// firstSixIncomplete(6)