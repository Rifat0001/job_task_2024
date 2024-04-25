const Navbar = () => {
    return (
        <div>
            <div className="navbar fixed z-50  md:px-[50px]   bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>SERVICES</a></li>
                            <li><a>COMMERCIAL</a></li>
                            <li><a>PRICING</a></li>
                            <li><a>ABOUT</a></li>
                            <li><a>BLOG</a></li>
                            <li><a>
                                <button className="btn btn-sm bg-sky-100">JOIN OUR TEAM</button>
                            </a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost md:text-xl text-sm ">Pb_Dev</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu  flex justify-center items-center menu-horizontal px-1">
                        <li>
                            <a href="#">SERVICES</a>
                        </li>
                        <li>
                            <a href="#">COMMERCIAL</a>
                        </li>
                        <li>
                            <a href="#">PRICING</a>
                        </li>
                        <li>
                            <a href="#">ABOUT</a>
                        </li>
                        <li>
                            <a href="#">SERVICES</a>
                        </li>
                        <li>
                            <a href="#">BLOG</a>
                        </li>
                        <li> <a href="#">
                            <button className="btn btn-sm bg-sky-400 text-white">JOIN OUR TEAM</button>
                        </a></li>

                    </ul>
                </div>
                <div className="navbar-end gap-3 md:mt-2 mt-0 w-full">
                    <button className="btn md:btn-sm btn-xs bg-sky-400 text-white">SCHEDULE SHOOT</button>
                    <a className='md:text-sm text-xs' href="#">SIGN UP</a>
                    <a className='md:text-sm text-xs' href="#">SIGN IN</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;