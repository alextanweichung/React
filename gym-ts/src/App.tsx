import Navbar from "@/scenes/navbar";
import Footer from "@/scenes/footer";
import Signup from '@/scenes/signup';
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { Navigate, Route, Routes } from 'react-router-dom';
import CombinedContent from '@/scenes/CombineContent';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
      SelectedPage.Home
    );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() =>{
    const handleScroll = () => {
      if(window.scrollY === 0){
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Routes>
        <Route path="/" element={<CombinedContent setSelectedPage={setSelectedPage}/>} />
        <Route path="/signup" element={<Signup />} />
        {/* Add other routes if needed */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
