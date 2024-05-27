import InnerMenuItem from "./InnerMenuItem"
import { useState } from "react"
import { Link } from "react-router-dom"
import arrow from '../assets/downarrow.svg'
import { getSvg } from "../utils/getsvg.jsx"

const MenuItem = ({ title, active, setActive, link, setShow, show }) => {
    const [innerActive, setInnerActive] = useState('')
    const changeHandler = (title) => {
        if (title === 'wallet') {
            setShow(!show)
            setActive(title)
            setInnerActive('')
        }
        else {
            setShow(false)
            setActive(title)
            setInnerActive('')

        }

    }
    return (
        <>
            <Link
                to={link}
                onClick={() => changeHandler(title)}
                className="flex gap-2 flex-col lg:flex-row cursor-pointer  w-full items-center justify-center lg:justify-start lg:px-6 relative">

                {getSvg(title, active)}

                <p
                    className={`${active === title ? 'text-white' : 'text-darker-600'} text-lg hidden lg:block capitalize`}>
                    {title}
                </p>

                {title === 'wallet' && (
                    <span className='absolute right-0 pr-5'>
                        <img onClick={() => setShow(!show)} className="w-3" src={arrow} alt="" />
                    </span>)}
            </Link>
            {show && title == 'wallet' && (
                <div className='flex flex-col items-center gap-3 lg:px-10 justify-end '>
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


