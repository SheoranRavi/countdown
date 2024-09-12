import styled from "@emotion/styled";
import { FC, useEffect, useState } from "react";

interface CountdownProps{
    targetDate: Date;
}

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }

const StyledDiv = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: '1px',
  borderRadius: '4px',
  border: '1px solid gray',
  fontSize: '12px',
});

const CountdownTimer : FC<CountdownProps> = ({targetDate}) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft(targetDate));

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTimeLeft(calculateTimeLeft(targetDate));
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, [targetDate]);
    return (
        <div style={{
          display: "flex",
          flexDirection: "row",
        }}>
          <StyledDiv>
            <div>
              {timeLeft.days}
            </div>
            <div>
              Days
            </div>
          </StyledDiv>
          <StyledDiv>
             <div>
              {timeLeft.hours}
             </div>
             <div>
              Hours
             </div>
          </StyledDiv>
          <StyledDiv>
            <div>
             {timeLeft.minutes}
            </div>
            <div>
              Minutes
            </div>
          </StyledDiv>
          <StyledDiv>
            <div>
             {timeLeft.seconds}
            </div>
            <div>
              Seconds
            </div>
          </StyledDiv>
        </div>
    )
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
    const difference = targetDate.getTime() - new Date().getTime();
  
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  
    return { days, hours, minutes, seconds };
  }

export default CountdownTimer;