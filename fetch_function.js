// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

//fetch --> data return kore na ,tells to wait

//  so we use then

/*fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json()) // returns the Promise containing the parsed JSON data
    .then((data) => console.log(data)); // logs the actual object

*/

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

//display in console in inspect
/*const displayPost=(posts)=>{

    // console.log(posts);

    // posts.forEach(posts=> {
    //   console.log(posts)  ;
    // });
//similar


    for(let post of posts){
        console.log(post);
    }
}*/

const displayPost=(posts)=>{
//    1.get the container
    const postcontainer=document.getElementById("post-container");
        postcontainer.innerText="";// workable
 

    for(let post of posts){
        //  console.log(post.title);
        // console.log(post.body);

        //2.create html element
        const li=document.createElement("li");
        li.innerText=post.title;//puts the title in ul
        console.log(li);
        // 3. add li into container 
        postcontainer.appendChild(li);

    
    }

    
}