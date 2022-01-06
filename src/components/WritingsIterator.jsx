import React,{ useContext } from 'react'
import { writings } from '../Services';
import ServiceTiles from './ServiceTiles';
import { ThemeContext } from '../context/Context';

const WritingsIterator = () => {
    const { theme } = useContext(ThemeContext);

    let desColor1 = { background: "#E94560"};
    
    if (theme === "dark") {
        desColor1 = { color: "white", background: "black" };
    }
    else if (theme === "light") {
        desColor1 = { color: "black" };
    }

  console.log(writings);
    return (
        <div>
            <div className="container relative flex flex-col items-center h-screen">

                <h1 className="py-4 text-3xl text-neon-green">Design Services</h1>
                <div className="grid w-5/6 gap-4 my-5 h-4/6 md:grid-cols-2">
                    {writings.map((design) => (
                        <div style={desColor1}
                            className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
                            key={design.title}
                        >
                            <ServiceTiles service={design} />
                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}

export default WritingsIterator
