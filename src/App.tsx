import { useState } from 'react';
import { Select } from 'components/Select';
import { OptionValue } from 'components/Select/types';

import './index.scss';

export const App = () => {
    const [value, setValue] = useState<OptionValue>('germany');

    const handleChange = (newValue: OptionValue) => {
        setValue(newValue);
    };

    return (
        <div
            style={{
                display: 'grid',
                placeContent: 'center',
                minHeight: '100vh',
            }}
        >
            <Select
                selectedValue={value}
                onChange={handleChange}
                type="primary"
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
