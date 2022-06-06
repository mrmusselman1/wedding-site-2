import React, { useEffect, useState } from "react";

interface ICountdownProps {
    date: string,
    time: string,
    timezone: string,
}

const Countdown: React.FC<ICountdownProps> = ({
    date, time, timezone
}) => 
{
    const calculateTimeLeft = () => {
        let difference = +new Date(`${date} ${time} ${timezone}`) - +new Date();

        let timeString = '';
        if (difference <= 0) {
            // return "Today's the Day!"
            timeString += "Married for\n";
            difference *= -1;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);


        if (days > 0) {
            let dayLabel = days !== 1 ? 'days' : 'day';
            timeString += `${days} ${dayLabel} `;
        }
        if (hours > 0) {
            let hourLabel = hours !== 1 ? 'hours' : 'hour';
            timeString += `${hours} ${hourLabel} `;
        }
        if (minutes > 0) {
            let minuteLabel = minutes !== 1 ? 'minutes' : 'minute';
            timeString += `${minutes} ${minuteLabel} `;
        }
        if (seconds > 0) {
            let secondsLabel = seconds !== 1 ? 'seconds' : 'second';
            timeString += `${seconds} ${secondsLabel}`;
        }

        return timeString;
    }

    const [timeLeft, setTimeLeft] = useState<string>(calculateTimeLeft());
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div title={`${date} ${time} Eastern Daylight Time (${timezone})`}>
            <p>{timeLeft}</p>
        </div>
    );
};

export default Countdown;