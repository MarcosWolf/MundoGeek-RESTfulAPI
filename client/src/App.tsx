import {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import HeaderBottom from './components/Header/HeaderBottom';
import Footer from './components/Footer/Footer';

import { Outlet } from "react-router-dom";
import Loading from './components/Loading/Loading';

const App: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-mundogeek.onrender.com/');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao se comunicar com a API:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      { isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <HeaderBottom />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
}

export default App
