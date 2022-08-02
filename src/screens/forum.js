import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState } from 'react';

function Blogboard() {
    const [blog, setBlog] = useState("");
}

const displayBlog = () => {
    console.log(blog);
};

const Forum = () => {
    return (
        <div class="container">
             <Navbar />
            <h1>Rabbit Water Cooler</h1>
            <h4>Create Post:</h4>
            <input type="text" onchange={(event) => {setBlog(event.target.value);
            }}/>
            <button onClick={displayBlog}>Submit Post</button>
            <h4>Forum Posts:</h4>
            <h4>Rabbit Users:</h4>
           <Footer />
        </div>

    );
};

export default Forum;