import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="h-screen pnf-bg">
            <div className="flex flex-col justify-between my-20 h-3/5">
                <div className="my-10 text-center pnf-cont">
                    <h2 className="p-10 text-white ease-in-out rounded-lg font-balo">404 Uh ohh!</h2>
                    <h4 className="my-10">Page Not Found, head to Home page</h4>
                    <Link to="/" className="text-black my-30 btn btn-3 hover:bg-gray-100">Home</Link>
                </div>
            </div>

        </div>
    )
}

export default PageNotFound
