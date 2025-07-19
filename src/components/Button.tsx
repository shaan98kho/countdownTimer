interface ButtonProps {
    fxn?: () => void,
    caption: string

}

export default function Button({fxn=()=>console.log("clicked"), caption}: ButtonProps) {
    return <button onClick={fxn}>{caption}</button>
}