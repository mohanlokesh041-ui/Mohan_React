import Festival from "./Festival";
import Tourisum from "./Tourisum";
import kerala_image from '../assets/images/kerala.jpg'

export const Kerala = ()=>{

    return(

     <>
     <center>
     <div style={{backgroundColor:"aqua",color:"deeppink" }}>
        <h1>Welcome To Kerala</h1>
        <img src={kerala_image} alt="kerala" tyle={{width: "1480px", height:"600px", marginTop:"3px",marginBottom:"3px"}} />
        <Festival/>
        <Tourisum/>
     </div>
     </center>
     
     </>
    )
}

export default Kerala;