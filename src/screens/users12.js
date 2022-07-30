import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Preteen = () => {
    return (
        <div class="container-fluid  d-flex flex-column">
    <div class="row">
      <div class="col-sm p-3 text-center">
        <Navbar/>
      </div>
    </div>
    <div class="row text-secondary bgnd_img-12under align-items-center ">
         <div class="col text-center">
      </div>
  </div>
    <div class="row footer">
      <div class="col text-center p-3">
        <Footer/>
        </div>
    </div>
  </div>
    );
};

export default Preteen;