interface LoadMoreButtonProps {
    onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
    return <button className="feed-btn" onClick={onClick}>Carregar mais</button>;
};

export default LoadMoreButton;