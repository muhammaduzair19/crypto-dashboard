import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '24 hrs',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },

];

const Chart = () => {


    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 30,
                    bottom: 10,
                }}
            >
                <Tooltip />
                {/* <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" /> */}
                {/* <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" /> */}
                <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
        </ResponsiveContainer>
    );
}


export default Chart
