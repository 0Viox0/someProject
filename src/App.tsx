import { ChangeEvent, useState } from 'react';
import { Input } from 'components/Input';

import './index.scss';
import { Button } from 'components/Button';

export const App = () => {
    const [value, setValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleClick = () => {
        console.log(value);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                minHeight: '100vh',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Input label="something" error="username already exists" />
                <Input label="something" />
            </div>
        </div>
    );
};
