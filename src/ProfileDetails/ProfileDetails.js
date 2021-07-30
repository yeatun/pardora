import React, { useEffect, useState } from 'react';

import {  useHistory, useParams } from 'react-router-dom';


import data from '../Data/data.json'

const ProfileDetails = () => {
    const {_id} =useParams();
    console.log(_id);
    const history = useHistory();
const [profile ,setProfile] = useState(data);
console.log(profile);

 const result = profile.find(profiles =>profiles?._id ==_id)
console.log(result.title);

    return (
        <div className="container-fluid row">
      
           <div className=" p-5 text-center">
           
      
           <p className='text-secondary'> <b></b>{result.title}</p>
           
        
          
           </div>
           
         
        </div>
    );
};

export default ProfileDetails;