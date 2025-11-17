import { Cinema } from "./Cinema";
import Traditional from "./Traditional";

export const Karnataka = ()=>{

    return(

        <>
        <center>
        <div style={{backgroundColor:"cyan", color:"red"}}>
            <h1>welcome To Karnataka</h1>
            <Cinema/>
            <Traditional/>
        </div>
        </center>
        </>
    )
}

export default Karnataka;