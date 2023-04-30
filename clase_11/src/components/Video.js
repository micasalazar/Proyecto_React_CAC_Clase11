export default function Video(props){
    return(
            <>
                <video  width={props.width} height={props.height}  src={props.src} type={props.type} controls>
              
                </video>
            </>
    )
}