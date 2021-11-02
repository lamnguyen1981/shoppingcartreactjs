import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
//import {MyScriipt} from "../scripts/main.js"

//import { useDispatch } from 'react-redux';
import { Link } from  'react-router-dom'
import { getSubCatalogs } from '../slice/catalogSlice';

interface ICProps {
    catagoryId: number
  }

//import { useAppSelector  } from '../app/hooks';


const SubCatagorySlider = (props : ICProps) => {

    const  {subCatagories, isLoading, error} = useSelector((state: RootState) => state.reducer.catagoryReducer);
    
    console.log('subCatagory in slige')
    console.log(subCatagories, error, isLoading);
    const dispatch = useDispatch();
    console.log('subCatagories length' + subCatagories.length)
    useEffect(() => {
        debugger;
        console.log('catagoryId')
       console.log(props.catagoryId);
        

       fetchData();
       
      

      


        async function fetchData() {
            // You can await here
            const response = await dispatch(getSubCatalogs(props.catagoryId));
            return response;
            // ...
          }  

        
         
         
         
      }, [props, dispatch]);
    return (
        <div className="container">
        <div className="subcategory_header">
        <div className="row">
            <div className="col-12">
                <div className="">
                    <div className="row align-items-center">

                        <div className="col-lg-12 col-md-8">
                            <div className="subcategory_container">
                            {
                                subCatagories.map((sub) =>(
                                    <div className="categories_box">
                                        <Link to="#">

                                            <span>{sub.Name}</span>
                                        </Link>
                                    </div>
                                ))
                            }
                               
                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    </div>
</div>
    );
  }
  
  
  export default SubCatagorySlider;