import { useState } from 'react';

import Sidebar from '../layout/Sidebar';
import Never from "../components/info/Never";
import Pixel from "../components/info/Pixel";
import Sample from "../components/info/Sample";
import Footer from "../layout/Footer";
import InfoHeader from "../layout/InfoHeader";

function InfoCollection() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
      <InfoHeader closeSidebar={toggleSidebar} />
      <Pixel />
      <Sample />
      <Never />
      <Footer />
    </>
  )
}

export default InfoCollection

