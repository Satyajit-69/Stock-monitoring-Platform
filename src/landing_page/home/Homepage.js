
import Navbar from "../Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Awards from "./Awards";
import OpenAccount from "../OpenAccount";
import Footer from "../footer";

//this is a wrapper class for the home section 


function HomePage() {
    return ( 
        <>
        <div className="home">
        <Navbar />
        <Hero />
        <Awards />
        <Stats />
        <OpenAccount />
        <Footer />


        </div>
     
        </>
     );
}

export default HomePage;