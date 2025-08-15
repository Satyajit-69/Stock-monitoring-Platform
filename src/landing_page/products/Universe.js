import Footer from "../footer";
import Navbar from "../Navbar";
import HeroProducts  from "./Hero";
import LeftSection from './LeftSection' ;
import RightSection from './RightSection'
function ProductsUniverse() {
    return (

         <>

         <div className="product">

          <Navbar />
         <hr />
          <HeroProducts />
          <LeftSection />
          <RightSection />
         <hr />
         <Footer />
         

         </div>
        
         
       
         </>

      );
}

export default ProductsUniverse;