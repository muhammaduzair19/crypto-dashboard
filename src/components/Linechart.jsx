import * as React from 'react';
import { ChartContainer } from '@mui/x-charts';
import {
    LinePlot,
    lineElementClasses,
    markElementClasses,
} from '@mui/x-charts/LineChart';

const pData = [2, 1398, 9800, 39980908, 878, 32324, 343255];
const m3 = [343,354564,32546]
const xData = [2, 198, 93234800, 3908, 3423, 3800, 46567868];
const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];

export default function TinyLineChart() {
    return (
        <ChartContainer
            width={1200}
            height={200}
            series={[{ type: 'line', data: pData },{ type: 'line', data: xData }]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            sx={{
                background: 'transparent',
                [`& .${lineElementClasses.root}`]: {
                    stroke: '#8884d8',
                    strokeWidth: 2,
                },
                [`& .${markElementClasses.root}`]: {
                    stroke: '#8884d8',
                    scale: '0.6',
                    fill: '#fff',
                    strokeWidth: 2,
                },
            }}
            disableAxisListener
        >
            <LinePlot />
        </ChartContainer>
    );
}