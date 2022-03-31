import FlipCountdown from "@rumess/react-flip-countdown";
import { Bounce } from "react-reveal";
import "./timer.css";

function Counter() {
  return (
    <div className="timer">
      <Bounce bottom>
        <h2>Time Remaining</h2>
        <div className="counter">
          <FlipCountdown
            className="timer-item"
            titlePosition="bottom"
            size={"big"}
            theme="dark"
            hideMonth
            hideYear
            dayTitle="Days"
            hourTitle="Hours"
            minuteTitle="Minutes"
            secondTitle="Seconds"
            endAt={"2022-04-21 9:00:00"}
          />
        </div>
      </Bounce>
    </div>
  );
}

export default Counter;
