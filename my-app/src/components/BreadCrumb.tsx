import React from 'react';

//import { useDispatch } from 'react-redux';
import { Link } from  'react-router-dom'

//import { useAppSelector  } from '../app/hooks';
 

const BreadCrumb = () => {
 
    return (
        <div className="breadcrumb_section bg_gray page-title-mini">
        <div className="container">
           
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="page-title">
                        <h1>Shopping Cart</h1>
                    </div>
                </div>
                <div className="col-md-6">
                    <ol className="breadcrumb justify-content-md-end">
                        <li className="breadcrumb-item"><Link to="#">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                        <li className="breadcrumb-item active">Shopping Cart</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
     
    );
  }
  
  
  export default BreadCrumb;