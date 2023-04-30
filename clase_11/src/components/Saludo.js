import Card from "./Card"
import Video from "./Video"


export default function Saludo(props){
    return(
        <div>
            <h2>
                {props.texto}
                <br></br>
                {props.children}
            </h2>
            <Card >
                <br></br>
                {props.children}
            </Card>
      

        </div>
    )
}