
interface ButtonProps {
    changeLabel:() => void;
    children?:any;
}

const MyButton:React.FC<ButtonProps> = ({changeLabel,children}) => {
    return <><button onClick={changeLabel}>{children}</button></>
}

export default MyButton;