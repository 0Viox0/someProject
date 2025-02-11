import { Loader } from 'components/Loader';
import { Modal } from 'components/Modal';
import { useState } from 'react';

import './index.scss';
import { Tabs } from 'components/Tabs';
import { Table } from 'components/Table';
import { TableProps } from 'components/Table/types';

export const App = () => {
    const [isOpened, setIsOpened] = useState(false);

    const handleOnOkAndCancel = () => {
        setIsOpened(false);
    };

    interface City {
        city: string;
        country: string;
        population: number;
        area: number;
        continent: string;
    }

    const columns: TableProps<City>['columns'] = [
        {
            key: 'city',
            title: 'City',
        },
        {
            key: 'country',
            title: 'Country',
        },
        {
            key: 'population',
            title: 'Population',
        },
        {
            key: 'area',
            title: 'Area (sq km)',
        },
        {
            key: 'continent',
            title: 'Continent',
        },
    ];

    const dataSource: TableProps<City>['dataSource'] = [
        {
            city: 'New York',
            country: 'USA',
            population: 8419600,
            area: 789,
            continent: 'North America',
        },
        {
            city: 'Los Angeles',
            country: 'USA',
            population: 3980400,
            area: 1302,
            continent: 'North America',
        },
        {
            city: 'Tokyo',
            country: 'Japan',
            population: 13929286,
            area: 2191,
            continent: 'Asia',
        },
        {
            city: 'Berlin',
            country: 'Germany',
            population: 3644826,
            area: 891,
            continent: 'Europe',
        },
        {
            city: 'Paris',
            country: 'France',
            population: 2148327,
            area: 105,
            continent: 'Europe',
        },
        {
            city: 'London',
            country: 'UK',
            population: 8982000,
            area: 1572,
            continent: 'Europe',
        },
        {
            city: 'Sydney',
            country: 'Australia',
            population: 5230330,
            area: 1214,
            continent: 'Australia',
        },
        {
            city: 'Melbourne',
            country: 'Australia',
            population: 5078193,
            area: 9992,
            continent: 'Australia',
        },
        {
            city: 'São Paulo',
            country: 'Brazil',
            population: 12300000,
            area: 1521,
            continent: 'South America',
        },
        {
            city: 'Rio de Janeiro',
            country: 'Brazil',
            population: 6748000,
            area: 1255,
            continent: 'South America',
        },
        {
            city: 'Mumbai',
            country: 'India',
            population: 12442373,
            area: 603,
            continent: 'Asia',
        },
        {
            city: 'Beijing',
            country: 'China',
            population: 21540000,
            area: 16410,
            continent: 'Asia',
        },
        {
            city: 'Moscow',
            country: 'Russia',
            population: 11920000,
            area: 2511,
            continent: 'Europe',
        },
        {
            city: 'Dubai',
            country: 'UAE',
            population: 3331420,
            area: 4114,
            continent: 'Asia',
        },
        {
            city: 'Hong Kong',
            country: 'China',
            population: 7496981,
            area: 1104,
            continent: 'Asia',
        },
        {
            city: 'Rome',
            country: 'Italy',
            population: 2872800,
            area: 1285,
            continent: 'Europe',
        },
        {
            city: 'Los Angeles',
            country: 'USA',
            population: 3980400,
            area: 1302,
            continent: 'North America',
        },
        {
            city: 'Singapore',
            country: 'Singapore',
            population: 5612290,
            area: 728.6,
            continent: 'Asia',
        },
        {
            city: 'Seoul',
            country: 'South Korea',
            population: 9776000,
            area: 605,
            continent: 'Asia',
        },
        {
            city: 'Lagos',
            country: 'Nigeria',
            population: 9000000,
            area: 1171,
            continent: 'Africa',
        },
        {
            city: 'Cairo',
            country: 'Egypt',
            population: 9115000,
            area: 606,
            continent: 'Africa',
        },
        {
            city: 'Buenos Aires',
            country: 'Argentina',
            population: 2890151,
            area: 203,
            continent: 'South America',
        },
        {
            city: 'Istanbul',
            country: 'Turkey',
            population: 15519267,
            area: 5461,
            continent: 'Asia/Europe',
        },
        {
            city: 'Kuala Lumpur',
            country: 'Malaysia',
            population: 1768000,
            area: 243,
            continent: 'Asia',
        },
        {
            city: 'Bangkok',
            country: 'Thailand',
            population: 8200000,
            area: 1568,
            continent: 'Asia',
        },
        // {
        //     city: 'Jakarta',
        //     country: 'Indonesia',
        //     population: 10426000,
        //     area: 662,
        //     continent: 'Asia',
        // },
        // {
        //     city: 'Chicago',
        //     country: 'USA',
        //     population: 2716000,
        //     area: 606,
        //     continent: 'North America',
        // },
        // {
        //     city: 'Cape Town',
        //     country: 'South Africa',
        //     population: 433688,
        //     area: 400,
        //     continent: 'Africa',
        // },
        // {
        //     city: 'Madrid',
        //     country: 'Spain',
        //     population: 3223334,
        //     area: 604,
        //     continent: 'Europe',
        // },
        // {
        //     city: 'Lisbon',
        //     country: 'Portugal',
        //     population: 504718,
        //     area: 100,
        //     continent: 'Europe',
        // },
    ];

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
            <div style={{ marginLeft: '40px' }}>
                <Tabs
                    items={[
                        {
                            key: 0,
                            label: 'first',
                            content: <div>hello first</div>,
                        },
                        {
                            key: 1,
                            label: 'second',
                            content: <div>hello second</div>,
                        },
                        {
                            key: 2,
                            label: 'third',
                            content: <div>hello third</div>,
                        },
                    ]}
                />
            </div>
            <Table
                pageLimit={7}
                theme="secondary"
                size="medium"
                columns={columns}
                dataSource={dataSource}
            />
        </div>
    );
};
