import React, { PureComponent } from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({ data }) => {

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 10,
                    left: 10,
                    bottom: 10,
                }}
            >
                <Tooltip />
                <Area type="monotone" dataKey="high"  stackId="1" stroke="#6A74CC" fillOpacity={0}/>
            </AreaChart>
        </ResponsiveContainer>
    );
}


export default Chart
