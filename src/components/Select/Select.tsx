import { FC, useEffect, useRef, useState } from 'react';
import { Option, OptionValue, SelectProps, TriggerProps } from './types';
import classNames from 'classnames';
import { Trigger } from './Trigger/Trigger';
import { OptionEl } from './Option/OptionEl';
import { text } from './text';

import './Select.scss';

/** Simple select component with several themes */
export const Select: FC<SelectProps> = ({
    size = 'medium',
    theme = 'secondary',
    options = [],
    selectedValue,
    onChange,
    disabled,
    className,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [maxHeight, setMaxHeight] = useState<number>(0);

    const expandedSectionRef = useRef<HTMLUListElement>(null);
    const selectWrapperRef = useRef<HTMLDivElement>(null);

    const [inputValue, setInputValue] = useState<string>('');

    const [innerSelectedValue, setInnerSelectedValue] = useState(selectedValue);

    const maxOptionCount = 4;

    const inputFilter = (option: Option) => {
        return inputValue !== ''
            ? option.label.toLocaleLowerCase().includes(inputValue)
            : true;
    };

    useEffect(() => {
        setInnerSelectedValue(selectedValue);
    }, [selectedValue]);

    useEffect(() => {
        if (options.length && isExpanded) {
            const height = expandedSectionRef.current.scrollHeight;
            const maxHeight = (height / options.length) * maxOptionCount;
            setMaxHeight(maxHeight);
        }
    }, [options.length, isExpanded]);

    const toggleExpandSelect = () => {
        if (!disabled) {
            setIsExpanded((prevState) => !prevState);
        }
    };

    const handleOptionClick = (value: OptionValue) => {
        setIsExpanded(false);

        setInnerSelectedValue(value);

        onChange?.(value);
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
            const oldHeight = expandedSectionRef.current.scrollHeight;
            expandedSectionRef.current.style.height = 'auto';
            const newHeight = expandedSectionRef.current.scrollHeight;
            expandedSectionRef.current.style.height = `${oldHeight}px`;

            if (newHeight > maxHeight) {
                expandedSectionRef.current.style.height = `${maxHeight}px`;
            } else {
                expandedSectionRef.current.style.height = `${newHeight}px`;
            }
        } else {
            expandedSectionRef.current.style.height = '0px';
        }
    }, [isExpanded, maxHeight, inputValue]);

    const triggerProps: TriggerProps = {
        inputValue,
        disabled,
        setInputValue,
        selectedValue: innerSelectedValue,
        options,
        size,
        theme,
        isExpanded,
        toggleExpandSelect,
    };

    return (
        <div
            className={classNames(
                'select-wrapper',
                `scrollBar-${theme}`,
                `select-${size}`,
                {
                    disabled: disabled,
                },
                className,
            )}
            ref={selectWrapperRef}
        >
            <Trigger {...triggerProps} />
            <ul
                className={classNames(
                    'optionsWrapper',
                    `bg-${theme}`,
                    {
                        active: isExpanded,
                    },
                    className,
                )}
                ref={expandedSectionRef}
            >
                {options.length ? (
                    options
                        .filter(inputFilter)
                        .map((option) => (
                            <OptionEl
                                selectedValue={innerSelectedValue}
                                option={option}
                                onClick={handleOptionClick}
                                key={option.value}
                                size={size}
                                theme={theme}
                            />
                        ))
                ) : (
                    <div
                        className={classNames(
                            'emptyListMessage',
                            `element-${size}`,
                        )}
                    >
                        {text.listIsEmpty}
                    </div>
                )}
            </ul>
        </div>
    );
};
