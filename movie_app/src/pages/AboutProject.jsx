import NavBar from "../components/NavBar";

export default function AboutProject() {
  return (
    <div className="font-poppins relative bg-[#0B090A] min-h-screen">
      {/* Add NavBarNormal here */}
      <NavBar />
      
      <div className="relative">
        <div className="px-24 py-20 max-w-[1200px] mx-auto">
          <div className="flex justify-between items-center gap-x-12 mb-32">
            <div>
              <h1 className="text-5xl font-semibold text-[#DCDCDC] mb-4">
                Lets take a look at<br />
                How we developed this<br />
                <span className="text-[#FF6224]">Web Application</span>
              </h1>
              <p className="text-lg text-[#aaaaaa]">
                Are you facing any problems or need help, well We're<br />
                here to help you. Reach to us anytime.
              </p>
            </div>
            <div>
              <img 
                src="/OBJECTS.png" 
                alt="Developer illustration" 
                className="w-[400px]"
              />
            </div>
          </div>

          <div className="mb-32">
            <h2 className="text-4xl font-semibold text-[#DCDCDC] mb-12">01 DESIGN PHASE</h2>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-[#252B30] p-6 rounded-lg">
                <div className="flex items-start gap-x-6">
                  <div className="flex-shrink-0">
                    <img src="/Figma-logo 1.png" alt="Figma" className="w-20 h-20 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#DCDCDC] mb-3">Tools Used</h3>
                    <p className="text-[#aaaaaa]">
                      Are you facing any problems or need<br />
                      help, well We're here to help you.<br />
                      Reach to us anytime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#252B30] p-6 rounded-lg">
                <div className="flex items-start gap-x-6">
                  <div className="flex-shrink-0">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="w-12 h-12 bg-[#FF6224] rounded"></div>
                      <div className="w-12 h-12 bg-[#252B30] rounded border border-[#4a4a4a]"></div>
                      <div className="w-12 h-12 bg-[#252B30] rounded border border-[#4a4a4a]"></div>
                      <div className="w-12 h-12 bg-[#DCDCDC] rounded"></div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-[#DCDCDC] mb-3">Color Palatte</h3>
                    <p className="text-[#aaaaaa]">
                      Are you facing any problems or need<br />
                      help, well We're here to help you.<br />
                      Reach to us anytime.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#252B30] p-6 rounded-lg max-w-[49%]">
              <div className="flex items-start gap-x-6">
                <div className="flex-shrink-0">
                  <div className="text-7xl font-bold text-[#DCDCDC]">Aa</div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#DCDCDC] mb-3">Typography</h3>
                  <p className="text-[#aaaaaa]">
                    Are you facing any problems or need<br />
                    help, well We're here to help you.<br />
                    Reach to us anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-semibold text-[#DCDCDC] mb-12">02 DEVELOPMENT PHASE</h2>
            
            <div className="bg-[#252B30] p-6 rounded-lg mb-12">
              <div className="flex items-start gap-x-15">
                <div className="flex gap-x-6 flex-shrink-0">
                  <img src="/React-icon 1.png" alt="React" className="w-25 h-25 object-contain" />
                  <img src="/Tailwind_CSS_Logo 1.png" alt="Tailwind" className="w-25 h-25 object-contain" />
                  <img src="/PHP-logo 1.png" alt="PHP" className="w-25 h-25 object-contain" />
                  <img src="/mysql-ar21 1.png" alt="MySQL" className="w-25 h-25 object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#DCDCDC] mb-3">Tech Stack</h3>
                  <p className="text-[#aaaaaa]">
                    Are you facing any problems or need help,<br />
                    well We're here to help you. Reach to us<br />
                    anytime.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex justify-between items-center gap-x-12 mb-8">
                <div>
                  <h3 className="text-4xl font-semibold mb-4">
                    <span className="text-[#FF6224]">Front-End</span><br />
                    <span className="text-[#DCDCDC]">Development</span>
                  </h3>
                  <p className="text-[#aaaaaa]">
                    Are you facing any problems or need help, well We're<br />
                    here to help you. Reach to us anytime.
                  </p>
                </div>
                <div className="flex justify-end">
                  <img 
                    src="/28158111_frontend_4 1.png" 
                    alt="Frontend Development" 
                    className="w-[350px] h-auto object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mb-16">
              <div className="flex justify-between items-center gap-x-12">
                <div className="flex justify-start">
                  <img 
                    src="/28694506_backend_4 1.png" 
                    alt="Backend Development" 
                    className="w-[350px] h-auto object-contain"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-4xl font-semibold mb-4">
                    <span className="text-[#FF6224]">Back-End</span><br />
                    <span className="text-[#DCDCDC]">Development</span>
                  </h3>
                  <p className="text-[#aaaaaa]">
                    Are you facing any problems or need help, well We're<br />
                    here to help you. Reach to us anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}