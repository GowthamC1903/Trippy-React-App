import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import aboutbg from "../assets/night.jpg"
import Footer from "../components/Footet";
import AboutUs from "../components/AboutUs";


function About () {
    return(
        <>
            <Navbar />
            <Hero 
                cName = "hero-mid" 
                heroImg = {aboutbg}
                title = "About"
            />
            <AboutUs />
            <Footer />
        </>
    );
}
export default About;