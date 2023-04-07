import React, { useState, useEffect } from "react";
import './App.css';
import BubbleBackground from "./Components/BubbleBackground";
import Header from "./Components/Header";
import BubbleBoard from "./Components/MainContent/BubbleBoard"
import generateRandomLocation from "./utils/generator/generateRandomLocation";
import generateCellPosition from "./utils/generator/generateCellPosition";
import generateBubbleColor from "./utils/generator/generateBubbleColor";
import generateId from "./utils/generator/generateId";
import { dummyData } from "./dummyData";

const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')
require('dayjs/locale/ja')
dayjs().format()
dayjs.extend(relativeTime)

export default function App() {
  const [bubbleData, setBubbleData] = useState([]);
  const [showBubbles, setShowBubbles] = useState(true);
  const [trigger, setTrigger] = useState(0);
  const [settings, setSettings] = useState({
    numOfMessages: 15,
    resetTime: 10000,
    language: "ja"
  });


  useEffect(() => {
    // convertTimeLanguage()
  }, [settings])

  // reset affected by handleRestart
  useEffect(() => {
    const timer = setTimeout(() => {
      setBubbleData([]);
      getData();
    }, 2000);
    return () => clearTimeout(timer);
  }, [trigger])

  // re-render the board after a set amount of time (based on resetTime)
  useEffect(() => {
    const resetTimer = setTimeout(() => {
      handleRestart();
    }, settings.resetTime);
    return () => clearTimeout(resetTimer);
  }, [trigger])

  // dummy data version since db is now offline
  function getData() {
    const items = dummyData.slice(0, settings.numOfMessages);
    convertTime(items);
    const newItems = generateId(generateBubbleColor(generateCellPosition(generateRandomLocation(convertTime(items)))))
    setBubbleData(newItems)
    setShowBubbles(true);
  }

  // converts send time to human-readable format on fetch
  function convertTime(arr) {
    const newBubbleData = arr.map(bubble => {
      dayjs.locale("en");
      const sentTime = dayjs(bubble.送信日時).fromNow();
      dayjs.locale("ja");
      return { ...bubble, 送信日時: dayjs(bubble.送信日時).fromNow(), sentTime: sentTime }
    })
    return newBubbleData;
  }

  function handleRestart() {
    setShowBubbles(false);
    setTrigger(prevValue => prevValue + 1);
  }

  function handleNumberOfMessages(num) {
    setSettings(prevSetting => {
      return { ...prevSetting, numOfMessages: num };
    })
  }

  function handleResetTime(time) {
    setSettings(prevSetting => {
      return { ...prevSetting, resetTime: time };
    })
  }

  function handleLanguage(lang) {
    setSettings(prevSetting => {
      return { ...prevSetting, language: lang }
    })
  }

  return (
    <div className="app">
      <BubbleBackground />
      <Header
        settings={settings}
        handleNumberOfMessages={handleNumberOfMessages}
        handleResetTime={handleResetTime}
        handleLanguage={handleLanguage}
        handleRestart={handleRestart}
      />
      <BubbleBoard bubblesData={bubbleData} settings={settings} showBubbles={showBubbles} />
    </div>
  );
}