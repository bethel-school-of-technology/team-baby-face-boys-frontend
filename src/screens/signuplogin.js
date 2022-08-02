import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/header';
import Footer from '../components/footer';

const Signuplogin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.gamerID));
        if (userData) { // getItem can return actual value or null
            if (userData.password === data.password) {
                console.log(userData.password + " You Are Successfully Logged In");
            } else {
                console.log("GamerID or Password is not matching with our record");
            }
        } else {
            console.log("GamerID or Password is not matching with our record");
        }
    };
    return (
        <div>
            <Header />
            <h4 className="title">Login Form</h4>

            <form className="Login" onSubmit={handleSubmit(onSubmit)}>
                <input type="gamerID" {...register("gamerID", { required: true })} />
                {errors.email && <span >*Email* is mandatory </span>}<br></br>
                <input type="password" {...register("password")} /><br></br>
                <input type={"submit"} />
            </form>
            <Footer />
        </div>
    )
}

export default Signuplogin;