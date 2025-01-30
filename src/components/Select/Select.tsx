import { FC, useEffect, useRef, useState } from 'react';
import { Option, OptionValue, SelectProps, TriggerProps } from './types';
import classNames from 'classnames';
import { Trigger } from './Trigger/Trigger';
import { OptionEl } from './Option/OptionEl';

import './Select.scss';

export const Select: FC<SelectProps> = ({
    size = 'medium',
    theme = 'secondary',
    selectedValue,
    onChange,
    options,
    disabled,
    className,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [maxHeight, setMaxHeight] = useState<number>(0);

    const expandedSectionRef = useRef<HTMLUListElement>(null);
    const selectWrapperRef = useRef<HTMLDivElement>(null);

    const [inputValue, setInputValue] = useState<string>('');

    const [innerSelectedValue, setInnerSelectedValue] = useState(selectedValue);
    const [innerOptions, setInnerOptions] = useState(options ?? []);

    const maxOptionCount = 4;

    const inputFilter = (option: Option) => {
        return inputValue !== ''
            ? option.label.toLocaleLowerCase().includes(inputValue)
            : true;
    };

    useEffect(() => {
        setInnerOptions(options);
    }, [options]);

    useEffect(() => {
        setInnerSelectedValue(selectedValue);
    }, [selectedValue]);

    useEffect(() => {
        if (innerOptions) {
            const height = expandedSectionRef.current.scrollHeight;
            const maxHeight = (height / innerOptions.length) * maxOptionCount;
            setMaxHeight(maxHeight);
        }
    }, [innerOptions]);

    const toggleExpandSelect = () => {
        if (!disabled) {
            setIsExpanded((prevState) => !prevState);
        }
    };

    const handleOptionClick = (value: OptionValue) => {
        setIsExpanded(false);

        setInnerSelectedValue(value);

        if (onChange) {
            onChange(value);
        }
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
        setInputValue,
        selectedValue: innerSelectedValue,
        options: innerOptions,
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
                {innerOptions &&
                    innerOptions
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
                        ))}
            </ul>
        </div>
    );
};
