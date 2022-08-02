import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState } from 'react';


const Profilepage = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const onTitleChange = e => setTitle(e.target.value);
    const onBodyChange = e => setBody(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();

        const data = { title, body };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
    };
    return (
        <div>
            <Navbar />
            <div>
                <h1>Welcome, User!</h1>
            </div>
            <div>
                <h3>Profile Photo Placeholder</h3>
            </div>
            <div>
                <h3>High Scores Placeholder</h3>
            </div>
            <div>
                <h3>Joke of the Day Placeholder</h3>
            </div>
            <div>
                <div className="Post">
                    <form>
                        {/* <input placeholder="Title" value={title}
                            onChange={onTitleChange} required /><br></br> */}
                        <textarea placeholder="Tell us of your exploits" value={body}
                            onChange={onBodyChange} required /><br></br>
                        <button type="submit" onClick={handleSubmit}>
                            Create Post
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profilepage;
