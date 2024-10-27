import React from 'react'

const Hero = () => {
  return (
    <div>
   <section className="container mx-auto mt-8 flex items-center">
        {/* Text Section */}
        <div className="w-1/2 pr-8  ">
          
          <h1 className="text-6xl font-bold text-primary">Hello, I'm Hira Naz</h1>
          <p className="text-xl mt-4  text-white  slide-in">A passionate developer showcasing my portfolio.</p>
          <button className="bg-primary hover:bg-grey-900 text-white font-bold py-4 px-2 rounded mt-4">View My Work</button>
        </div>

        {/* Image Section */}
        <div className="w-1/2 ">
          <img src={'./Images/hira.png'} alt='my image' width={600} height={400} />
        </div>
      </section>
         
    </div>
  )
}

export default Hero;

