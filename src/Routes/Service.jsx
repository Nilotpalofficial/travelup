import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import Serviceimg from "../assets/img4.jpg";
import Footer from "../Components/Footer.jsx";
import Trip from "../Components/Recenttrip.jsx";

function Service()
{
    return(
        <>
        <Navbar />
        <Hero
            cname="hero-abt"
            heroImg={Serviceimg}
            title="Service"
            btn="hide"
        />      
        <Trip/>     

           <Footer />

        </>
    )


}

export default Service