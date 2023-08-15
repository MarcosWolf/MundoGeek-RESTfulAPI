import {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header/Header';
import HeaderBottom from './components/Header/HeaderBottom';
import Footer from './components/Footer/Footer';

import { Outlet } from "react-router-dom";
import Loading from './components/Loading/Loading';

const App: React.FC = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('Aguarde enquanto o Render inicializa a API...');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-mundogeek.onrender.com/');
        setData(response.data);
        console.log(data);
        setIsLoading(false);
        
      } catch (error) {
        console.error('Erro ao se comunicar com a API:', error);
        setTimeout(() => {
          setShowErrorMessage(true);
          setMessage('Ocorreu um erro ou a resposta está demorando demais para chegar.');
        }, 25000)
      }
    }

    fetchData();
  }, []);

  return (
    <>
      { isLoading ? (
        <Loading showErrorMessage={showErrorMessage} message={message} />
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
