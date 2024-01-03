import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DashBoard from './DashBoard';

function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
      />
      <DashBoard />
    </div>
  );
}

export default Home;