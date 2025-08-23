import Footer from "../footer";
import Navbar from "../Navbar";
import HeroProducts  from "./Hero";
import LeftSection from './LeftSection' ;
import RightSection from './RightSection'
function ProductsUniverse() {
    return (

         <>
        
         <div className="product">

          
         <hr />
          <HeroProducts />
          <LeftSection />
          <RightSection />
         <hr />
      
         

         </div>
          
         
       
         </>

      );
}

export default ProductsUniverse;