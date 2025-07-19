import { useTimer } from "../hooks/useTimer"

type CDTimer = ReturnType<typeof useTimer>

interface TimerProps {
    cdTimer: CDTimer,
    timeLeft: number,
    isCountingDown: Boolean
}

export default function Timer({cdTimer, timeLeft, isCountingDown}: TimerProps) {
    const hoursLeft   = String(Math.floor(timeLeft / 3600)).padStart(2, '0')
    const minutesLeft = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0')
    const secondsLeft = String(timeLeft % 60).padStart(2, '0')

    // console.log(timeLeft)
    return <div className="timer">
        <div className="hours">
            <input 
                type="number"
                value={cdTimer.inputHours}
                onChange={cdTimer.setHours}
                placeholder="Hours"
                disabled={timeLeft>0}
            />
            <h1>{timeLeft>0 ? hoursLeft : cdTimer.inputHours || "00"}</h1>
            <span>hours</span>
        </div>
        <div className="minutes">
            <input 
                type="number"
                value={cdTimer.inputMinutes}
                onChange={cdTimer.setMinutes}
                placeholder="Minutes"
                disabled={timeLeft>0}
            />
            <h1>{timeLeft > 0 ? minutesLeft : cdTimer.inputMinutes || "00"}</h1>
            <span>minutes</span>
        </div>
        <div className="seconds">
            <input 
                type="number"
                value={cdTimer.inputSeconds}
                onChange={cdTimer.setSeconds}
                placeholder="Seconds"
                disabled={timeLeft>0}
            />
            <h1>{timeLeft > 0 ? secondsLeft : cdTimer.inputSeconds || "00"}</h1>
            <span>seconds</span>
        </div>
    </div>
}