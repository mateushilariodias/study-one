import { useState, useEffect } from "react"

const useCountdown = (date) => {

    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);

    useEffect(() => {

        const countdown = () => {

            const countDate = new Date(date).getTime();
            const now = new Date().getTime();

            const interval = countDate - now;

            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            const dayNumber = Math.floor((interval / day));
            const hourNumber = Math.floor((interval % day) / hour);
            const minuteNumber = Math.floor((interval % hour) / minute);
            const secondNumber = Math.floor((interval % minute) / second);

            setDay(dayNumber);
            setHour(hourNumber);
            setMinute(minuteNumber);
            setSecond(secondNumber);

        }

        // iniciar o intervalo quando o componente for montado
        const intervalId = setInterval(countdown, 1000);

        // limpar o intervalo quando o componente for desmontado
        return () => clearInterval(intervalId);

    }, [date]); // dependência do useEffect é 'date'

    return [day, hour, minute, second];
}

export default useCountdown;
