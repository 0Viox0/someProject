import { Modal } from 'components/Modal';
import { useState } from 'react';

import './index.scss';

export const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleButtonClick = () => {
        setIsOpen(true);
    };

    const handleOkClick = () => {
        console.log('clicked ok');
        setIsOpen(false);
    };

    const handleCancelClick = () => {
        console.log('clicked cancel');
        setIsOpen(false);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <button onClick={handleButtonClick}>Click me to open modal</button>
            <Modal
                title="Some title just in case"
                isOpen={isOpen}
                onOk={handleOkClick}
                onCancel={handleCancelClick}
                type="primary"
            ></Modal>
        </div>
    );
};
