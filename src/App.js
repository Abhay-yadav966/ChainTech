import "./App.css";
import Navbar from "./Components/Core/Navbar";
import HeroSection from "./Components/Core/HeroSection";
import ServicesSection from "./Components/Core/ServicesSection";
import Footer from "./Components/Core/Footer";

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-auto m-0 p-0 font-Poppins h-screen w-screen bg-black" >
      
      <Navbar/>
      
      {/* border line */}
      <div className="border-b border-[#1F1F1F]" ></div>

      {/* section 1 */}
      <HeroSection/>

      {/* section 2 */}
      <ServicesSection/>

      {/* footer */}
      <Footer/>
    </div>
  );
}

export default App;
