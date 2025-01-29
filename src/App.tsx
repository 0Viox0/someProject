import { useState } from 'react';
import { Switch } from 'components/Switch';

import './index.scss';

export const App = () => {
    const [value, setValue] = useState(false);

    const handleValueChange = () => {
        setValue(true);
    };

    return (
        <div
            style={{
                display: 'flex',
                minHeight: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Switch size="medium" theme="danger" label="Toggle dark theme" />
        </div>
    );
};
