import React, { useEffect, useState } from "react"
import Hours from "../images/Hours.png"
import circle from "../images/circle.png"
import second from "../images/minute.png"
import minute from "../images/minute.png"
import hour from "../images/hours-time.png"

export default function App(){
    const [date, setDate] = useState(new Date());

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    const rotateSeconds = {
        transform: `rotate(calc(6*(${seconds}deg + 30deg))`
    }
    const rotateMinutes = {
        transform: `rotate(calc(6*(${minutes}deg + 30deg))`
    };
    const rotateHours = {
        transform: `rotate(calc(30*(${hours}deg + 6deg)))`
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000);
        
        return () => {
          clearInterval(interval);
        };
    }, []);    
    return(
        <div>
            <div className="digital-watch">{date.toLocaleTimeString()}</div>
            <div className="analog-watch">
                <img className="hours" src={Hours}/>
                <img className="circle" src={circle} alt="" />
                <img className="second" src={second} style={rotateSeconds} alt="" />
                <img className="minute" src={minute} style={rotateMinutes} alt="" />
                <img className="hour" src={hour} style={rotateHours} alt="" />
            </div>
        </div>
    )
}