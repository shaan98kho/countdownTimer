import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import Button from './components/Button';
import { useTimer } from './hooks/useTimer';

function App() {
	const countDownTimer = useTimer()
	const [timeLeft, setTimeLeft] = useState<number>(0)
	const [isCountingDown, setIsCountingDown] = useState<Boolean>(false)
	const intervalRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		if(isCountingDown) {
			intervalRef.current = setInterval(() => {
				setTimeLeft(prev => {
					if(prev <= 1 && intervalRef.current) {
						clearInterval(intervalRef.current)
						setIsCountingDown(false)
						return 0
					}

					return prev - 1
				})
			}, 1000)
		}

		return () => {
			if(intervalRef.current) {
				clearInterval(intervalRef.current)
			}
		}

	}, [isCountingDown])

	const startCountdown = ():void => {
		if(timeLeft === 0) {
			const h = Number(countDownTimer.inputHours)
			const m = Number(countDownTimer.inputMinutes)
			const s = Number(countDownTimer.inputSeconds)
			setTimeLeft((h * 3600) + (m * 60) + s)
		}
		setIsCountingDown(true)
	}

	const stopCountdown = ():void => {
		setIsCountingDown(false)
	}

	const resetCountdown = ():void => {
		setIsCountingDown(false)
		setTimeLeft(0)
	}

	return (<div>
			<Timer cdTimer={countDownTimer} timeLeft={timeLeft} isCountingDown={isCountingDown}/>
			<div className='btn-wrap'>
				<Button 
					fxn={isCountingDown ? stopCountdown : startCountdown}
					caption={`${isCountingDown ? "Stop" : "Start!"}`}
				/>
				<Button 
					fxn={resetCountdown}
					caption='Reset'
				/>
			</div>
		</div>    
	);
}

export default App;
