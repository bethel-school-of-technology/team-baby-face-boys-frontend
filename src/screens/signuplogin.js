import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/header';
import Footer from '../components/footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/navbar';

const Signuplogin = () => {

    let baseUrl = "http://localhost:3000/User"

    let navigate = useNavigate();

    const [user, setUser] = useState({
        gamerID: "",
        password: ""
    })


    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    // } = useForm();

    // const onSubmit = (data) => {
    //     const userData = JSON.parse(localStorage.getItem(data.gamerID));
    //     if (userData) { // getItem can return actual value or null
    //         if (userData.password === data.password) {
    //             console.log(userData.password + " You Are Successfully Logged In");
    //         } else {
    //             console.log("GamerID or Password is not matching with our record");
    //         }
    //     } else {
    //         console.log("GamerID or Password is not matching with our record");
    //     }
    // };



    const handleChange = (event) => {

        setUser((preValue) => {
            return {
                ...preValue,
                [event.target.name]: event.target.value
            }
        })



    }


    const handleSubmit = (e) => {
        e.preventDefault();


        // axios.post("http://localhost:3000/User", user).then(response => {
        //     console.log(response);
        //     // TODO store response in localstorage
        //     navigate("/profile")
        // })

        axios.get("http://localhost:3000/User", user.gamerID ).then(response => {
            console.log(response);
            navigate("/profile")
        })

    }



    return (
        <div>
            <Navbar />
            <h4 className="title">Login Form</h4>

            <form className="Login" onSubmit={handleSubmit}>
                {/* <input type="gamerID" {...register("gamerID", { required: true })} /> */}
                <input onChange={handleChange} name="gamerID" /><br></br>
                {/* {errors.email && <span >*Email* is mandatory </span>}<br></br> */}
                {/* <input type="password" {...register("password")} /><br></br> */}

                <input onChange={handleChange} name="password" /><br></br>

                {/* <Link to='/profile'><input type={"submit"} /></Link> */}
                <button type="submit">Login</button>
            </form>
            <div>
                <Link to="/registration"><button>Sign Up</button></Link>
            </div>
            <Footer />
        </div>
    )
}

export default Signuplogin;