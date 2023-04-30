export default function Card(props){
    return(
        <>
        <span>
            Esto es un Spanssss {props.text}
        </span>
        {props.children}
        </>
    )
}