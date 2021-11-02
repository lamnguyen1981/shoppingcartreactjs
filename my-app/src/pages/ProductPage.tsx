import React from 'react';
import { useLocation, withRouter } from 'react-router';
import BreadCrumb from '../components/BreadCrumb';
import HomeNavBar from '../components/HomeNavBar';
import MainSearchBar from  '../components/MainSearchBar'
import ProductList from '../components/ProductList';
import SubCatagorySlider from '../components/SubCatagorySlider';



const ProductPage = () => {

  let  location = useLocation();

  console.log('location')
  console.log(location)
  return (
   <main>
      <MainSearchBar/>
      
      <HomeNavBar/>
      <BreadCrumb></BreadCrumb>
      <SubCatagorySlider  catagoryId = {location.state.subcatagoryId}/> 
      <ProductList/> 
     
   </main>
    
  );
}


export default withRouter(ProductPage);
