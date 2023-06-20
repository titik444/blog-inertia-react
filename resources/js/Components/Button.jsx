import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    className: PropTypes.string,
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default function Button({
    type = "submit",
    className = "",
    processing,
    children,
}) {
    return (
        <button type={type} className={`${className}`} disabled={processing}>
            {processing ? "Loading..." : children}
        </button>
    );
}
