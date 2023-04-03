import React, { useEffect, useState } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";


const Dashboard = () => {
    const [marks, setMarks] = useState([]);
    useEffect(() => {
        fetch('studentMarks.json')
        .then((res) => res.json())
        .then(data => setMarks(data))
    },[])
    return (
        
        <div>
            {/* <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend /> */}
            <h3>Dashboard</h3>
            <LineChart
                width={1500}
                height={300}
                data={marks}
            >
                <Line type="monotone" stroke='black' dataKey='bangla'/>
                <Line dataKey='english' />
                <XAxis dataKey={'name'} />
                <YAxis/>
                <Tooltip/>
            </LineChart>
        </div>
    );
};

export default Dashboard;