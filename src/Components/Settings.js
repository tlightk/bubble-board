import React from 'react';
import Popup from 'reactjs-popup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function Settings(props) {
    const isEng = props.settings.language === "en";

    function handleMessagesSetting(event) {
        const { value } = event.target;
        props.handleNumberOfMessages(value);
    }

    function handleTimeSetting(event) {
        const { value } = event.target;
        props.handleResetTime(value);
    }

    function handleLanguageSetting(event) {
        const { value } = event.target;
        props.handleLanguage(value);
    }

    return (
        <Popup
            trigger={<button className="settings-button">{<FontAwesomeIcon icon={faGear} />}</button>}
            closeOnDocumentClick
            modal
        >
            {close => (
                <div className="modal-wrapper" onClick={close}>
                    <div className="settings-modal" onClick={e => e.stopPropagation()}>
                        <button className="settings-close" onClick={close}>
                            &times;
                        </button>
                        <div className="settings-header">{isEng ? "Settings" : "設定"}</div>
                        <div className="settings-content">
                            <div className="setting-container-display">
                                <h2 className="setting-text">{isEng ? "Messages to Display" : "表示するメッセージ"}</h2>
                                <p className="messages-number">{props.settings.numOfMessages}</p>
                            </div>
                            <input className="messages-slider" type="range" min="1" max="21" value={props.settings.numOfMessages} onChange={handleMessagesSetting} />

                            <div className="setting-container">
                                <h2 className="setting-text">{isEng ? "Reset Time" : "リセット時間"}</h2>
                                <form>
                                    <select
                                        id="timeSetting"
                                        name="timeSetting"
                                        value={props.settings.resetTime}
                                        onChange={handleTimeSetting}
                                        className="time-select"
                                    >
                                        <option value="5000">5{isEng ? " seconds" : "秒"}</option>
                                        <option value="10000">10{isEng ? " seconds" : "秒"}</option>
                                        <option value="60000">1{isEng ? " minute" : "分"}</option>
                                        <option value="180000">3{isEng ? " minutes" : "分"}</option>
                                        <option value="300000">5{isEng ? " minutes" : "分"}</option>
                                        <option value="600000">10{isEng ? " minutes" : "分"}</option>
                                        <option value="900000">15{isEng ? " minutes" : "分"}</option>
                                        <option value="1800000">30{isEng ? " minutes" : "分"}</option>
                                        <option value="3600000">1{isEng ? " hour" : "時間"}</option>
                                    </select>
                                </form>
                            </div>
                            <div className="setting-container">
                                <h2 className="setting-text">{isEng ? "Language" : "言語"}</h2>
                                <form>
                                    <input type="radio" className="radio-lang" value="en" id="en" name="language" onChange={handleLanguageSetting} checked={props.settings.language === "en"} />
                                    <label htmlFor="en" className="radio-label">English</label>
                                    <input type="radio" className="radio-lang" value="ja" id="ja" name="language" onChange={handleLanguageSetting} checked={props.settings.language === "ja"} />
                                    <label htmlFor="ja" className="radio-label-jp">日本語</label>
                                </form>
                            </div>
                        </div>
                        <button className="apply-btn" onClick={props.handleRestart}>{isEng ? "Restart" : "リスタート"}</button>
                    </div>
                </div>

            )}
        </Popup>
    )
}