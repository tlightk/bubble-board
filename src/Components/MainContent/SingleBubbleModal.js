import React from "react"
import { CSSTransition } from "react-transition-group";

export default function SingleBubbleModal(props) {
    // closes (unmounts) single bubble view
    if (!props.singleViewActive) {
        return null;
    }

    const bubbleData = props.singleBubbleData;
    const isEng = props.settings.language === "en";
    const styles = {
        backgroundColor: bubbleData.color,
    }

    return (
        <div className="modal-background" onClick={props.handleSingleBubbleView}>
            <CSSTransition
                in={props.singleViewActive}
                appear={true}
                timeout={1000}
                classNames="single-bubble-fade"
                unmountOnExit
            >

                <div className="single-bubble-modal" style={styles} onClick={e => e.stopPropagation()}>
                    <img src={bubbleData.ImageURL} className="single-bubble-img" alt="bubble's card" />
                    <div className="single-bubble-info">
                        <p className="single-bubble-points">{bubbleData.Amount} {isEng ? "points" : "ポイント"}!</p>
                        <p className="single-bubble-time">{isEng ? bubbleData.sentTime : bubbleData.送信日時}</p>
                    </div>
                    <div className="single-bubble-bottom">
                        <p className="single-bubble-message">{bubbleData.Message}</p>
                    </div>
                    <button className="single-bubble-close" onClick={props.handleSingleBubbleView}>{isEng ? "Close" : "閉じる"}</button>
                </div>

            </CSSTransition >
        </div>

    )
}

