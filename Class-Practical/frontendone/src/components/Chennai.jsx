import Navbar from "./Navbar";
import chennai_image from '../assets/images/one_chennai.png'

export const Chennai = ()=>{

    return(
        <>
        <center>
        <div style={ 
            {backgroundColor: "black", padding: "7px", color: "ghostwhite" } }>
            <h1><center>Welcome To Chennai</center></h1>
             <img src={chennai_image} alt="chennai" style={{width: "1480px", height:"600px", marginTop:"3px",marginBottom:"3px"}} />

             <Navbar/>
        </div>
        </center>
        </>
    )

}

export default Chennai;