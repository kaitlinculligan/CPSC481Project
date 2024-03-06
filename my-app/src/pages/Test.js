import React from 'react';
import HouseCard from './HouseCard';
import house1 from "./Photos/house1.png";
function Test() {

    return (
        <div className=' vh-100  vw-100 flex-column d-flex align-content-center '>
            <HouseCard Name="House 1" Photo={house1} Price="Price: $1000" Description="Description: 3 Bedroom, 2 Bathroom, 1 Kitchen" />
        </div>
    );
}

export default Test;