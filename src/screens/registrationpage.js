import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/header';
import Footer from '../components/footer';
import { useNavigate } from 'react-router';
import axios from 'axios';
import Navbar from '../components/navbar';

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


        axios.post("http://localhost:3000/createaccount", user).then(response => {
            console.log(response);

            localStorage.setItem("userId", JSON.stringify(response.data.id))
            // TODO store response in localstorage
            navigate("/account")
        })

        // axios.get("http://localhost:3000/User/" + user.gamerID ).then(response => {
        //     console.log(response);
        //     navigate("/profile")
        // })
    }
    

    return (
        <div className="container-fluid  bg-primary d-flex flex-column">
        <div className="row">
          <div className="col-sm p-3 text-center">
            <Header/>
          </div>
        </div>
        <div className="row text-secondary bgnd_img-registration align-items-center ">
             <div className="col text-center">
                 <div className="col-sm">
            <form className="Create Account form_regis mx-auto p-3" onSubmit={handleSubmit}>
            <img className=" img-fluid rounded  my-3 mx-auto" src={ require('../../src/images/page_bkgnds/jan.jpg') } />
            {/* <input type="gamerID" {...register("gamerID", { required: true })} /> */}
            <label>Full Name: </label><br></br>
            <input className='mb-2'  onChange={handleChange} name="fullName" /><br></br>
            <label>Gamer ID: </label><br></br>
            <input className='mb-2'  onChange={handleChange} name="gamerID" /><br></br>
            <label>Date of Birth: </label><br></br>
            <input className='mb-2'  onChange={handleChange} name="DOB" /><br></br>
            <label>Email: </label><br></br>
            <input className='mb-2'  onChange={handleChange} name="email" /><br></br>
            {/* {errors.email && <span >*Email* is mandatory </span>}<br></br> */}
            {/* <input type="password" {...register("password")} /><br></br> */}
            <label className='mb-2'>Password: </label><br></br>
            <input onChange={handleChange} name="password" /><br></br>

            {/* <Link to='/profile'><input type={"submit"} /></Link> */}
            <button className='my-4 ' type="submit">Create Account</button>
        </form>
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
          </div>
          
      </div>
        <div className="row footer">
          <div className="col text-center p-3">
          <script src="./" ></script>
            <Footer/>
            </div>
        </div>
      </div>
    );
};

export default Registrationpage;