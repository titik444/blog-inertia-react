import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

Textarea.propTypes = {
    name: PropTypes.string,
    rows: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    required: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool,
};

export default function Textarea({
    name,
    rows,
    value,
    defaultValue,
    className,
    required,
    isFocused,
    handleChange,
    placeholder,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <textarea
            name={name}
            rows={rows}
            value={value}
            defaultValue={defaultValue}
            className={`${className}`}
            ref={input}
            required={required}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
        />
    );
}
