import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/Context';

const PageNotFound = () => {
    const { theme } = useContext(ThemeContext);
    let style;

    if (theme === "dark") {
        style = { background: "linear-gradient(168deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 0%, rgba(34,34,34,0.8970938717283788) 69%)", color: "#DCDCDC" };
    }
    else if (theme === "light") {
        style = { color: "black" };
    }

    return (
        <div style={style} className="h-screen pnf-bg">
            <div className="flex flex-col justify-between my-20 h-3/5">
                <div className="my-10 text-center pnf-cont">
                    <h2 className="p-10 text-white ease-in-out rounded-lg font-balo">404 Uh ohh!</h2>
                    <h4 className="my-10">Page Not Found, Head over to Home page</h4>
                    <Link to="/" className="text-black my-30 btn btn-3 hover:bg-gray-100">Home</Link>
                </div>
            </div>

        </div>
    )
}

export default PageNotFound
