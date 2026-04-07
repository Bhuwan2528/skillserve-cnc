import React, { useEffect } from "react";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Login from "./Admin/Login/Login";
import HeroAboutVideo from "./Admin/CNC/CNCHeroAboutVideo";
import ChooseFooter from "./Admin/CNC/CNCChooseFooter";
import CNCPage from "./Pages/CNCPage";
import CountDown from "./Admin/CNC/CNCCountDown";
import EVHeroAboutVideo from "./Admin/EV/EVHeroAboutVideo";
import EVChooseFooter from "./Admin/EV/EVChooseFooter";
import EVCountDown from "./Admin/EV/EVCountDown";
import EVPage from "./Pages/EVPage";
import AutomationHeroAboutVideo from "./Admin/Automation/AutomationHeroAboutVideo";
import AutomationChooseFooter from "./Admin/Automation/AutomationChooseFooter";
import AutomationCountDown from "./Admin/Automation/AutomationCountDown";
import DesignHeroAboutVideo from "./Admin/Design/DesignHeroAboutVideo";
import DesignChooseFooter from "./Admin/Design/DesignChooseFooter";
import DesignCountDown from "./Admin/Design/DesignCountDown";
import DMHeroAboutVideo from "./Admin/DM/DMHeroAboutVideo";
import DMChooseFooter from "./Admin/DM/DMChooseFooter";
import DMCountDown from "./Admin/DM/DMCountDown";
import ElectronicsHeroAboutVideo from "./Admin/Electronics/ElectronicsHeroAboutVideo";
import ElectronicsChooseFooter from "./Admin/Electronics/ElectronicsChooseFooter";
import ElectronicsCountDown from "./Admin/Electronics/ElectronicsCountDown";
import AutomationPage from "./Pages/AutomationPage";
import DesignPage from "./Pages/DesignPage copy";
import DMPage from "./Pages/DMPage copy";
import ElectronicsPage from "./Pages/ElectronicsPage";
// import AdminPanel from "./Admin/AdminPanel/AdminPanel";
const App = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <Routes>
      <Route path="/" element={<CNCPage />} />
      <Route path="/ev" element={<EVPage />} />
      <Route path="/automation" element={<AutomationPage />} />
      <Route path="/design" element={<DesignPage />} />
      <Route path="/dm" element={<DMPage />} />
      <Route path="/electronics" element={<ElectronicsPage />} />

      <Route path="/login" element={<Login />} />
      {/* <Route path="/admin-panel" element={<AdminPanel />} /> */}
      
      {/* CNC */}
      <Route path="/admin-hero-about-video" element={<HeroAboutVideo />} />
      <Route path="/admin-choose-footer" element={<ChooseFooter />} />
      <Route path="/admin-countdown" element={<CountDown />} />

      {/* EV */}
      <Route path="/ev-hero-about-video" element={<EVHeroAboutVideo />} />
      <Route path="/ev-choose-footer" element={<EVChooseFooter />} />
      <Route path="/ev-countdown" element={<EVCountDown />} />

      {/* Automation */}
      <Route path="/automation-hero-about-video" element={<AutomationHeroAboutVideo />} />
      <Route path="/automation-choose-footer" element={<AutomationChooseFooter />} />
      <Route path="/automation-countdown" element={<AutomationCountDown />} />

      {/* design */}
      <Route path="/design-hero-about-video" element={<DesignHeroAboutVideo />} />
      <Route path="/design-choose-footer" element={<DesignChooseFooter />} />
      <Route path="/design-countdown" element={<DesignCountDown />} />

      {/* DM */}
      <Route path="/dm-hero-about-video" element={<DMHeroAboutVideo />} />
      <Route path="/dm-choose-footer" element={<DMChooseFooter />} /> 
      <Route path="/dm-countdown" element={<DMCountDown />} />

      {/* electronics */}
      <Route path="/electronics-hero-about-video" element={<ElectronicsHeroAboutVideo />} />
      <Route path="/electronics-choose-footer" element={<ElectronicsChooseFooter />} />
      <Route path="/electronics-countdown" element={<ElectronicsCountDown />} />


    </Routes>
  );
};

export default App;