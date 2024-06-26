import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="bg-[#E6E9EE] flex justify-center items-center  h-[100vh] w-full">
      <div className="relative bg-[#F5F8FD] h-[90vh] w-[45%] rounded-2xl mx-auto shadow-2xl">
        <div className="w-full">
          <Header />
        </div>
        <Outlet />

        <div className="absolute bottom-5 left-0 w-[100%]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
