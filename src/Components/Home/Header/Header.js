import React, { useEffect, useState } from 'react';
import Info from './Info';
import details from '../../../Data/data.json'
const Header = () => {

    const [infos, setInfos] = useState([]);
    useEffect(() => {
        setInfos(details)
    }, [])
    return (
        <div className=" row  ">
             {
                infos.map(info => <Info key={info._id} info={info}></Info>)
            }
        </div>
    );
};

export default Header;