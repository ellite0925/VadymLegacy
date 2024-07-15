import { useState } from 'react';

import Sidebar from '../layout/Sidebar';
import Discover from "../components/home/Discover"
import Trending from "../components/home/Trending"
import Footer from "../layout/Footer"
import Header from "../layout/Header"

function HomePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />
      <Header closeSidebar={toggleSidebar} />
      <Discover />
      <Trending />
      <Footer />
    </>
  )
}

export default HomePage

