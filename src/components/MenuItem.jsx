import InnerMenuItem from "./InnerMenuItem"
import { MdKeyboardArrowDown } from "react-icons/md"
import { useState } from "react"
import { Link } from "react-router-dom"
import arrow from '../assets/downarrow.svg'
import market from '../assets/market.svg'
import { getSvg } from "../utils/getsvg.jsx"

const MenuItem = ({ title, active, setActive, link }) => {
    const [show, setShow] = useState(false)
    const [innerActive, setInnerActive] = useState('')
    const changeHandler = (title) => {
        if (title === 'wallet') {
            setActive(title)
        }
        else {
            setActive(title)
            setInnerActive('')

        }
    }
    return (
        <>
            <Link to={link} onClick={() => changeHandler(title)} className="flex gap-2 cursor-pointer  w-full items-center justify-center lg:justify-start lg:px-6 relative">
                {getSvg(title, active)}
                <p className={`${active === title ? 'text-white' : 'text-darker-600'} text-lg hidden lg:block capitalize`}>{title}</p>

                {title === 'wallet' && (
                    <span onClick={() => setShow(!show)} className='flex justify-between'>
                        <img className="w-4" src={arrow} alt="" />
                    </span>)}
            </Link>
            {show && (
                <div className='flex flex-col gap-3 px-10'>
                    <InnerMenuItem link={'/wallet/deposit'} title="deposit" innerActive={innerActive} setInnerActive={setInnerActive} />
                    <InnerMenuItem link={'/wallet/withdraw'} title="withdraw" innerActive={innerActive} setInnerActive={setInnerActive} />
                    <InnerMenuItem link={'/wallet/exchange'} title="exchange" innerActive={innerActive} setInnerActive={setInnerActive} />
                </div>
            )
            }
        </>

    )
}

export default MenuItem


