import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import Aboutimg from "../assets/img3.jpg";
import Footer from "../Components/Footer.jsx";
import AboutUs from "../Components/Aboutdesc.jsx";

function About()
{
    return(
        <>
        <Navbar />
        <Hero
            cname="hero-abt"
            heroImg={Aboutimg}
            title="About"
            btn="hide"
        />   
        <AboutUs/>
        <Footer/>        

        </>
    )


}

export default About