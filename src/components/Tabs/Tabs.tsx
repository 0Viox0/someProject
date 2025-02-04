import { FC, useState } from 'react';
import { Item, TabsProps } from './types';
import TriangleArrow from 'shared/assets/icons/TriangleArrow.svg';
import classNames from 'classnames';

import './Tabs.scss';

export const Tabs: FC<TabsProps> = ({
    size = 'medium',
    theme = 'primary',
    defaultActiveKey = 1,
    items,
    className,
}) => {
    const [currentTab, setCurrentTab] = useState<Item>(
        items.find((item) => item.key === defaultActiveKey),
    );

    const handleClickLeftArrow = () => {
        let prevIndex = items.indexOf(currentTab) - 1;

        while (!items[prevIndex] || items[prevIndex].disabled) {
            if (prevIndex < 0) {
                prevIndex = items.length - 1;
                continue;
            }

            prevIndex--;
        }

        setCurrentTab(items[prevIndex]);
    };

    const handleClickRightArrow = () => {
        let nextIndex = items.indexOf(currentTab) + 1;

        while (!items[nextIndex] || items[nextIndex].disabled) {
            if (nextIndex > items.length - 1) {
                nextIndex = 0;
                continue;
            }

            nextIndex++;
        }

        setCurrentTab(items[nextIndex]);
    };

    const renderCurrentTab = () => {
        return (
            <div className={className}>
                {items.find((item) => item.key === currentTab.key).content}
            </div>
        );
    };

    const handleTabClick = (newTab: Item) => {
        setCurrentTab(newTab);
    };

    const tabClassnames = (tab: Item) => {
        return classNames('tabs-header-item', `tab-${theme}`, `tab-${size}`, {
            [`tab-${theme}-active`]: tab.key === currentTab.key,
            'tab-disabled': tab.disabled,
        });
    };

    return (
        <div className="tabs-wrapper">
            <div className="tabs-header-wrapper">
                <TriangleArrow
                    className={classNames('arrow arrow-left', `arrow-${size}`)}
                    onClick={handleClickLeftArrow}
                />
                <ul className="tabs-header">
                    {items.map((item, index) => (
                        <div
                            className={tabClassnames(item)}
                            key={index}
                            onClick={() =>
                                !item.disabled && handleTabClick(item)
                            }
                        >
                            {item.icon}
                            {item.label}
                        </div>
                    ))}
                </ul>
                <TriangleArrow
                    className={classNames('arrow arrow-right', `arrow-${size}`)}
                    onClick={handleClickRightArrow}
                />
            </div>
            <div>{renderCurrentTab()}</div>
        </div>
    );
};
