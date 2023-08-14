const Loading: React.FC = () => {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <h1>Aguarde enquanto o Render inicializa a API...</h1>
      </div>
    );
  };
  
  export default Loading;