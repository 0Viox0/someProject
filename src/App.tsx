import { useState } from 'react';
import { Radio } from 'components/Radio';
import { RadioElement } from 'components/Radio/types';

import './index.scss';

export const App = () => {
    const [value, setValue] = useState<RadioElement>({
        value: 1,
        label: 'Town',
    });

    const handleChange = (newValue: RadioElement) => {
        setValue(newValue);
        console.log(newValue.value);
    };

    return (
        <div
            style={{
                display: 'grid',
                placeContent: 'center',
                minHeight: '100vh',
            }}
        >
            <Radio
                currentChoice={value}
                options={[
                    {
                        value: 1,
                        label: 'Town',
                    },
                    {
                        value: 2,
                        label: 'City',
                    },
                    {
                        value: 3,
                        label: 'Village',
                    },
                    {
                        value: 4,
                        label: 'House',
                    },
                ]}
                onChange={handleChange}
                type="danger"
                size="small"
                direction="row"
            />
        </div>
    );
};
