import Link from'next/link';

const Portfolio = () => {
  return (
  <div>
    
    <section className="ftco-section" id="portfolio-section">
     <div className="container">
        {/* Projects Counter Section */}
      
        <div className="counter-wrap ftco-animate d-flex mt-md-3  text-white">
          <div className="text">
            <p className="mb-2">
            
              <span className="number" data-number="10">10</span> <span>+</span>
              <span>&nbsp; Projects completed</span>
            </p>
            <div className="grid grid-cols-4 gap-4 ">
              <img src="images/a.png " alt='ecomerces webside' width={300}/>
              <img src="images/b.png " alt='ecomerces webside' width={300}/>
              <img src="images/d.png " alt='ecomerces webside' width={300}/>
            
              
            </div>
            
          </div>
        </div>
        </div>

        {/* Resume Section */}
        <div className="row justify-content-center pb-5 ">
        
          <div className="col-md-10 heading-section text-center ftco-animate ">
          <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-green-600 transition-transform">
          <Link href="https://www.linkedin.com/in/hira-hammad-6847592b5/" className="btn btn-primary py-3 px-3 tect-center text-white" >LinkedIn </Link>
              </button>
            <br/>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-green-600 transition-transform">
              <Link href="https://github.com/hiraham" className="btn btn-primary py-3 px-3 tect-center text-white" >Github </Link>
              </button>
            <br/>
            <button className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-green-600 transition-transform">
              <Link href="https://www.linkedin.com/in/hira-hammad-6847592b5/" className="btn btn-primary py-3 px-3 tect-center text-white" >Twitter </Link>
              </button>
              <br/>
              <br/>
            <p className="text-white text-center ">Seasoned Senior Data Analyst with 5+ years of experience driving business strategies through data-driven insights. Proven expertise in data science, statistical analysis, machine learning algorithms, and project management.</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="row">
          <h1 className="big-4 text-center text-primary">Experience</h1>
          <div className="underline"></div>
        </div>

        <div className="row tect-white">
          <div className="col-md-6 text-center text-primary">
            <div className="resume-wrap ftco-animate">
              <span className=" text-primary ">2021-Present</span>
              <h2>Senior Data Analyst</h2>
              <span className="position">FrontEnd Developer</span>
              <br/>
              <p className="mt-4 text-center text-white">
                .Merkle, a leading CXM and media company with over 10K+ professionals globally. It's a part of Dentsu International.</p>
                
                <ul className="text-white">
                  <li>. Analysed ad campaigns, clickstream, and customer surveys data, identified an increasing demand and launched a strategic product line.</li>
                  <li>. Developed time series forecasting models to predict sales and optimize marketing budgets, got model performance of 92%.</li>
                  <li>. Designed and executed A/B tests, performed rigorous statistical analysis. Led to a 20% MoM increase in the conversion rate.</li>
                </ul>
            
            </div>
          </div>
        </div>

        

        {/* Download CV Button */}
        
        <div className="row justify-content-center mt-5">
          <div className="col-md-6 text-center ftco-animate">
            <p><Link href="./Images/pdf-resume.jpeg" className="btn btn-primary py-5 px-6 text-primary">Download CV</Link></p>
          </div>
        </div>
      
    </section>
    </div>
  );
};

export default Portfolio;

  