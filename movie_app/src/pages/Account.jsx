import NavBar from '../components/NavBar';

export default function AboutProject() {


    
  return (
    <div className="font-poppins relative bg-[#0B090A] min-h-screen">
      {/* NavBar Here */}
      <NavBar />
      
      <div className="min-w-[35%]">
              <img 
                src="/OBJECTS.png" 
                alt="Developer illustration" 
                className="w-[400px]"
              />
            </div>
    </div>
        
  );
}