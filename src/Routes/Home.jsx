import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import Destination from "../Components/Destination.jsx";
import Trip from "../Components/Recenttrip.jsx";
import Footer from "../Components/Footer.jsx";

function Home()
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
           <Destination />
           <Trip />
           <Footer />

        </>
    )


}


export default Home
