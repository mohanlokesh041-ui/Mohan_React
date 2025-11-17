import { Cinema } from "./Cinema";
import Traditional from "./Traditional";
import karnataka_image from '../assets/images/karnataka.png' 

export const Karnataka = ()=>{

    return(

        <>
        <center>
        <div style={{backgroundColor:"cyan", color:"red"}}>
            <h1>welcome To Karnataka</h1>
            <img src={karnataka_image} alt="karnataka" style={{width: "1480px", height:"600px", marginTop:"3px",marginBottom:"3px"}} />
            <Cinema/>
            <Traditional/>
        </div>
        </center>
        </>
    )
}

export default Karnataka;