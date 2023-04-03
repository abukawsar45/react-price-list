import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({data}) => {
    // console.log(data.features);
    return (
        <div className='bg-cyan-300 p-6 rounded-lg my-4 mx-3 flex flex-col'>
            <h3 className='text-5xl text-center font-bold'>{data.price}/<span className='text-2xl text-amber-700 font-semibold'>Month</span> </h3>
            <h4 className='text-4xl text-center font-semibold'>{data.name}</h4>
            <h4 className='underline text-zinc-500 font-semibold text-xl'>Features:</h4>
            {
                data.features.map((feature, idx) => <Feature key={idx} feature={feature}/>)
            }
            <button className="w-full mt-auto bg-green-500 hover:bg-blue-500 text-white font-semibold hover:text-blue py-3 px-5 rounded-lg ">
                Buy Now
            </button>
        </div>
    );
};

export default PriceCard;