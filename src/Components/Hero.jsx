import "./Herostyles.css";

function Hero(props){
    return(
        <>
        <div className={props.cname}>
            <img width="100%" alt="HeroImage" src={props.heroImg} />
        </div>

        <div className="hero-text">
            <h1>{props.title}</h1>
            <p>{props.defin}</p>
            <a href={props.url} className={props.btn}>{props.btntext}</a>
        </div>

        </>
    )
}

export default Hero;