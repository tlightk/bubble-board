import React from "react"
import { useState } from "react";
import Bubble from "./Bubble"
import SingleBubbleModal from "./SingleBubbleModal";

export default function BubbleBoard(props) {
    const allBubblesContent = props.bubblesData;
    const [singleViewActive, setSingleViewActive] = useState(false);
    const [singleBubbleData, setSingleBubbleData] = useState({});

    const createBubbles = allBubblesContent.map(bubble => {
        return <Bubble
            bubbleContent={bubble}
            key={bubble.id}
            id={bubble.id}
            showBubbles={props.showBubbles}
            settings={props.settings}
            handleSingleBubbleView={handleSingleBubbleView}
            getSingleBubbleData={getSingleBubbleData}
        />
    })

    // pass the id as argument
    function handleSingleBubbleView() {
        setSingleViewActive(prevValue => !prevValue);
    }

    function getSingleBubbleData(id) {
        let singleBubbleData;

        for (let i = 0; i < allBubblesContent.length; i++) {
            if (id === allBubblesContent[i].id) {
                singleBubbleData = allBubblesContent[i];
            }
        }

        setSingleBubbleData(singleBubbleData);
    }

    return (
        <div className="bubble-board">
            <SingleBubbleModal
                singleViewActive={singleViewActive}
                handleSingleBubbleView={handleSingleBubbleView}
                singleBubbleData={singleBubbleData}
                settings={props.settings}
            />
            {createBubbles}
        </div>
    )
}