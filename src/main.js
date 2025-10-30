import { Blog } from "./models/blog";
import { Post } from "./models/post";
import "./style.css";

/*--------- NEXT BLOG ID -----------*/ 

// get the latest blog id from local storage
//if null, return 1
const getBlogId = () => {
  const nextId = localStorage.getItem("nextBlogId");

  if (nextId !== null) {
    return parseInt(nextId);
  } else {
    return 1;
  }
};

//set the new blog id (old id + 1)
const setBlogId = (blogId) => {
  localStorage.setItem("nextBlogId", JSON.stringify(blogId));
};


/*---------  BLOGS -----------*/ 

/** 
 * Get the blogs string from localStorage
 * parse it to array
 * push the new blog object
 * make the array string
 * set it to localStorage
 */

const setBlog = (blog) => {
  const oldBlogs = localStorage.getItem("blogs")
  const oldBlogsArray = JSON.parse(oldBlogs)
  oldBlogsArray.push(blog)
  const newBlogsString = JSON.stringify(oldBlogsArray)
  localStorage.setItem("blogs", newBlogsString)
}

/**
 * Get the blogs string from localStorage
 * parse it to array
 */
const getBlogs = () => {
  const oldBlogs = localStorage.getItem("blogs");
  const blogsArray = JSON.parse(oldBlogs);
  return blogsArray;
}

/**
 * create new blog object
 * add values from form
 * clear form inputs
 * call setBlog
 * call setBlogId
 * call setPostDropdown
 */
const handleBlogSubmit = (e) => {
  e.preventDefault();

  const blogName = document.getElementById("blogName");
  const blogAuthor = document.getElementById("blogAuthor");
  const blogId = getBlogId();

  const blog = new Blog(blogId, blogName.value, blogAuthor.value);
  blogName.value = "";
  blogAuthor.value = "";

  setBlog(blog);
  setBlogId(blogId + 1);
  setPostDropdown();

};

/*---------  POSTS -----------*/ 
const setPostDropdown = () => {
  currentBlogs = getBlogs();
  const blogDropdown = document.getElementById("blogDropdown")
  blogDropdown.innerHTML = "";

  currentBlogs.forEach(blog => {
    const option = document.createElement("option")
    option.value = blog.id
    option.innerText = blog.name
    blogDropdown.appendChild(option)
  });
}


const handlePostSubmit = (e) => {
  e.preventDefault();

  const postTitle = document.getElementById("postTitle");
  const postContent = document.getElementById("postContent");
  const blog = document.getElementById("blogDropdown")

  const post = new Post(postTitle.value, postContent.value, blog.value);
  
  postTitle.value = "";
  postContent.value = "";
  
  setPost(post);

  console.log(post)
};

const setPost = (post) => {
  const oldPosts = localStorage.getItem("posts")
  const oldPostsArray = JSON.parse(oldPosts)
  oldPostsArray.push(post)
  const newPostsString = JSON.stringify(oldPostsArray)
  localStorage.setItem("posts", newPostsString)
}


/*---------  BLOG & POSTS FORMS -----------*/ 

const blogForm = document.getElementById("blogForm");
if (blogForm) {
  blogForm.addEventListener("submit", handleBlogSubmit);
}

const postForm = document.getElementById("postForm");
if (postForm) {
  postForm.addEventListener("submit", handlePostSubmit);
}

/*---------  ON START UP -----------*/ 

//see if there is an empty array in localStorage blogs / posts
//if not, add one
let currentBlogs = localStorage.getItem("blogs")
if(currentBlogs === null){
  localStorage.setItem("blogs", "[]")
}

let currentPosts = localStorage.getItem("posts")
if(currentPosts === null) {
  localStorage.setItem("posts", "[]")
}

// set created blogs as options in post form
currentBlogs = getBlogs();
setPostDropdown(currentBlogs);
