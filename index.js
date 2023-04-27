
async function load() {
    let response = await fetch("https://q5ohowijy5.execute-api.us-west-1.amazonaws.com/default/posts");
    let content = await response.json();

    const posts = document.querySelector(".posts-container");
    const pinned = document.querySelector(".pinned")

    for (const post of content) {
        const newPost = createPost(post.date, post.time, post.content)
        pinned.after(newPost)
    }
}

function createPost(date, time, text) {
    // create the post container div element
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
  
    // create the post header div element
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("post-header");
  
    // create the date paragraph element and set its text content
    const dateP = document.createElement("p");
    dateP.classList.add("date");
    dateP.textContent = date;
  
    // create the time paragraph element and set its text content
    const timeP = document.createElement("p");
    timeP.classList.add("time");
    timeP.textContent = time;
  
    // append the date and time elements to the header div
    headerDiv.appendChild(dateP);
    headerDiv.appendChild(timeP);
  
    // create the text paragraph element and set its text content
    const textP = document.createElement("p");
    textP.classList.add("text");
    textP.textContent = text;
  
    // append the header and text elements to the post container div
    postDiv.appendChild(headerDiv);
    postDiv.appendChild(textP);
  
    // append the post container div to the body of the HTML document
    return postDiv;
}

load()