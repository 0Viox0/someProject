import { useState } from 'react';
import { Checkbox } from 'components/Checkbox';

import './index.scss';

export const App = () => {
    const [value, setValue] = useState(false);

    const handleChange = () => {
        setValue((prevValue) => !prevValue);
    };

    return (
        <div
            style={{
                display: 'grid',
                placeContent: 'center',
                minHeight: '100vh',
            }}
        >
            <Checkbox
                checked={value}
                onChange={handleChange}
                type="info"
                size="medium"
            />
        </div>
    );
};
