import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { useDispatch } from 'react-redux';
import { Link } from  'react-router-dom'
import { RootState } from '../app/store';
import { getCatalogs } from '../slice/catalogSlice';
//import { useAppSelector  } from '../app/hooks';
 


const HomenavhBar = () => {
  const dispatch = useDispatch();

  

  //const  catagories = useSelector((state: RootState) => state.catagoryReducer);
 // const a = useSelector((state: RootState) => state.counter);
 // const  reducer = useSelector((state: RootState) =>state);
  const  {catagories, isLoading, error} = useSelector((state: RootState) => state.reducer.catagoryReducer);
  console.log("selectCount");
 // console.log(useSelector((state: RootState) => state.reducer.counter))

 console.log("í loading is ");
  console.log(catagories, error, isLoading);
  /*const { catagories, isLoading, error } = useSelector(
    (state: RootState) => {
      return {
        catagories: state.catagoryReducer.catagories,
        error: state.catagoryReducer.error,
        isLoading: state.catagoryReducer.isLoading
      }
    }
  )*/

  //const mainMenus = catagories.values(Icatagory).filter(homeMenu => homeMenu.IncludeInTopMenu===true)
  const mainMenus = Object.values(catagories).filter(homeMenu => homeMenu.IncludeInTopMenu===true)
  const leftMainMenus = Object.values(catagories).filter(homeMenu => homeMenu.IncludeInTopMenu===false)

  //const abc = Object.values(catagories).f

  console.log('mainMenus');
  console.log(mainMenus);

  useEffect(() => {
    debugger;
    async function fetchData() {
      // You can await here
      const response = await dispatch(getCatalogs());
      return response;
      // ...
    }   
   
    fetchData();
  }, [dispatch]);

  //console.log(catagories);
  console.log('resuce');
  //console.log(reducer.catagoryReducer);
  console.log('isLoading is');
  console.log(isLoading);
    return (
      <div className="bottom_header light_skin main_menu_uppercase bg_dark mb-4">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="dropdown">
              <button className="dropbtn "> <i className="lnr lnr-menu"></i> <span>Danh Mục</span> </button>
              <div className="dropdown-content">
                <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu" >
                    {
                      leftMainMenus.map((homeleftMenu) =>(
                        <li>
                         {/* <Link to={'./catagory/' + homeleftMenu.SeName} className="dropdown-item">
                          <div className="d-flex "> <i className="flaticon-dress">&nbsp;</i>
                            <div className="pl-5">{homeleftMenu.Name}</div>
                            {homeleftMenu.SubCategories != null && homeleftMenu.SubCategories.length> 0 && 
                            <div className="ms-auto">&rsaquo;</div>}
                          </div>
                            </Link> */}
                            <Link to={{
                                  pathname: '/catagory/' + homeleftMenu.SeName,
                                 
                                  state: { catagoryId: homeleftMenu.Id }
                                }} className="dropdown-item">
                                   <div className="d-flex "> <i className="flaticon-dress">&nbsp;</i>
                                    <div className="pl-5">{homeleftMenu.Name}</div>
                                    {homeleftMenu.SubCategories != null && homeleftMenu.SubCategories.length> 0 && 
                                    <div className="ms-auto">&rsaquo;</div>}
                                  </div>
                            </Link>
                          {homeleftMenu.SubCategories != null && homeleftMenu.SubCategories.length> 0 && 
                                    
                                    <ul className="submenu  dropdown-menu">
                                      { homeleftMenu.SubCategories.map((subMenu) => (
                                         <li>
                                          
                                           <Link to={{
                                                pathname: '/catagory/' + subMenu.SeName,
                                              
                                                state: { subcatagoryId: subMenu.Id }
                                              }} >
                                                {subMenu.Name}
                                          </Link>
                                           </li>
                                         ))
                          }
                     
                   </ul>
                                    
             }	
                        </li>

                      
                                    
                        
                      ))
                    }                  
                 
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="col-9"> 
               <nav className="navbar navbar-expand-lg">
                          <button className="navbar-toggler side_navbar_toggler" type="button" data-toggle="collapse" data-target="#navbarSidetoggle" aria-expanded="false"> 
                              <span className="ion-android-menu"></span>
                          </button> 
                          <div className="collapse navbar-collapse mobile_side_menu" id="navbarSidetoggle">
                              
                              <ul className="navbar-nav">
                              {
                                mainMenus.map((homeMenu) =>(
                                  <li className="dropdown">
                                    <Link  data-toggle="dropdown" className="nav-link  active" to={"./catagory/" + homeMenu.SeName}>{homeMenu.Name}</Link >
                                    
                                    {homeMenu.SubCategories != null &&
                                    
                                      <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                      <ul > 
                                       { homeMenu.SubCategories.map((subMenu) => (
                                        <li><Link  className="dropdown-item nav-link nav_item" to={'./catagory/' + subMenu.SeName}>{subMenu.Name}</Link ></li> 
                                        ))
                                       }
                                      </ul>
                                      </div>
                                   
                                    }
                                    

                                    
                                  
                                  </li>
                                ))
                              }
                                  
                              </ul>
                          </div>
                         
                          <div className="pr_search_icon">
                              <Link to="#" className="nav-link pr_search_trigger"><i className="linearicons-magnifier"></i></Link >
                          </div>
                      </nav>
          </div>
        </div>
      </div>
    </div>
     
    );
  }
  
  
  export default HomenavhBar;