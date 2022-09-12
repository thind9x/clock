import React, { FunctionComponent, useEffect, useState } from "react";
import styles from "./DigistalClock.module.scss";
interface OwnProps {}

type Props = OwnProps;

const DigistalClock: FunctionComponent<Props> = (props) => {
  const [time, setTime] = useState("");

  const getTime = () => {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    return {
      hour,
      minute,
      second,
    };
  };
  const getClock = () => {
    var time = `${getTime()?.hour}:${getTime()?.minute.toString().padStart(2, '0')} :${getTime().second.toString().padStart(2, '0')}`
    // console.log(time)
    setTime(time);
  };
  useEffect(() => {

    const timerId = setInterval(getClock, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex" }}>
          <h1 className={styles.textClock} >
            {time}
          </h1>
        </div>
      </div>
    </>
  );
};

export default DigistalClock;
