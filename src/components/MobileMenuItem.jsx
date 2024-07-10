import InnerMenuItem from "./InnerMenuItem"
import { useState } from "react"
import { Link } from "react-router-dom"
import arrow from '../assets/downarrow.svg'
import { getSvg } from "../utils/getsvg.jsx"

const MobileMenuItem = ({ title, active, setActive, link, setShow, show }) => {
    const [innerActive, setInnerActive] = useState('')
    const changeHandler = (title) => {
        if (title === 'wallet') {
            setActive(title)
            setInnerActive('')
        }
        else {
            setActive(title)
            setInnerActive('')

        }

    }
    return (
        <>
            <Link
                to={link}
                onClick={() => changeHandler(title)}
                className="flex gap-2 cursor-pointer w-full items-center px-2 relative">
                {getSvg(title, active)}
                <p
                    className={`${active === title ? 'text-white' : 'text-darker-600'} text-md capitalize`}>
                    {title}
                </p>

            </Link>
            {title == 'wallet' && (
                <div className='w-full justify-end px-8 gap flex flex-col gap-3'>
                    <MobileMenuItem link={'/wallet/deposit'} title="deposit" active={innerActive} setActive={setActive} />
                    <MobileMenuItem link={'/wallet/withdraw'} title="withdraw" active={innerActive} setActive={setActive} />
                    <MobileMenuItem link={'/wallet/exchange'} title="exchange" active={innerActive} setActive={setActive} />
                </div>
            )
            }
        </>

    )
}

export default MobileMenuItem


