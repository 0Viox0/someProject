import { Loader } from 'components/Loader';

import './index.scss';

export const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Loader
                size="medium"
                type="primary"
                text="We are loading data"
                loaderShape="dots"
            />

            <Loader
                size="small"
                type="danger"
                text="We are loading data"
                loaderShape="circle"
            />
        </div>
    );
};
