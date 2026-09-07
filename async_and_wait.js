// fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then((response) => response.json()) // returns the Promise containing the parsed JSON data
//         .then((data) => console.log(data));
        
//     console.log("hi");
//     console.log(true);

    //if i want to print fetch data before than i will
    //use async and await

    printfirst=async()=>
    {
const url= 'https://jsonplaceholder.typicode.com/todos/1'
await fetch(url)
        .then((response) => response.json()) // returns the Promise containing the parsed JSON data
        .then((data) => console.log(data));
        
    console.log("hi");
    console.log(true);
        
    }

    printfirst();