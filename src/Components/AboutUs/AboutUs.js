import React from "react";
import "./AboutUs.css";
import ContactUs from "./ContactUs";
 
function AboutUs() {
   return(
      <div className='aboutUs'>   
         <div>
            <h1 align="center">About Us</h1>
         </div>

         <div className="para1">
            <p> We strive to offer our customers the lowest possible prices, the best available selection, and the utmost convenience.</p>
         </div>

         <div className="who">
            <h2 align="center">Who We Are</h2> 
               <p id="para2">
                  Our mission is to be Earth’s most customer-centric company. Amazon is guided by 
                  four principles: customer obsession rather than competitor focus, passion for invention, 
                  commitment to operational excellence, and long-term thinking. Customer reviews, 1-Click shopping, 
                  personalized recommendations, Prime, Fulfillment by Amazon, AWS, Kindle Direct Publishing, Kindle, Fire tablets, 
                  Fire TV, Amazon Echo, and Alexa are some of the products and services pioneered by Amazon.
               </p>
         </div>

         <div className="contact text-center">
            <h3 align="center" className='mb-4'>Contact Us</h3>
            <ContactUs />
         </div>          
      </div>
   ); 
}
   
export default AboutUs;