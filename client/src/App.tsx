import Header from './components/Header/Header';
import HeaderBottom from './components/Header/HeaderBottom';
import Footer from './components/Footer/Footer';

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <HeaderBottom />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
