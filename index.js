

async function load() {
    let response = await fetch("https://q5ohowijy5.execute-api.us-west-1.amazonaws.com/default/posts");
    let content = await response.json();

    const posts = document.querySelector(".posts-container");

    content.sort((b, a) => {
        const dateComparison = b.date.localeCompare(a.date);
        if (dateComparison !== 0) {
        return dateComparison;
        } else {
        return b.time.localeCompare(a.time);
        }
    });

    for (const post of content) {
        const newPost = createPost(post.date, post.time, post.content)
        posts.insertBefore(newPost, posts.firstChild);
    }

    const pinned = createPinnedPost()
    posts.insertBefore(pinned, posts.firstChild)
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
  
    return postDiv;
}

function createPinnedPost() {
    // create the post container div element
    const postDiv = document.createElement("div");
    postDiv.classList.add("post", "pinned");
  
    // create the post header div element
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("post-header");
  
    // create the date paragraph element and set its text content
    const dateP = document.createElement("p");
    dateP.classList.add("date");
    dateP.textContent = "4/26/2023";
  
    // create the span element for the push_pin symbol
    const pinSpan = document.createElement("span");
    pinSpan.classList.add("material-symbols-outlined");
    pinSpan.textContent = "push_pin";
  
    // create the time paragraph element and set its text content
    const timeP = document.createElement("p");
    timeP.classList.add("time");
    timeP.textContent = "16:52:36";
  
    // append the date, push_pin symbol, and time elements to the header div
    headerDiv.appendChild(dateP);
    headerDiv.appendChild(pinSpan);
    headerDiv.appendChild(timeP);
  
    // create the text paragraph element and set its text content
    const textP = document.createElement("p");
    textP.classList.add("text");
    textP.textContent = "Sometimes you just have to build something stupid for the sake of learning.";
  
    // create the Instagram link paragraph element and set its text content and href attribute
    const igP = document.createElement("p");
    igP.style.marginTop = "12px";
    igP.innerHTML = "ig: <a href='https://www.instagram.com/jsnznrs/'>@jsnznrs</a>";
  
    // create the GitHub link paragraph element and set its text content and href attribute
    const ghP = document.createElement("p");
    ghP.innerHTML = "gh: <a href='https://github.com/jasonzenarosa'>jasonzenarosa</a>";
  
    // append the header, text, Instagram link, and GitHub link elements to the post container div
    postDiv.appendChild(headerDiv);
    postDiv.appendChild(textP);
    postDiv.appendChild(igP);
    postDiv.appendChild(ghP);
  
    return postDiv;
}

load()