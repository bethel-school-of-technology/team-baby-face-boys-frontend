import React from 'react';
import { useForm } from 'react-hook-form';
import Header from '../components/header';
import Footer from '../components/footer';

const Registrationpage = () => {
    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => console.log(data);


    return (
        <div>
            <Header />
            <div>
                <div id="container">
                    <h4>Photo Placeholder</h4>
                </div>
                <div>
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
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Registrationpage;