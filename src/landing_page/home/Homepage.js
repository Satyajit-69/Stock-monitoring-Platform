import Navbar from "../Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Awards from "./Awards";
import OpenAccount from "../OpenAccount";
import Footer from "../footer";
// Import the image from the assets folder
import logo from "../assets/console.png"
import Education from "./Education";
import Pricing from "./Pricing";

//this is a wrapper class for the home section 

function HomePage() {
    return ( 
        <>
      
            {/* <Navbar /> */}
            
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
      
        </>
     );
}

export default HomePage;