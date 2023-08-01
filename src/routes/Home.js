import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import homebg from "../assets/bg.jpg"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footet";

function Home () {
    return(
        <>
        <Navbar />
        <Hero 
            cName = "hero" 
            heroImg = {homebg}
            title = "Your Story Your Journey"
            text = "Choose Your Favourite Destination"
            buttonText = "Travel Plan"
            url = "/"
            btnClass = "show"
        />
        <Destination />
        <Trip />
        <Footer />
        </>
    );
}
export default Home;