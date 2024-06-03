
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';
import { FaEthereum, BsCurrencyDollar, LuBox } from "../utils/Icons.js";
import CopyToClipboard from 'react-copy-to-clipboard';
import copy from '../assets/copy.svg'
import SnackbarAlert from './SnackbarAlert';
import { useGetRequest, useToken } from '../Hooks/useRequest.js';
import { useNavigate } from 'react-router-dom';

const Table = ({ limit }) => {

    const [open, setOpen] = useState(false);
    const [data, setData] = useState();
    const navigate = useNavigate()



    const getTransactions = async () => {
        const { data, code } = await useGetRequest('transactions');
        if (data != null && code == 200) {
            setData(data)
        }
        else {
            setData([])
        }
    }


    useEffect(() => {
        const token = useToken();
        if (token == null || token == undefined) {
            navigate('/login')
        }
        else {
            getTransactions()
        }
    }, [])

    const getSeverity = (data) => {
        switch (data.status) {
            case 1:
                return 'bg-[#1DD1A1] text-[#09654C]'
            case 0:
                return 'bg-[#EE5253] text-white';

            default:
                return null;
        }
    };
    const getColor = (data) => {
        switch (data.status) {
            case 1:
                return 'text-[#1DD1A1]'
            case 0:
                return 'text-[#EE5253] ';

            default:
                return null;
        }
    };
    const getIcon = (data) => {
        switch (data.network) {
            case 'Ethereum':
                return <span className='inline-block'><FaEthereum /></span>;

            case 'Tron':
                return <span className='inline-block'><LuBox /></span>;


            default:
                return null;
        }
    }

    const iconBodyTemplate = (data) => {
        return <Tag className={`capitalize font-semibold  px-3 text-sm rounded-full`} >
            {getIcon(data)} {data?.network}  <span className='font-normal uppercase'>{data.currency}</span>
        </Tag>;
    };
    const statusBodyTemplate = (data) => {
        return <Tag value={data.status == 1 ? 'Success' : 'Failed'} className={` text-xs uppercase font-semibold  px-3 rounded-full ${getSeverity(data)}`} ></Tag>;
    };

    const amountColorTemplate = (data) => {
        return <Tag value={data.amount} className={`uppercase font-semibold px-3 text-sm rounded-full ${getColor(data)}`} ></Tag>;
    };

    const amountAddressTemplate = (data) => {
        return (
            <div className='flex gap-2'>
                {
                    data.address ? (
                        <>
                            <p>{data.address}</p>
                            <CopyToClipboard
                                text={data.address}                >
                                <img className='cursor-pointer'
                                    onClick={handleClick}
                                    src={copy} alt="" />
                            </CopyToClipboard>
                        </>
                    ) : (<span>no address found</span>)
                }
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
            <SnackbarAlert message={'Text has been copied'} open={open} handleClose={handleClose} />
            <DataTable value={limit ? data?.slice(0, limit) : data} className='text-darker-400 px-3'>
                <Column field="currency" body={iconBodyTemplate} header="Currency"></Column>
                <Column field="address" body={amountAddressTemplate} header="Address"></Column>
                <Column field="status" body={statusBodyTemplate} header="Status"></Column>
                <Column field="amount" body={amountColorTemplate} header="Amount"></Column>
            </DataTable>
        </div>
    );
}

export default Table