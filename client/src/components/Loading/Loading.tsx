import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

interface LoadingProps {
    showErrorMessage: boolean;
    message: string;
}

const Loading: React.FC<LoadingProps> = ({showErrorMessage, message}) => {

    return (
      <div className="loading-container">
        <h1>Bem vindo ao Mundo Geek!</h1>
        <div className="status-icon">
            {showErrorMessage ? (                
                <FontAwesomeIcon icon={faTimesCircle}/>
            ) : (
                <FontAwesomeIcon icon={faCircleNotch} spin/>
            )}
        </div>
        <h2>{message}</h2>
      </div>
    );
  };
  
  export default Loading;