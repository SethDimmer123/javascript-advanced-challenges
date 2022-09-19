// Question 1. Show rating

// Given a rating, display a star(*) for each full rating and a full stop(.) for each half rating.

// showRating(3) -->"* * *"

// showRating(4.5) -->"* * * * ."

// showRating(0.5) -->"." 



// function showRating(rating){
// intialise an empty string

// loop through the rounded down rating

// add a star for every interation

// if its not the last iteration add a space

// if the number is not an integer

// add a full stop

// return it

// solve with google 11:29
// }

// console.log(showRating(3.5));









// ANSWER DOWN BELOW


// function showRating(rating){
//     let ratings = "";
//     for (let i = 0; i < Math.floor(rating); ++i){
//         ratings += "*"
//         if(i !== Math.floor(rating) - 1) {
//             ratings += " ";
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
//     return numbers.sort((a,b) =>  a - b);
// }

// console.log(sortLowToHigh([1, 5, 0, 10, 4]))

// google how to sort an array of numbers in javascript(12:46)























// Question 3. Sort by highest to lowest price

// Given an array of objects, return the prices sorted by high to low.

/*sortLowToHigh([
   {id:1,price:50},
   {id:2,price:30},
   {id:3,price:60},
   {id:4,price:10},
])*/
/*--> [{id:1,price:50},
/*--> {id:2,price:30},
/*--> {id:3,price:60},
/*--> {id:4,price:10},}]*/




// Answer down below

// function sortHighToLow(numbers) {
    // return numbers.sort((a, b) => {
        // console.log(b.price, a.price)
        // return b.price - a.price
// });
// }

// console.log(
    // sortHighToLow([
    // { id: 1, price: 50 },
    // { id: 2, price: 0 },
    // { id: 3, price: -500 },
//   ])
// );






























// Question 5. Find all the posts by a single user.

// call this API "https://jsonplaceholder.typicode.com/posts" 
// and return all the posts by any given user Id.



function postsByUser(userId) {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => console.log(res))
    console.log(userId)
}


postsByUser(4);

















// Question 6. First 6 Incomplete Todos

// Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo's from the result.


