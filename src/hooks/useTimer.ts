import { useEffect, useRef, useState } from 'react';

export function useTimer() {
    const [inputHours,   setInputHours]   = useState('')  
    const [inputMinutes, setInputMinutes] = useState('')
    const [inputSeconds, setInputSeconds] = useState('')

    const setHours = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setInputHours(e.target.value)
    const setMinutes = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)  => setInputMinutes(e.target.value)
    const setSeconds = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)  => setInputSeconds(e.target.value)

    return {inputHours, inputMinutes, inputSeconds, setHours, setMinutes, setSeconds}
}