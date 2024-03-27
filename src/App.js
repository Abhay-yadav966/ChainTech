import "./App.css";
import Navbar from "./Components/Core/Navbar";

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-auto m-0 p-0 font-Poppins h-screen w-screen bg-black" >
      
      <Navbar/>
      
      {/* border line */}
      <div className="border-b border-[#1F1F1F]" ></div>

      {/* section 1 */}
      <section className="w-11/12 max-w-7xl flex flex-col items-center mx-auto" >
        {/* heading */}
        <h1 className=" font-black text-[120px] text-white" >WELCOME</h1>
        <h2 className=" font-black text-[120px] text-white " >TO <span className="font-extrabold text-[120px] bg-gradient-to-r from-[#00FFA7] to-[#FFFF00] text-transparent bg-clip-text " >CHAINTECH</span></h2>

        {/* paragraph */}
        <p className="font-medium text-lg text-white text-center w-3/5 " >From square one to engineering excellence! PixelPlex assists in full-cycle software development, jumps in to take it over, or brings dedicated top-demanded skills.</p>
      </section>

      {/* section 2 */}
      <section className="bg-white" >
        <div className="w-11/12 max-w-7xl mx-auto" >
          
        </div>
      </section>
    </div>
  );
}

export default App;
