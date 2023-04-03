import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis,Tooltip , CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch(' https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then((response) => response.json())
        // .then(data=>console.log(data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;
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
                setPhones(phoneData);
                console.log(phoneData);

            })
    }, [])
    console.log(phones);
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div>
            <h3>Phone Bar</h3>
            <BarChart height={500} width={1000} data={phones}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                
            >
                <Bar dataKey='price' fill='#8884d8' shape={<TriangleBar />} label={{ position: 'top' }}>
                    {phones.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
                {/* {<Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}></Bar>} */}
                <XAxis dataKey='name' fill='#8884d8' />
                <YAxis />
                <Tooltip/>
            </BarChart>
        </div>
    );
};

export default PhoneBar;