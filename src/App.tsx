import { Input } from 'components/Input';
import { ChangeEvent, useState } from 'react';

import './index.scss';

export const App = () => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <div
            style={{
                display: 'grid',
                placeContent: 'center',
                minHeight: '100vh',
            }}
        >
            <Input
                value={value}
                onChange={handleChange}
                placeholder="Enter your name..."
                type="info"
                variant="outlined"
                label="Some label"
                error="Wrong input type shit"
            />
        </div>
    );
};
