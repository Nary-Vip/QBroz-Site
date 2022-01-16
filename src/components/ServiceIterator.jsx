import React, { useContext } from 'react'
import { designs } from '../Services';
import ServiceTiles from './ServiceTiles';
import { ThemeContext } from '../context/Context';

const ServiceIterator = () => {

  const { theme } = useContext(ThemeContext);

    let desColor1 = { background: "#E94560"};
    
    if (theme === "dark") {
        desColor1 = { color: "white", background: "black" };
    }
    else if (theme === "light") {
        desColor1 = { color: "black" };
    }


  console.log(designs);
  return (
    <div>
      <div className="container relative flex flex-col items-center">

        <h1 className="py-4 text-3xl text-neon-green">Design Services</h1>
        <div className="grid w-5/6 gap-4 my-5 border-2 border-black h-4/6 md:grid-cols-2">
          {designs.map((design) => (
            <div style={desColor1}
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1"
              key={design.title}
            >
              <ServiceTiles service={design}/>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default ServiceIterator
