import { Button } from 'components/Button';
import LoadingIcon from 'shared/assets/icons/LoadingIcon.svg';

import './index.scss';

export const App = () => {
    const handleClick = () => {
        console.log('something');
    };

    return (
        <div
            style={{
                display: 'grid',
                placeContent: 'center',
                minHeight: '100vh',
            }}
        >
            <Button
                type="danger"
                size="big"
                onClick={handleClick}
                iconPosition="left"
                loading
            >
                Click me
            </Button>
        </div>
    );
};
