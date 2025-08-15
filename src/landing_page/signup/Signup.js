import Footer from "../footer";
import Navbar from "../Navbar";

    

function SignUp() {
    return (  
     <>
       <Navbar />
       <hr />
       <p>this is the signup page</p>
       <form action="">
        <input type="text"  placeholder="enter ur name"/>
        <br />
        <br />
        <textarea name="" id="">write ur address</textarea>
        <br />
        <button>submit</button>
       </form>
       <hr />
       <Footer />
     </>
   
    
    );
}

export default SignUp;