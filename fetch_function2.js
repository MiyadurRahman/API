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


// {
// "userId": 1,
// "id": 1,
// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
// }

const displayPost = (posts) => {
    const postcontainer = document.getElementById("post-container");
    if (!postcontainer) return;

    postcontainer.innerHTML = "";

    for (let post of posts) {
        // 1. Create card container
        const postcard = document.createElement("div");
        postcard.classList.add("post-card"); 
        //another way is i can just use backtick and paste the html code here than i can dynamic it

        // 2. Create userId element
        const userId = document.createElement("small");
        userId.innerText = `User ID: ${post.userId}`;
        userId.classList.add("post-user-id");

        // 3. Create postId element
        const postId = document.createElement("span");
        postId.innerText = `Post #${post.id}`;
        postId.classList.add("post-id");

        // 4. Create title element (Check Line 57 around here!)
        const title = document.createElement("h1");
        title.innerText = post.title; 
        title.classList.add("post-title");

        // 5. Create paragraph element
        const paragraph = document.createElement("p");
        paragraph.innerText = post.body;
        paragraph.classList.add("post-body");

        // Append all elements
        postcard.appendChild(userId);
        postcard.appendChild(postId);
        postcard.appendChild(title);
        postcard.appendChild(paragraph);

        postcontainer.appendChild(postcard);
    }
};