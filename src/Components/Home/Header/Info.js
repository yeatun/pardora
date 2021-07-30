import React from 'react';
import './Info.css';
import {
    Link
   
  } from "react-router-dom";
const Info = ({info}) => {
    return (
        <div class=" blogs blog-content col-xl-4 col-md-6 mb-4">
        
        <div class="card border-left-primary shadow h-100 m-2 py-2">
            <div class=" card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2 " style={{width:'18rem'}}>
                    <Link style={{textDecoration:'none'}}  to={`/ProfileDetails/${info._id}`}>
                        <img class="card-img-top shadow" src={info.imgUrl} alt="" />
                        <div class="text-xs pt-3 font-weight-bold text-primary text-uppercase mb-1">
                        <h3 className="text-dark ">{info.title}</h3>
                        <small className="text-dark ">price: <b>{info.price}</b></small>
                        </div>
                       
                        </Link>
                    </div>
                   
                </div>
            
            </div>
        </div>
    </div>
       
    );
};

export default Info;