import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutbg from "../assets/night.jpg"
import Trip from "../components/Trip";
import Footer from "../components/Footet";

function Service () {
    return(
        <>
            <Navbar />
            <Hero 
                cName = "hero-mid" 
                heroImg = {aboutbg}
                title = "Service"
            />
            <Trip />
            <Footer />
        </>
    );
}
export default Service;