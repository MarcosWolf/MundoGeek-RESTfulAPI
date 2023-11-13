import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface LoadMoreButtonProps {
    onClick: () => void;
    message: string;
    showLoading: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, message, showLoading }) => {
    return <button className="feed-btn" onClick={onClick}>{showLoading ? <FontAwesomeIcon icon={faSpinner} spin /> : message}</button>;
};

export default LoadMoreButton;