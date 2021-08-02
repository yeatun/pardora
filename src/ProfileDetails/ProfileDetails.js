import React, { useEffect, useState } from 'react';

import {  useHistory, useParams } from 'react-router-dom';
import Navbar2 from '../Components/Home/Navbar/Navbar2/Navbar2';
import img1 from '../Components/images/Ellipse 91.png';
import img2 from '../Components/images/Ellipse 92.png'

import data from '../Data/data.json'
import Navbar from './../Components/Home/Navbar/Navbar';

const ProfileDetails = () => {
    const {_id} =useParams();
    console.log(_id);
    const history = useHistory();
const [profile ,setProfile] = useState(data);
console.log(profile);

 const result = profile.find(profiles =>profiles?._id ==_id)
console.log(result.title);

    return (

        <div>
            <Navbar></Navbar>
            <Navbar2></Navbar2>
            <div className="container m-5">
            <div className="row ">
                <div className="col-sm-6 col-md-5 col-lg-6">
                <img style={{width:'35rem',borderRadius:'20px'}} src={result.imgUrl} alt="" />
                <div className="col-md-4 justify-content-center  ">
      <div className='mt-5' style={{width:'25rem'}}>
      

        <div className="shadow d-flex ">
           
           
            <img className="me-3" src={img1} alt="" width="100" height="60"/>
            <div>
                
            <h6 >harry kane</h6>
            <p>senior vibes editor | NFT artist & creator</p>
            </div>
        </div>
        
        
      </div>
      <div className='mt-3' style={{width:'25rem'}}>
      

        <div className="shadow d-flex " >
           
           
            <img className="me-3" src={img2} alt="" width="100" height="60"/>
            <div>
                
            <h6 >harry kane</h6>
            <p>senior vibes editor | NFT artist & creator</p>
            </div>
        </div>
        
        
      </div>
   </div>
                </div>
                <div className="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
                    <p>10 june 2021</p>
                    <h2>{result.title}</h2>
                    <p>A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.   
                    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.</p>
                    <p>  As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read</p>
                    <p>price: <b>{result.price}</b></p>
                    <div className='mt-5'>
                        <h2>Owner History</h2>
                    <table class="table">
  <thead>
    <tr>
      
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody className='shadow m-5'>
    <tr>
    
      <td> <div className='mt-3' style={{width:'12rem'}}>
      

      <div className=" d-flex " >
         
         
          <img className="me-3" src={img2} alt="" width="60" height="55"/>
          <div>
              
          <h6 >harry kane</h6>
          <p>p.es@gmail.com</p>
          </div>
      </div>
      
      
    </div></td>
      <td> <div className='mt-3' style={{width:'12rem'}}>
      

      <div className=" d-flex " >
         
         
          <img className="me-3" src={img2} alt="" width="60" height="55"/>
          <div>
              
          <h6 >harry kane</h6>
          <p>p.es@gmail.com</p>
          </div>
      </div>
      
      
    </div></td>
      <td><h6 className='mt-3' style={{width:'15rem'}} >10am,21jun 21</h6></td>
    </tr>
    <tr >
     
      <td><div className='mt-3' style={{width:'12rem'}}>
      

      <div className=" d-flex " >
         
         
          <img className="me-3" src={img2} alt="" width="60" height="55"/>
          <div>
              
          <h6 >harry kane</h6>
          <p>p.es@gmail.com</p>
          </div>
      </div>
      
      
    </div></td>
      <td><div className='mt-3' style={{width:'12rem'}}>
      

      <div className=" d-flex " >
         
         
          <img className="me-3" src={img2} alt="" width="60" height="55"/>
          <div>
              
          <h6 >harry kane</h6>
          <p>p.es@gmail.com</p>
          </div>
      </div>
      
      
    </div></td>
      <td>10pm,18july 21</td>
    </tr>
    <tr>
     
      <td><div className='mt-3' style={{width:'12rem'}}>
      

      <div className=" d-flex " >
         
         
          <img className="me-3" src={img2} alt="" width="60" height="55"/>
          <div>
              
          <h6 >harry kane</h6>
          <p>p.es@gmail.com</p>
          </div>
      </div>
      
      
    </div></td>
      <td><div className='mt-3' style={{width:'12rem'}}>
      

      <div className=" d-flex " >
         
         
          <img className="me-3" src={img2} alt="" width="60" height="55"/>
          <div>
              
          <h6 >harry kane</h6>
          <p>p.es@gmail.com</p>
          </div>
      </div>
      
      
    </div></td>
      <td>10pm,18july 21</td>
    </tr>
  </tbody>
</table>
                    </div>
                </div>
            </div>
        </div>
        </div>



        
    );
};

export default ProfileDetails;