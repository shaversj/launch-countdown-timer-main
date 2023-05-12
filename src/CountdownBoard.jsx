import React, {useEffect, useState} from 'react';
import CountdownCard from "./CountdownCard.jsx";

function CountdownBoard() {
    function calculate_time() {
        let dateFuture = new Date(new Date().getFullYear() + 1, 0, 1);
        let dateNow = new Date();

        let seconds = Math.floor((dateFuture - (dateNow)) / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

        let timeLeft = {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        }

        return timeLeft
    }

    const [timeleft, setTimeleft] = useState(calculate_time())

    useEffect(() => {
        setInterval(() => {
            setTimeleft(calculate_time())
        }, 1000)
    })
    return (
        <>
            <div className={"flex items-center justify-center lg:gap-8 sm:gap-4"}>
                <CountdownCard number={timeleft.days} position={"DAYS"}/>
                <CountdownCard number={timeleft.hours} position={"HOURS"}/>
                <CountdownCard number={timeleft.minutes} position={"MINUTES"}/>
                <CountdownCard number={timeleft.seconds} position={"SECONDS"}/>
            </div>
        </>
    );
}

export default CountdownBoard;