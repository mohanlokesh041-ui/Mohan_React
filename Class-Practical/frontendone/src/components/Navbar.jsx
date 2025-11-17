import It_companies from "./It_companies";

export const Navbar = ()=>{

    return(
        <>
        <header>
        <nav style={{backgroundColor:"grey", color:"white", display:"flex", padding:"20px", margin:"10px", justifyContent:"center", alignItems:"center"}}>
           <It_companies/>
        </nav>
        </header>
        </>
    )

}


export default Navbar;