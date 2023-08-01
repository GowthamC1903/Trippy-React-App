import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import contactbg from "../assets/4.jpg"
import Footer from "../components/Footet";
import ContactForm from "../components/ContactForm";

function Contact () {
    return(
        <>
            <Navbar />
            <Hero 
                cName = "hero-mid" 
                heroImg = {contactbg}
                title = "Contact"
            />
            <ContactForm />
            <Footer />
        </>
    );
}
export default Contact;