import { FunctionComponent } from "react"


 
 
 type placeType = "bottom" | "top" 

 type waveProps = {
   place : placeType, 
   color : string
 }

 const Wave : FunctionComponent<waveProps> = (props) => {
    const top = <path fill={props.color} stroke="null" id="svg_1" d="m0,46.63555l48,7.77259c48,7.77259 144,23.31777 240,15.54518c96,-7.77259 192,-38.86296 288,-49.21022c96,-10.54158 192,0.14574 288,18.11985c96,17.97412 192,44.20661 288,51.83347c96,7.91833 192,-2.76899 240,-7.77259l48,-5.19792l0,-77.72592l-48,0c-48,0 -144,0 -240,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -288,0c-96,0 -192,0 -240,0l-48,0l0,46.63555z" />
    const bottom = <path fill={props.color} fill-opacity="1" d="M0,224L48,240C96,256,192,288,288,272C384,256,480,192,576,176C672,160,768,192,864,213.3C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
     
    var path = props.place === "bottom" ? bottom : top

    return (
      <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
           {path}
        </svg>
        </div>
    )

 }

 export default Wave;