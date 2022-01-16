import React from 'react'


const ServiceTiles = (props) => {
    const { Icon, title } = props.service;

    function reveal() {
        let reveals = document.querySelectorAll(".reveal");
      
        for (var i = 0; i < reveals.length; i++) {
          let windowHeight = window.innerHeight;
          let elementTop = reveals[i].getBoundingClientRect().top;
      
          if (elementTop < windowHeight) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }
      
      window.addEventListener("scroll", reveal);

    return (
        <div className='flex items-center p-2 space-x-3'>
            <Icon className='w-12 h-12 text-green-500 reveal fade-bottom' />
            <div className="w-full sm:text-center">
                <h6 className='font-bold'>{title}</h6>
            </div>
        </div>
    )
}

export default ServiceTiles
