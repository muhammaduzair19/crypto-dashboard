
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { FaEthereum } from "react-icons/fa6";

import { BsCurrencyDollar } from "react-icons/bs";
import CopyToClipboard from 'react-copy-to-clipboard';
import copy from '../assets/copy.svg'
import SnackbarAlert from './SnackbarAlert';

const Table = ({ data }) => {

    const [open, setOpen] = useState(false);

    const datas = [
        {
            id: '1000',
            currency: 'Ethereum',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: '01-May-2024',
            status: 'pending',
            amount: 500
        },
        {
            id: '1001',
            currency: 'Dollar',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "01-May-2024",
            status: 'success',
            amount: 500
        },
        {
            id: '1001',
            currency: 'Dollar',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "01-May-2024",
            status: 'success',
            amount: 500
        },
        {
            id: '1003',
            currency: 'Ethereum',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "01-May-2024",
            status: 'failed',
            amount: 500
        },
        {
            id: '1000',
            currency: 'Ethereum',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: '01-May-2024',
            status: 'pending',
            amount: 500
        },
        {
            id: '1001',
            currency: 'Dollar',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "01-May-2024",
            status: 'success',
            amount: 500
        },
        {
            id: '1001',
            currency: 'Dollar',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "01-May-2024",
            status: 'success',
            amount: 500
        },
        {
            id: '1003',
            currency: 'Ethereum',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "01-May-2024",
            status: 'failed',
            amount: 500
        },
        {
            id: '1000',
            currency: 'Ethereum',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: '01-May-2024',
            status: 'pending',
            amount: 500
        },
        {
            id: '1001',
            currency: 'Dollar',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "01-May-2024",
            status: 'success',
            amount: 500
        },
        {
            id: '1001',
            currency: 'Dollar',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "01-May-2024",
            status: 'success',
            amount: 500
        },
        {
            id: '1003',
            currency: 'Ethereum',
            address: 'eyJhbGciOiJIUzI1NiIsInR5c',
            date: "01-May-2024",
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
                return <span className='inline-block'><FaEthereum /></span>;

            case 'Dollar':
                return <span className='inline-block'><BsCurrencyDollar /></span>;


            default:
                return null;
        }
    }


    const iconBodyTemplate = (data) => {
        return <Tag className={`uppercase font-semibold  px-3 text-sm rounded-full`} >
            {getIcon(data)} {data.currency}
        </Tag>;
    };
    const statusBodyTemplate = (data) => {
        return <Tag value={data.status} className={` text-xs uppercase font-semibold  px-3 rounded-full ${getSeverity(data)}`} ></Tag>;
    };

    const amountColorTemplate = (data) => {
        return <Tag value={"$" + data.amount} className={`uppercase font-semibold px-3 text-sm rounded-full ${getColor(data)}`} ></Tag>;
    };


    const amountAddressTemplate = (data) => {
        return (
            <div className='flex gap-2'>
                <p>{data.address}</p>
                <CopyToClipboard
                    text={data.address}                >
                    <img className='cursor-pointer'
                        onClick={handleClick}
                        src={copy} alt="" />
                </CopyToClipboard>
            </div>
        )
    }



    const handleClick = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };



    return (
        <div className="w-full py-3 border-[#34395C] border flex flex-col rounded-lg">
            <SnackbarAlert open={open} handleClose={handleClose} />
            <DataTable value={data ? datas : datas.slice(0, 3)} className='text-darker-400 px-3'>
                <Column field="currency" body={iconBodyTemplate} header="Currency"></Column>
                <Column field="address" body={amountAddressTemplate} header="Address"></Column>
                <Column field="date" header="Date"></Column>
                <Column field="status" body={statusBodyTemplate} header="Status"></Column>
                <Column field="amount" body={amountColorTemplate} header="Amount"></Column>
            </DataTable>
        </div>
    );
}

export default Table