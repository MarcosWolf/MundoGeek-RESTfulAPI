import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export const Loader = () => {
    return (
        <FontAwesomeIcon icon={faSpinner} spin />
    )
}