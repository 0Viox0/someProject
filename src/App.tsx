import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import { useState } from 'react';

import './index.scss';

export const App = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleOnOkAndCancel = () => {
        setIsOpened(false);
    };

    return (
        <div>
            <Loader
                size="medium"
                theme="primary"
                text="We are loading data"
                loaderShape="dots"
            />
            <Loader
                size="small"
                theme="danger"
                text="We are loading data"
                loaderShape="circle"
            />
            <div>
                <div>
                    <button onClick={() => setIsOpened(true)}>Click me</button>
                    <Modal
                        title="This is some title"
                        theme="secondary"
                        isOpen={isOpened}
                        onCancel={handleOnOkAndCancel}
                        // onOk={handleOnOkAndCancel}
                        // okText="This is ok text"
                        cancelText="This is cancel text"
                        // footer={
                        //     <>
                        //         <button>Some button</button>
                        //     </>
                        // }
                    />
                </div>
            </div>
        </div>
    );
};
