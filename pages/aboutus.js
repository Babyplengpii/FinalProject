import React from 'react'
import Header from '../components/Header'
import Aboutus from '../components/Aboutus'
import ReactDOM from 'react-dom';
import Footer from '../components/Footer'



export default function aboutus() {
    return (
      <div style={{backgroundColor: '#4c4556', height: '100vh'}}>
        <Header/>
         <br></br>
         <br></br>
        <Aboutus/> 
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer/>
      </div>
    )
  }