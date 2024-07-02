import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

const App = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    console.log("I am in the App",openSidebarToggle);
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <Sidebar openSidebarT={openSidebarToggle} toggleSidebar={OpenSidebar} />
      <div className="flex flex-col flex-grow">
        <Header toggleSidebar={OpenSidebar} />
        <div className="bg-[#1d2634] text-[#9e9ea4] font-montserrat p-4 flex-grow overflow-auto">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
