import React from 'react';

//import { useDispatch } from 'react-redux';
import { Link } from  'react-router-dom'

//import { useAppSelector  } from '../app/hooks';
 

const ProductList = () => {
 
    return (
        <div className="product_detail">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="row align-items-center mb-4 pb-1">
                        <div className="col-12">
                            <div className="product_header">
                                <div className="product_header_left">
                                    <div className="custom_select">
                                        <select className="form-control form-control-sm">
                                            <option value="order">Default sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="date">Sort by newness</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>


                                    </div>
                                </div>
                                <div className="product_header_right">
                                   
                                    <div className="custom_select">
                                        <select className="form-control form-control-sm first_null not_chosen">
                                            <option value="">Showing</option>
                                            <option value="9">9</option>
                                            <option value="12">12</option>
                                            <option value="18">18</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row shop_container grid">
                        <div className="col-md-4 col-6">
                            <div className="product">
                                <div className="product_img">
                                    <Link to="shop-product-detail.html">
                                        <img src="./style/images/5ee73a442e1e5380f4abf129_9876.png" alt="product_img1"/>
                                    </Link>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="flaticon-shopping-cart"></i> Add To Cart</Link></li>                                               
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="flaticon-heart-3"></i></Link></li>
                                            <li><Link to="#"><i className="flaticon-heart-3"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><Link to="shop-product-detail.html">Blue Dress For Woman</Link></h6>
                                    <div className="product_price">
                                        <span className="price">$45.00</span>
                                        <del>$55.25</del>
                                        <div className="on_sale">
                                            <span>35% Off</span>
                                        </div>
                                    </div>
                                    <div className="rating_wrap">
                                        <div className="rating">
                                            <div className="product_rate" style={{width:'80%'}}></div>
                                        </div>
                                        <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="pr_switch_wrap">
                                        <div className="product_color_switch">
                                            <span className="active" data-color="#87554B" style={{backgroundColor: 'rgb(135, 85, 75)'}}></span>
                                            <span data-color="#333333" style={{backgroundColor: 'rgb(51, 51, 51)'}}></span>
                                            <span data-color="#DA323F" style={{backgroundColor: 'rgb(218, 50, 63)'}}></span>
                                        </div>
                                    </div>
                                    <div className="list_product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="product">
                                <div className="product_img">
                                    <Link to="shop-product-detail.html">
                                        <img src="./style/images/5ee9ed9ee80f4e41ca7074e6_9739.png" alt="product_img2"/>
                                    </Link>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><Link to="shop-product-detail.html">Lether Gray Tuxedo</Link></h6>
                                    <div className="product_price">
                                        <span className="price">$55.00</span>
                                        <del>$95.00</del>
                                        <div className="on_sale">
                                            <span>25% Off</span>
                                        </div>
                                    </div>
                                    <div className="rating_wrap">
                                        <div className="rating">
                                            <div className="product_rate" style={{width:'68%'}}></div>
                                        </div>
                                        <span className="rating_num">(15)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="pr_switch_wrap">
                                        <div className="product_color_switch">
                                            <span className="active" data-color="#847764" style={{backgroundColor: 'rgb(132, 119, 100)'}}></span>
                                            <span data-color="#0393B5" style={{backgroundColor: 'rgb(3, 147, 181)'}}></span>
                                            <span data-color="#DA323F" style={{backgroundColor: 'rgb(218, 50, 63)'}}></span>
                                        </div>
                                    </div>
                                    <div className="list_product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="product">
                                <span className="pr_flash">New</span>
                                <div className="product_img">
                                    <Link to="shop-product-detail.html">
                                        <img src="./style/images/6018fe63664b076ffd674a42_10604.png" alt="product_img3"/>
                                    </Link>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><Link to="shop-product-detail.html">woman full sliv dress</Link></h6>
                                    <div className="product_price">
                                        <span className="price">$68.00</span>
                                        <del>$99.00</del>
                                    </div>
                                    <div className="rating_wrap">
                                        <div className="rating">
                                            <div className="product_rate" style={{width:'87%'}}></div>
                                        </div>
                                        <span className="rating_num">(25)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="pr_switch_wrap">
                                        <div className="product_color_switch">
                                            <span className="active" data-color="#333333" style={{backgroundColor: 'rgb(51, 51, 51)'}}></span>
                                            <span data-color="#7C502F" style={{backgroundColor: 'rgb(124, 80, 47)'}}></span>
                                            <span data-color="#2F366C" style={{backgroundColor: 'rgb(47, 54, 108)'}}></span>
                                            <span data-color="#874A3D" style={{backgroundColor: 'rgb(135, 74, 61)'}}></span>
                                        </div>
                                    </div>
                                    <div className="list_product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="product">
                                <div className="product_img">
                                    <Link to="shop-product-detail.html">
                                        <img src="./style/images/60658ebe2314dc9682462058_11601.png" alt="product_img4"/>
                                    </Link>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><Link to="shop-product-detail.html">light blue Shirt</Link></h6>
                                    <div className="product_price">
                                        <span className="price">$69.00</span>
                                        <del>$89.00</del>
                                        <div className="on_sale">
                                            <span>20% Off</span>
                                        </div>
                                    </div>
                                    <div className="rating_wrap">
                                        <div className="rating">
                                            <div className="product_rate" style={{width:'70%'}}></div>
                                        </div>
                                        <span className="rating_num">(22)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="pr_switch_wrap">
                                        <div className="product_color_switch">
                                            <span className="active" data-color="#333333" style={{backgroundColor: 'rgb(51, 51, 51)'}}></span>
                                            <span data-color="#A92534" style={{backgroundColor: 'rgb(169, 37, 52)'}}></span>
                                            <span data-color="#B9C2DF" style={{backgroundColor: 'rgb(185, 194, 223)'}}></span>
                                        </div>
                                    </div>
                                    <div className="list_product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="product">
                                <div className="product_img">
                                    <Link to="shop-product-detail.html">
                                        <img src="./style/images/60efdb4fe30e25822bf1b29b_11722.png" alt="product_img5"/>
                                    </Link>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><Link to="shop-product-detail.html">blue dress for woman</Link></h6>
                                    <div className="product_price">
                                        <span className="price">$45.00</span>
                                        <del>$55.25</del>
                                        <div className="on_sale">
                                            <span>35% Off</span>
                                        </div>
                                    </div>
                                    <div className="rating_wrap">
                                        <div className="rating">
                                            <div className="product_rate" style={{width:'80%'}}></div>
                                        </div>
                                        <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="pr_switch_wrap">
                                        <div className="product_color_switch">
                                            <span className="active" data-color="#87554B" style={{backgroundColor: 'rgb(135, 85, 75)'}}></span>
                                            <span data-color="#333333" style={{backgroundColor: 'rgb(51, 51, 51)'}}></span>
                                            <span data-color="#5FB7D4" style={{backgroundColor: 'rgb(95, 183, 212)'}}></span>
                                        </div>
                                    </div>
                                    <div className="list_product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="product">
                                <span className="pr_flash bg-danger">Hot</span>
                                <div className="product_img">
                                    <Link to="shop-product-detail.html">
                                        <img src="./style/images/610cd8a9a01037902551c367_12324.png" alt="product_img6"/>
                                    </Link>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><Link to="shop-product-detail.html">Blue casual check shirt</Link></h6>
                                    <div className="product_price">
                                        <span className="price">$55.00</span>
                                        <del>$95.00</del>
                                        <div className="on_sale">
                                            <span>25% Off</span>
                                        </div>
                                    </div>
                                    <div className="rating_wrap">
                                        <div className="rating">
                                            <div className="product_rate" style={{width:'68%'}}></div>
                                        </div>
                                        <span className="rating_num">(15)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="pr_switch_wrap">
                                        <div className="product_color_switch">
                                            <span className="active" data-color="#87554B" style={{backgroundColor: 'rgb(135, 85, 75)'}}></span>
                                            <span data-color="#333333" style={{backgroundColor: 'rgb(51, 51, 51)'}}></span>
                                        </div>
                                    </div>
                                    <div className="list_product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="product">
                                <span className="pr_flash bg-success">Sale</span>
                                <div className="product_img">
                                    <Link to="shop-product-detail.html">
                                        <img src="./style/images/60efdb4fe30e25822bf1b29b_11722.png" alt="product_img7"/>
                                    </Link>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><Link to="shop-product-detail.html">white black line dress</Link></h6>
                                    <div className="product_price">
                                        <span className="price">$68.00</span>
                                        <del>$99.00</del>
                                        <div className="on_sale">
                                            <span>20% Off</span>
                                        </div>
                                    </div>
                                    <div className="rating_wrap">
                                        <div className="rating">
                                            <div className="product_rate" style={{width:'87%'}}></div>
                                        </div>
                                        <span className="rating_num">(25)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="pr_switch_wrap">
                                        <div className="product_color_switch">
                                            <span className="active" data-color="#333333" style={{backgroundColor: 'rgb(51, 51, 51)'}}></span>
                                            <span data-color="#7C502F" style={{backgroundColor: 'rgb(124, 80, 47)'}}></span>
                                            <span data-color="#2F366C" style={{backgroundColor: 'rgb(47, 54, 108)'}}></span>
                                        </div>
                                    </div>
                                    <div className="list_product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="product">
                                <div className="product_img">
                                    <Link to="shop-product-detail.html">
                                        <img src="./style/images/60efdb4fe30e25822bf1b29b_11722.png" alt="product_img8"/>
                                    </Link>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><Link to="shop-product-detail.html">Men blue jins Shirt</Link></h6>
                                    <div className="product_price">
                                        <span className="price">$69.00</span>
                                        <del>$89.00</del>
                                        <div className="on_sale">
                                            <span>20% Off</span>
                                        </div>
                                    </div>
                                    <div className="rating_wrap">
                                        <div className="rating">
                                            <div className="product_rate" style={{width:'70%'}}></div>
                                        </div>
                                        <span className="rating_num">(22)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="pr_switch_wrap">
                                        <div className="product_color_switch">
                                            <span className="active" data-color="#333333" style={{backgroundColor: 'rgb(51, 51, 51)'}}></span>
                                            <span data-color="#444653" style={{backgroundColor: 'rgb(68, 70, 83)'}}></span>
                                            <span data-color="#B9C2DF" style={{backgroundColor: 'rgb(185, 194, 223)'}}></span>
                                        </div>
                                    </div>
                                    <div className="list_product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-6">
                            <div className="product">
                                <div className="product_img">
                                    <Link to="shop-product-detail.html">
                                        <img src="./style/images/60efdb4fe30e25822bf1b29b_11722.png" alt="product_img9"/>
                                    </Link>
                                    <div className="product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product_info">
                                    <h6 className="product_title"><Link to="shop-product-detail.html">T-Shirt Form Girls</Link></h6>
                                    <div className="product_price">
                                        <span className="price">$45.00</span>
                                        <del>$55.25</del>
                                        <div className="on_sale">
                                            <span>35% Off</span>
                                        </div>
                                    </div>
                                    <div className="rating_wrap">
                                        <div className="rating">
                                            <div className="product_rate" style={{width:'80%'}}></div>
                                        </div>
                                        <span className="rating_num">(21)</span>
                                    </div>
                                    <div className="pr_desc">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa enim. Nullam id varius nunc id varius nunc.</p>
                                    </div>
                                    <div className="pr_switch_wrap">
                                        <div className="product_color_switch">
                                            <span className="active" data-color="#B5B6BB" style={{backgroundColor: 'rgb(181, 182, 187)'}}></span>
                                            <span data-color="#333333" style={{backgroundColor: 'rgb(51, 51, 51)'}}></span>
                                            <span data-color="#DA323F" style={{backgroundColor: 'rgb(218, 50, 63)'}}></span>
                                        </div>
                                    </div>
                                    <div className="list_product_action_box">
                                        <ul className="list_none pr_action_btn">
                                            <li className="add-to-cart"><Link to="#"><i className="icon-basket-loaded"></i> Add To Cart</Link></li>
                                            <li><Link to="shop-compare.html" className="popup-ajax"><i className="icon-shuffle"></i></Link></li>
                                            <li><Link to="shop-quick-view.html" className="popup-ajax"><i className="icon-magnifier-add"></i></Link></li>
                                            <li><Link to="#"><i className="icon-heart"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="pagination mt-3 justify-content-center pagination_style1">
                                <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                <li className="page-item"><Link className="page-link" to="#"><i className="linearicons-arrow-right"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
             
            </div>
        </div>
    </div>
     
    );
  }
  
  
  export default ProductList;