import React from "react";

import logo from '../../images/neighborly-white.png';
import { ConnectWallet } from '@thirdweb-dev/react';

const NavBarItem = ({ title, classprops }) => (
    <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
    )

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.7] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-40 cursor-pointer" />
            </div>
            <ul className="text-white md:flex list-none flex-row justify-between items-center flex-initial">
                  <li className="py-2 px-7 mx-4 rounded-full cursor-pointer">
                    <ConnectWallet/>
                  </li>
            </ul>
        </nav>
    );
}

export default Navbar;