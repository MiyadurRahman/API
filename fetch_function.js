// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

//fetch --> data return kore na ,tells to wait

//  so we use then

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json()) // returns the Promise containing the parsed JSON data
    .then((data) => console.log(data)); // logs the actual object



//fetch and send and console each data

function loadout(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json()) // returns the Promise containing the parsed JSON data
        .then((data) => console.log(data));
}
const btn = document.getElementById("btn");
btn.addEventListener("click", loadout);

const loadpost=()=>{
    const url='https://jsonplaceholder.typicode.com/posts'
 fetch(url)
 .then((response) => response.json()) // returns the Promise containing the parsed JSON data
        .then((data) => displayPost(data));


};


const displayPost=(posts)=>{

    // console.log(posts);

    posts.forEach(posts=> {
      console.log(posts)  ;
    });
}