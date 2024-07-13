import React from 'react';
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const Chart = ({ data }) => {

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip bg-white px-2 py-1 rounded-lg">

                    <p>{payload[0].value}</p>
                </div>
            );
        }

        return null;
    };

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
                <defs>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#5F27CD" stopOpacity={0.8} />
                        <stop offset="100%" stopColor="#301467" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="high" stackId="1" stroke="#6A74CC" fill='url(#colorPv)' fillOpacity={1} />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default Chart;
