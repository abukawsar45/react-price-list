import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PhoneBar = () => {
    const [phones, getPhones] = useState([]);
    useEffect(() => {
        // fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
            // .then((response) => response.json())
        // .then(data=>console.log(data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data =>{
                const loadedData=data.data;
                // console.log(loadedData);
                const phoneData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    // console.log(price);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo;
                })
                console.log(phoneData);

        })
    },[])
    return (
        <div>
            <h3>Phone Bar</h3>
        </div>
    );
};

export default PhoneBar;