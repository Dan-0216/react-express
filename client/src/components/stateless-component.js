import React from "react";

export default (props) => {
    return (
        <div style={{ color: props.color }}>
            <span>{props.text}</span>
        </div>
    );
}
