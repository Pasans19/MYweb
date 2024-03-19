import React from 'react';
import Navbar from '../Component/Molecules/Navbar/navbar';
import Carousel from '../Component/Molecules/Carousel/carousel';
import Card from '../Component/Molecules/Card/card';
import Footer from '../Component/Molecules/Footer/footer';
import Button from '../Component/Molecules/Buttons/button';
import Category from '../Component/Molecules/Category/category';


function Home() {
  return (
    <div>
       <Navbar/>
       <Carousel/>
       <Button/>
       <Category/>
       <Card/>
   
       <Footer/>
    </div>
   
  )
}
export default Home;