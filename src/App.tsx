import { Switch } from 'components/Switch';
import { Select } from 'components/Select';
import { Input } from 'components/Input';
import { Checkbox } from 'components/Checkbox';
import { Radio } from 'components/Radio';
import { Button } from 'components/Button';
import { ChangeEvent, useState } from 'react';
import { OptionValue } from 'components/Select/types';

import './index.scss';

export const App = () => {
    const [value, setValue] = useState<OptionValue>(1);

    const handleChange = (newValue: OptionValue) => {
        setValue(newValue);
    };

    const [switchValue, setSwitchValue] = useState(false);

    const handleSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSwitchValue(event.target.checked);
    };

    return (
        <>
            <div
                style={{
                    width: '100px',
                    position: 'absolute',
                    top: '80px',
                    left: '70px',
                }}
            >
                <Select
                    size="medium"
                    selectedValue={value}
                    onChange={handleChange}
                    options={[
                        {
                            label: '1',
                            value: 1,
                        },
                        {
                            label: '2',
                            value: 2,
                        },
                        {
                            label: '3',
                            value: 3,
                        },
                        {
                            label: '4',
                            value: 4,
                        },
                        {
                            label: '5',
                            value: 5,
                        },
                        {
                            label: '6',
                            value: 6,
                        },
                    ]}
                />
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '140px',
                    left: '70px',
                }}
            >
                <Switch
                    value={switchValue}
                    onChange={handleSwitchChange}
                    className="toggle"
                    size="medium"
                    theme="danger"
                    label="Toggle dark theme"
                />
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '240px',
                    left: '70px',
                }}
            >
                <Input
                    theme="secondary"
                    variant="outlined"
                    error="some error"
                />
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '190px',
                    left: '70px',
                }}
            >
                <Checkbox text="Click me" />
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '320px',
                    left: '70px',
                }}
            >
                <Radio
                    options={[
                        { label: 'first', value: 0 },
                        { label: 'second', value: 1 },
                        { label: 'third', value: 2 },
                    ]}
                />
            </div>

            <div
                style={{
                    position: 'absolute',
                    top: '450px',
                    left: '70px',
                }}
            >
                <Button theme="info" loading>
                    Click me
                </Button>
            </div>
        </>
    );
};
