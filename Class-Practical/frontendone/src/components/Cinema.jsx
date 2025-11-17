export const Cinema = ()=>{

    return(

        <>
        <div style={{backgroundColor:"beige", color:"black"}}>
            <h1>Cinema</h1>
            <p>Karnataka cinema, popularly known as Sandalwood, is one of India's 
                vibrant film industries known for its meaningful stories and strong 
                cultural roots. It has produced many iconic actors, creative filmmakers, 
                and trend-setting movies that earned national and international recognition.</p>
        </div>

        <LoveMovie/>
        <ActionMovie/>
        </>
    )
}

export default Cinema;

export const LoveMovie =()=>{
    return(
        <>
        <div>
            <h2 style={{backgroundColor:"pink", color:"black",padding:"20px",textAlign:"center"}}>LOVE MOVIE</h2>
            <p style={{color:"black"}}>Karnataka's love movies beautifully capture emotions, relationships, culture, and youthful romance.
These films blend heartfelt storytelling with soulful music, making them unforgettable for audiences.</p>
        </div>
        </>
    )
}
export const ActionMovie = ()=>{
    return(
        <>
        <div>
            <h2 style={{backgroundColor:"fuchsia", color:"black",padding:"20px",textAlign:"center"}}>ACTION MOVIE</h2>
            <p style={{color:"black"}}>Karnataka action movies, known for their high-energy fight sequences and 
                strong heroism, have built a unique identity in Sandalwood.
These films combine mass entertainment, emotion, and powerful storytelling that connect with audiences across India.</p>
        </div>
        </>
    )
}