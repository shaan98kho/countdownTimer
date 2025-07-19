# React Countdown Timer

A simple, customizable countdown timer built with React and TypeScript.  
Allows you to enter hours, minutes, and seconds, then **start**, **pause/resume**, and **reset** the countdown.

---

## 🚀 Features

- 🕒 Input fields for hours, minutes, and seconds  
- ▶️ **Start** from the entered duration  
- ⏸️ **Pause** and **Resume** without resetting  
- 🔄 **Reset** back to zero  
- ✅ Prevents negative time  
- 📦 Built as a reusable `<Timer>` component + `useTimer` hook  

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/<your‑username>/countdownTimer.git
```
cd countdownTimer

```bash
# Install dependencies
npm install
```

🏁 Running Locally
```bash
# Start the development server
npm start
```
---

## 🔧 Usage
1. Enter the hours / minutes / seconds in the input boxes.

2. Click Start to begin the countdown.

3. Click Stop (or Pause) at any time to pause.

4. Click Start again to resume from where you left off.

5. Click Reset to clear back to 00:00:00.

---

## 🛠️ Project Structure

```bash
/src
  /components
    Timer.tsx        # timer UI + display logic
    Button.tsx       # simple button component
  /hooks
    useTimer.ts      # custom hook for managing input state
  App.tsx            # wires up timer, state & effects
  index.tsx
```

---

## 🌍 Live Site

https://countdown-timer-two-tau.vercel.app/
