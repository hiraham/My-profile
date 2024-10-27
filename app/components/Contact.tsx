// components/About.js
const Contact = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row">
        {/* Profile Image Section */}
        <div className="md:w-1/3">
          <img
            src={"./Images/hira.png"} // Update the path as needed
            alt="Hira Naz"
            width={100}
            className="rounded-full mb-4 w-full h-auto"
          />
        </div>
        {/* Details Next to Profile Image */}
        <div className="md:w-2/3 md:pl-6 text-white">
          <div className="about-info mb-4">
            <p><span className="font-bold">Name:</span> Hira Naz</p>
            <p><span className="font-bold">Experience:</span> 7 Months</p>
            <p><span className="font-bold">Address:</span> Karachi, Pakistan</p>
          </div>

          <div className="skill-mf">
            <p className="font-bold text-xl">Skills</p>

            {/* Skill Bars */}
            <div className="mb-4">
              <span>HTML</span> <span className="float-right">95%</span>
              <div className="bg-gray-300 rounded h-2">
                <div className="bg-primary h-2 rounded" style={{ width: '95%' }} />
              </div>
            </div>

            <div className="mb-4">
              <span>CSS</span> <span className="float-right">95%</span>
              <div className="bg-gray-300 rounded h-2">
                <div className="bg-primary h-2 rounded" style={{ width: '95%' }} />
              </div>
            </div>

            <div className="mb-4">
              <span>JavaScript</span> <span className="float-right">85%</span>
              <div className="bg-gray-300 rounded h-2">
                <div className="bg-primary h-2 rounded" style={{ width: '85%' }} />
              </div>
            </div>

            <div className="mb-4">
              <span>TypeScript</span> <span className="float-right">90%</span>
              <div className="bg-gray-300 rounded h-2">
                <div className="bg-primary h-2 rounded" style={{ width: '90%' }} />
              </div>
            </div>

            <div className="mb-4">
              <span>Tailwind CSS</span> <span className="float-right">80%</span>
              <div className="bg-gray-300 rounded h-2">
                <div className="bg-primary h-2 rounded" style={{ width: '80%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      
      </div>
    
  );
};
export default Contact;



