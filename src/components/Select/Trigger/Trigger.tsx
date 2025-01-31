import classNames from 'classnames';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import ExpandArrowIcon from 'shared/assets/icons/ExpandArrow.svg';
import { TriggerProps } from '../types';

import './Trigger.scss';

export const Trigger: FC<TriggerProps> = ({
    inputValue,
    setInputValue,
    theme,
    size,
    toggleExpandSelect,
    isExpanded,
    selectedValue,
    options,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const toggleExpandSelectInner = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }

        toggleExpandSelect();
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleFocus = () => {
        setIsFocused(true);
        setInputValue('');
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const getValue = () => {
        if (isFocused) return inputValue;

        const currentOption = options
            ? options.find((option) => option.value === selectedValue)
            : undefined;

        if (!currentOption) return '';

        return currentOption.label;
    };

    const getCurrentPlaceholder = () => {
        const currentOption = options
            ? options.find((option) => option.value === selectedValue)
            : undefined;

        if (!currentOption) return 'Search to choose';

        return currentOption.label;
    };

    useEffect(() => {
        if (!isExpanded && inputRef.current) {
            inputRef.current.blur();
        }
    }, [isExpanded]);

    return (
        <div
            className={classNames(
                'chooseFiled',
                `bg-${theme}`,
                `border-${theme}`,
            )}
            onClick={toggleExpandSelectInner}
        >
            <input
                className={classNames(
                    'input',
                    `placeholder-${theme}`,
                    `element-${size}`,
                )}
                value={getValue()}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={getCurrentPlaceholder()}
                ref={inputRef}
            />
            <ExpandArrowIcon
                className={classNames('icon', {
                    'icon-expanded': isExpanded,
                    'icon-closed': !isExpanded,
                })}
            />
        </div>
    );
};
