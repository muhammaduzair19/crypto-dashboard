
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { FaEthereum } from "react-icons/fa6";

import { BsCurrencyBitcoin, BsCurrencyDollar } from "react-icons/bs";

const Table = ({ data }) => {

    const datas = [
        {
            id: '1000',
            currency: 'Ethereum',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: '24 / 23 / 22',
            status: 'pending',
            amount: 500
        },
        {
            id: '1001',
            currency: 'Dollar',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "24 / 23 / 22",
            status: 'success',
            amount: 500
        },
        {
            id: '1001',
            currency: 'Dollar',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "24 / 23 / 22",
            status: 'success',
            amount: 500
        },
        {
            id: '1003',
            currency: 'Ethereum',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "24 / 23 / 22",
            status: 'failed',
            amount: 500
        },
        {
            id: '1000',
            currency: 'Ethereum',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: '24 / 23 / 22',
            status: 'pending',
            amount: 500
        },
        {
            id: '1001',
            currency: 'Dollar',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "24 / 23 / 22",
            status: 'success',
            amount: 500
        },
        {
            id: '1001',
            currency: 'Dollar',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "24 / 23 / 22",
            status: 'success',
            amount: 500
        },
        {
            id: '1003',
            currency: 'Ethereum',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "24 / 23 / 22",
            status: 'failed',
            amount: 500
        },
        {
            id: '1000',
            currency: 'Ethereum',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: '24 / 23 / 22',
            status: 'pending',
            amount: 500
        },
        {
            id: '1001',
            currency: 'Dollar',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "24 / 23 / 22",
            status: 'success',
            amount: 500
        },
        {
            id: '1001',
            currency: 'Dollar',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "24 / 23 / 22",
            status: 'success',
            amount: 500
        },
        {
            id: '1003',
            currency: 'Ethereum',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "24 / 23 / 22",
            status: 'failed',
            amount: 500
        },
    ]

    const getSeverity = (data) => {
        switch (data.status) {
            case 'success':
                return 'bg-[#1DD1A1] text-[#09654C]'

            case 'pending':
                return 'bg-[#FECA57] text-[#705009]';

            case 'failed':
                return 'bg-[#EE5253] text-white';

            default:
                return null;
        }
    };
    const getColor = (data) => {
        switch (data.status) {
            case 'success':
                return 'text-[#1DD1A1]'

            case 'pending':
                return 'text-[#FECA57]';

            case 'failed':
                return 'text-[#EE5253] ';

            default:
                return null;
        }
    };

    const getIcon = (data) => {
        switch (data.currency) {
            case 'Ethereum':
                return <FaEthereum />

            case 'Dollar':
                return <BsCurrencyDollar />;


            default:
                return null;
        }
    }


    const iconBodyTemplate = (data) => {
        return <Tag value={data.currency} className={`uppercase font-semibold  px-3 text-sm rounded-full`} >
            {getIcon(data)}
        </Tag>;
    };
    const statusBodyTemplate = (data) => {
        return <Tag value={data.status} className={`uppercase font-semibold  px-3 text-sm rounded-full ${getSeverity(data)}`} ></Tag>;
    };


    const amountColorTemplate = (data) => {
        return <Tag value={"$" + data.amount} className={`uppercase font-semibold px-3 text-sm rounded-full ${getColor(data)}`} ></Tag>;
    };



    return (
        <div className="w-full py-3 border-[#34395C] border flex flex-col rounded-lg">
            <DataTable value={data ? datas : datas.slice(0, 3)} className='text-darker-400 px-3'>
                <Column field="currency" body={iconBodyTemplate} header="Currency"></Column>
                <Column field="address" header="Address"></Column>
                <Column field="date" header="Date"></Column>
                <Column field="status" body={statusBodyTemplate} header="Status"></Column>
                <Column field="amount" body={amountColorTemplate} header="Amount"></Column>
            </DataTable>
        </div>
    );
}

export default Table