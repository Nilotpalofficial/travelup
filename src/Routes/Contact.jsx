import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import Contactimg from "../assets/img5.jpg";
import Footer from "../Components/Footer.jsx";
import Contactform from "../Components/Contactform.jsx";

function Contact()
{
    return(
        <>

        <Navbar />
        <Hero
            cname="hero-abt"
            heroImg={Contactimg}
            title="Contact"
            btn="hide"
        />    
        <Contactform/>

        <Footer />       

           

        </>
    )


}

export default Contact