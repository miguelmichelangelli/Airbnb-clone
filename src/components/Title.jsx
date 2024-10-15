import React from "react";
import Info from "./Info";

export default function Title({ content }) {
    return (
        <div className="info">
            <h2 className="info--title">{content}</h2>
            <Info content='Join unique interactive activities 
            led by one-of-a-kind hosts—all without leaving home.' />
        </div>
    )
}