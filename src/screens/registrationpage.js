import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Registrationpage = () => {
    return (
        <div>
            <Header />
            <div>
                <div>
                    <h4>Photo Placeholder</h4>
                </div>
                <div>
                    <h5>Create New User</h5>
                    <form>
                        <label> Full Name:</label>
                        <input type="text" id="fullName" name="fullName" />
                        <br></br>
                        <label> DOB:<input type="text" id="dateOfBirth" name="dateOfbirth" /></label>
                        <br></br>
                        <label> Gamer ID:<input type="text" id="gamerID" name="gamerID" /></label>
                        <br></br>
                        <label> Email:<input type="text" id="firstName" name="email" /></label>
                        <br></br>
                        <label> Password:<input type="text" id="password" name="password" /></label>
                        <br></br>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Registrationpage;