import { useState } from 'react';
import { Select } from 'components/Select';
import { Option, OptionValue } from 'components/Select/types';

import './index.scss';

export const App = () => {
    const [value, setValue] = useState<OptionValue>('Germany');

    const handleChange = (newValue: Option) => {
        setValue(newValue.label);
    };

    return (
        <div
            style={{
                display: 'grid',
                placeItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Select
                selectedValue={value}
                onChange={handleChange}
                type="secondary"
                size="medium"
                options={[
                    {
                        label: 'Germany',
                        value: 'germany',
                    },
                    {
                        label: 'France',
                        value: 'france',
                    },
                    {
                        label: 'Brazil',
                        value: 'brazil',
                    },
                    {
                        label: 'Spain',
                        value: 'spain',
                    },
                ]}
            />
        </div>
    );
};
