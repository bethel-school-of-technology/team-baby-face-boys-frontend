import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState } from 'react';
import axios from 'axios';


const Profilepage = () => {
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    const [user, setUserProfile] = useState({});
    const [post, setPost] = useState("");

    let token = JSON.parse(localStorage.getItem("token"))


    useEffect(() => {


        function fetch() {
            console.log(token)

            axios.get("http://localhost:3000/profile/" + token).then(response => {
                console.log(response)

                setUserProfile(response.data)
            })

            axios.get("http://localhost:3000/profile/:jwt").then((response) => {
                setPost.JSON.stringify(response.data);
              });
        }

        fetch();

    }, [])


    const handleSubmit = e => {
        e.preventDefault();
        const Post = { postTitle, postBody };

        console.log(Post)

        fetch ( "http://localhost:3000/profile/" + token, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(Post)
        }).then(() => {
            console.log('new post added')
        })


        // axios.post("http://localhost:3000/forum", {
        //     postTitle: setPostTitle,
        //     postBody: setPostBody,
        // }).then(() => {
        //     setPost([...post, {
        //         postTitle: postTitle,
        //         postBody: postBody,
        //     },
        //     ]);
        // });

        // axios.put("http://localhost:3000/profile/:id", {
        //     postTitle: newTitle,
        //     id: id,
        // }).then(() => {
        //     setPost(
        //         postList.map((val) => {
        //             return val.id == id
        //                 ? { id: val.id, postTitle: newTitle, postBody: val.postBody }
        //                 : val;
        //         })
        //     );
        // });
        // axios.put("http://localhost:3000/:id", {
        //     postTitle: newBody,
        //     id: id,
        // }).then(() => {
        //     setPost(
        //         postList.map((val) => {
        //             return val.id == id
        //                 ? { id: val.id, postTitle: newBody, postBody: val.postBody }
        //                 : val;
        //         })
        //     );
        // });
        // axios.delete(`http://localhost:3000/profile/${id}`).then((response) => {
        //     setPost(
        //         postList.filter((val) => {
        //             return val.id != id;
        //         })
        //     );
        // });
    };



    return (
        <div>
            <Navbar />
            <div>
                <h1>Welcome {user.gamerID}</h1>
            </div>
            <div>
                <h3>Profile Photo Placeholder </h3>
            </div>
            <div>
                <h3>High Scores Placeholder</h3>
            </div>
            <div>
                <p>{user.postTitle} </p><br></br>
                <p>{user.postBody}</p>
            </div>
            <div>
                <div className="Post">
                    <form>
                        <label>Post Title: </label>
                        <input type="text" value={postTitle}  onChange={(e)=> setPostTitle (e.target.value)} /><br></br>
                        <label>Post Body:</label>
                        <textarea value={postBody}  onChange={(e)=> setPostBody (e.target.value)} /><br></br>
                        <button onClick={handleSubmit}>
                            Create Post
                        </button>
                        <button>Edit Post</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profilepage;
