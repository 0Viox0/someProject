import { FC, useEffect, useRef, useState } from 'react';
import { DropdownProps, Option, SelectProps, TriggerProps } from './types';
import classNames from 'classnames';
import { Dropdown } from './Dropdown/Dropdown';
import { Trigger } from './Trigger/Trigger';

import './Select.scss';

export const Select: FC<SelectProps> = ({
    selectedValue,
    onChange,
    options,
    size = 'medium',
    theme = 'secondary',
    disabled = false,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const expandedSectionRef = useRef<HTMLDivElement>(null);
    const selectWrapperRef = useRef<HTMLDivElement>(null);

    const toggleExpandSelect = () => {
        if (!disabled) {
            setIsExpanded((prevState) => !prevState);
        }
    };

    const handleOptionClick = (option: Option) => {
        setIsExpanded(false);
        onChange(option);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (!selectWrapperRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
            }
        };

        window.addEventListener('click', handleOutsideClick);

        return () => {
            window.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        if (isExpanded) {
            expandedSectionRef.current.style.height = `${expandedSectionRef.current.scrollHeight}px`;
        } else {
            expandedSectionRef.current.style.height = '0px';
        }
    }, [isExpanded]);

    const dropdownProps: DropdownProps = {
        selectedValue,
        options,
        size,
        theme: theme,
        isExpanded,
        expandedSectionRef,
        handleOptionClick,
    };

    const triggerProps: TriggerProps = {
        selectedValue,
        size,
        theme,
        isExpanded,
        toggleExpandSelect,
    };

    return (
        <div
            className={classNames('select-wrapper', `select-${size}`, {
                disabled: disabled,
            })}
            ref={selectWrapperRef}
        >
            <Trigger {...triggerProps} />
            <Dropdown {...dropdownProps} />
        </div>
    );
};
