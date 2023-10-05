import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import SignupForm from "../Components/Forms/Signupform.jsx";
import Footer from "../Components/Footer.jsx";

function Signup()
{
    return(
        <>
        <Navbar />
        <Hero
            cname="hero"
            heroImg="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D&w=1000&q=80"
            title="Your Journey Your Story"
            defin="Choose Your Next Destination."
            btntext="Plan Your Travel"
            url="/"
            btn="show"
        />
        <SignupForm/>
           <Footer />

        </>
    )


}


export default Signup