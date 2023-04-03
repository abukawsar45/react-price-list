import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const DashboardTwo = () => {
    const [marks, setMarks] = useState([]);
    useEffect(() => {
        fetch('marksTwo.json')
            .then(res=>res.json())
            .then(data => setMarks(data))
    },[])
    return (
        <div>
            <h1>DashboardTwo</h1>
            
            <LineChart
                width={1500}
                height={500}
                data={marks}
            >
                <Line type="monotone" dataKey='arabic' stroke="#8884d8"  />
                <Line type="monotone" dataKey='math' stroke="blue" strokeWidth={1} />
                <XAxis dataKey='name' />
                <YAxis></YAxis>
                <Tooltip/>
                </LineChart>
            
        </div>
    );
};

export default DashboardTwo;