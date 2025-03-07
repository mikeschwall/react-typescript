interface ButtonProps {
    children:string;
    changeHeader:() => void;
}

const MyButton:React.FC<ButtonProps> = ({children,changeHeader}) => {
    return <><button onClick={changeHeader}>{children}</button></>
}

export default MyButton;