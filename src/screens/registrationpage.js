import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate } from 'react-router';
import axios from 'axios';

const Registrationpage = () => {

    let baseUrl = "http://localhost:3000/User"

    let navigate = useNavigate();

    const [user, setUser] = useState({
        fullName: "",
        gamerID: "",
        DOB: "",
        email: "",
        password: ""
    })
    // const { register, handleSubmit } = useForm();
    // const handleRegistration = (data) => console.log(data);

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


        axios.post("http://localhost:3000/User", user).then(response => {
            console.log(response);
            // TODO store response in localstorage
            navigate("/profile")
        })

        // axios.get("http://localhost:3000/User/" + user.gamerID ).then(response => {
        //     console.log(response);
        //     navigate("/profile")
        // })
    }
    

    return (
        <div>
            <Header />
            <div>
                <div id="container">
                    <h4>Photo Placeholder</h4>
                </div>
                <div>
                <form className="Create Account" onSubmit={handleSubmit}>
                {/* <input type="gamerID" {...register("gamerID", { required: true })} /> */}
                <label>Full Name: </label>
                <input onChange={handleChange} name="fullName" /><br></br>
                <label>Gamer ID: </label>
                <input onChange={handleChange} name="gamerID" /><br></br>
                <label>Date of Birth: </label>
                <input onChange={handleChange} name="DOB" /><br></br>
                <label>Email: </label>
                <input onChange={handleChange} name="email" /><br></br>
                {/* {errors.email && <span >*Email* is mandatory </span>}<br></br> */}
                {/* <input type="password" {...register("password")} /><br></br> */}
                <label>Password: </label>
                <input onChange={handleChange} name="password" /><br></br>

                {/* <Link to='/profile'><input type={"submit"} /></Link> */}
                <button type="submit">Create Account</button>
            </form>
                </div>
                {/* <div>
                    <form onSubmit={handleSubmit(handleRegistration)}>
                        <div>
                            <label>Full Name: </label>
                            <input name="fullName" {...register('fullName', { required: true })} />
                        </div>
                        <div>
                            <label>Gamer ID: </label>
                            <input name="gamerID" {...register('gamerID', { required: true })} />
                        </div>
                        <div>
                            <label>Date of Birth: </label>
                            <input name="DOB" {...register('DOB', { required: true })} />
                        </div>
                        <div>
                            <label>Email: </label>
                            <input type="email" name="email" {...register('email', { required: true })} />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" name="password" {...register('password', { required: true })} />
                        </div>
                        <button>Submit</button>
                    </form>
                </div> */}
            </div>
            <Footer />
        </div>
    );
};

export default Registrationpage;