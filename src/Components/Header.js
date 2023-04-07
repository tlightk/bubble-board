import React from "react";
import Settings from "./Settings";

export default function Header(props) {
    const isEng = props.settings.language === "en";

    return (
        <div className="header">
            <div></div>
            <h1 className="title">{isEng ? "Bubble Board" : "バブルボード"}</h1>
            <Settings
                settings={props.settings}
                handleNumberOfMessages={props.handleNumberOfMessages}
                handleResetTime={props.handleResetTime}
                handleLanguage={props.handleLanguage}
                handleRestart={props.handleRestart}
            />
        </div>
    )
}