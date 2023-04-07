import React from "react"
import { useIsOverflow } from './useIsOverflow';
import { CSSTransition } from "react-transition-group";

export default function Bubble(props) {
    const bubbleData = props.bubbleContent;
    const isEng = props.settings.language === "en";
    const styles = {
        backgroundColor: bubbleData.color,
        placeSelf: bubbleData.position,
        gridRow: bubbleData.row + 1,
        gridColumn: bubbleData.col + 1
    }

    // display in bottom-right corner for overflowing text
    const ellipsis = <div className="overflow-ellipsis">
        ...
    </div>

    // check for overflow
    const ref = React.useRef();
    const isOverflow = useIsOverflow(ref);

    function handleBubbleClick() {
        props.getSingleBubbleData(props.id)
        props.handleSingleBubbleView();
    }

    return (
        <CSSTransition
            in={props.showBubbles}
            appear={true}
            timeout={3000}
            classNames="fade"
            unmountOnExit
        >
            <div className="bubble" style={styles} onClick={handleBubbleClick} >
                <div className="bubble-top">
                    <img src={bubbleData.ImageURL} className="bubble-img" alt="bubble's card" />
                    <div className="bubble-info">
                        <p className="bubble-points">{bubbleData.Amount} {isEng ? "points" : "ポイント"}!</p>
                        <p className="bubble-time">{isEng ? bubbleData.sentTime : bubbleData.送信日時}</p>
                    </div>
                </div>
                <div className="bubble-bottom" ref={ref}>
                    {isOverflow && ellipsis}
                    <div className="message-wrapper">
                        <p className="bubble-message">{bubbleData.Message}</p>
                    </div>
                </div>
            </div>
        </CSSTransition>

    )
}