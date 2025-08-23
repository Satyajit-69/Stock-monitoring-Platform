import Hero from "../about/Hero";
import TeamSection from "../about/Team" ;
import Footer from "../footer";
import Navbar from "../Navbar";
function AboutPage() {
    return ( 

      <>
    
      <div className="about">
        
          <hr />
          <h2>This is the about page </h2>
          <Hero />
          <TeamSection />
          <hr />
        

      </div>
      
      </>
     );

     

}

export default AboutPage;