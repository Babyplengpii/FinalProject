import React from 'react'
import Header from '../components/Header'
import ReactDOM from 'react-dom';
import Registerblock  from '../components/Registerblock'
import { background } from '@chakra-ui/react';



export default function aboutus() {
    return (
      <div style={{backgroundImage: "url('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')",height:'100vh',backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',}}>
        <Header/>
        <br></br>
        <br></br>ม
         <br></br>
         <Registerblock/>
      </div>
    )
  }