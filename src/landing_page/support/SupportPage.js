import Footer from "../footer";
import Navbar from "../Navbar";
import SupportHero from "./Hero";
import TicketSection from "./Ticket";


function SupportPage() {
    return (
        <>
            <Navbar />
            <hr />
               <SupportHero />
              <TicketSection />



            <hr />
            <Footer />
        </>
    );
}

export default SupportPage;