import Header from './components/content/Header/Header';
import HeaderBottom from './components/content/Header/HeaderBottom';
import Footer from './components/content/Footer/Footer';
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <HeaderBottom />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;