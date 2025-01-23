import { Tabs } from 'components/Tabs';
import TriangleIcon from 'shared/assets/icons/TriangleArrow.svg';

import './index.scss';

export const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Tabs
                items={[
                    {
                        key: 1,
                        label: 'Tab 1',
                        content: 'some content',
                    },
                    {
                        key: 2,
                        label: 'Tab 2',
                        content: 'some content in the second tab',
                    },
                    {
                        key: 3,
                        label: 'Tab 3',
                        content: 'this is third tab',
                        icon: <TriangleIcon />,
                    },
                    {
                        key: 4,
                        label: 'Tab 4',
                        content: (
                            <div>
                                <h1>some content</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    <br />
                                    adipisicing elit. Ratione numquam quisquam
                                    <br />
                                    ut voluptatem harum eveniet nulla aliquid?
                                    <br />
                                    Ea voluptatum soluta illo ipsum saepe
                                    <br />
                                    mollitia hic, vitae qui, praesentium aperiam
                                    ducimus?
                                </p>
                            </div>
                        ),
                    },
                ]}
                defaultActiveKey={1}
                size="medium"
                type="info"
            />
        </div>
    );
};
