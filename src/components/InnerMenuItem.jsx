import { useState } from "react";
import { BsSpeedometer2 } from "../utils/Icons.js";
import { Link } from "react-router-dom";
import { getSvg } from "../utils/getsvg";

const InnerMenuItem = ({ title, innerActive, setInnerActive, link }) => {
    return (
        <Link to={link} onClick={() => setInnerActive(title)} className="flex gap-2 justify-center cursor-pointer w-full items-start lg:justify-start lg:px-6 relative ">
            {
                getSvg(title, innerActive)
            }
            <p className={`${innerActive === title ? 'text-darker-400' : 'text-darker-600'} text-lg hidden lg:block capitalize`}>{title}</p>

        </Link>

    )
}

export default InnerMenuItem;