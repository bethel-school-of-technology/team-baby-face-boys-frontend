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

    // const onTitleChange = e => setTitle(e.target.value);
    // const onBodyChange = e => setBody(e.target.value);




    // axios.get("http://localhost:3000/User" + user.gamerID ).then(userProfile => {
    //     console.log(userProfile)
    //     setUserProfile(userProfile);
    // })

    const handleChange = (event) => {

        setPostTitle((preValue) => {
            return {
                ...preValue,
                [event.target.name]: event.target.value
            }
        })

        setPostBody((preValue) => {
            return {
                ...preValue,
                [event.target.name]: event.target.value
            }
        })

    }



    useEffect(() => {


        function fetch() {
            console.log(token)

            axios.get("http://localhost:3000/profile/" + token).then(response => {
                console.log(response)

                setUserProfile(response.data)
            })

            axios.get("http://localhost:3000/profile/:token").then((response) => {
                setPost.JSON.stringify(response.data);
              });
        }

        fetch();

    }, [])


    const handleSubmit = e => {
        e.preventDefault();

        axios.post("http://localhost:3000/forum", {
            postTitle: setPostTitle,
            postBody: setPostBody,
        }).then(() => {
            setPost([...post, {
                postTitle: postTitle,
                postBody: postBody,
            },
            ]);
        });

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
                        <textarea onChange={handleChange} name="setPostTitle" /><br></br>
                        <textarea onChange={handleChange} name="setPostBody"/><br></br>
                        <button type="submit" onClick={handleSubmit}>
                            Create Post
                        </button>
                        <button>Edit Post</button>
                        <button>Delete Post</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profilepage;
