import React from 'react';
import { Link } from  'react-router-dom'



const MainSearchBar = () => {
  
  return (
   
    <div className="container p-2">
      <div className="  row  m-3 text-balck">
          <div className="col-3 align-items mx-auto"> <Link to='#'> <img src="images/logo_dark.png"  width="182" height="47" alt="" /> </Link> </div>
          <div className=" col-6">
            <form>
              <div className="input-group  input-group-lg">
                  <select className="form-select rounded-start  w-5">
                  <option selected>All Catagory</option>              
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <input type="text" className="form-control"/>
                <button type="button" className="btn input-group-text "> <span className="fa fa-search"></span> </button>
              </div>
            </form>
          </div>
          <div className=" col-3 align-middle ">
            <div className="d-flex align-items-center float-right">
              <div className="flex-shrink-0 "> <img src="images/—Pngtree—red phone icon_5054285.png" width="50" height="50" alt="" /> </div>
              <div className="flex-grow-1 ms-3 "> 0984954490 </div>
            </div>
          </div>
      </div>
  </div>
  );
}


export default MainSearchBar;
