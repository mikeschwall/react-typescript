interface ButtonProps {
    children:string;
    changeLabel: () => void;
}

const MyButton:React.FC<ButtonProps> = ({children,changeLabel}) => {
    return <>
        <button onClick={changeLabel}>{children}</button>
    </>
}

export default MyButton;