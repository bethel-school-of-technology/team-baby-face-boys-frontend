import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState } from 'react';
import axios from 'axios';


const Profilepage = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [user, setUserProfile] = useState({});

    const onTitleChange = e => setTitle(e.target.value);
    const onBodyChange = e => setBody(e.target.value);

    let userId = JSON.parse(localStorage.getItem("userId"))


    // axios.get("http://localhost:3000/User" + user.gamerID ).then(userProfile => {
    //     console.log(userProfile)
    //     setUserProfile(userProfile);
    // })





    useEffect(() => {

        console.log(userId)

        function fetch() {
            axios.get("http://localhost:3000/User/" + userId).then(response => {
                console.log(response)

                setUserProfile(response.data)
            })
        }

        fetch();

    }, [])


    const handleSubmit = e => {
        e.preventDefault();

        const data = { title, body };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        fetch("https://localhost:3000/User", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
    };
    return (
        <div>
            <Navbar />
            <div>
                <h1>Welcome,  {user.gamerID}</h1>
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
                        <input value={title}
                            onChange={onTitleChange} required /><br></br>
                        <textarea value={body}
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
