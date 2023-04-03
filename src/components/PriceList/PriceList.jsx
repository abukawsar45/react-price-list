import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [getData, setGetData] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
        .then(data => setGetData(data))
        // .then(data => console.log(data))
    },[])
    return (
        <div>
            <h4 className='text-4xl text-center bg-purple-400 indigo-400 text-amber-300 font-bold'>Awesome Affordable Prices</h4>
            <div className="grid md:grid-cols-3 gap-3">
                {
                    getData.map((data) => <PriceCard key={data.id} data={data} />)
                }
            </div>
        </div>
    );
};

export default PriceList;