import Footer from "./Footer";
 

import Header from "./Header";
 
 
Footer
Header
 

export default function Manlayout(props) {
   return( <main className="bdy">
     <Header/>
    
      {props.children} 
       
   < div  className="foter">
 
      <Footer/>
 
   </ div >
    </main>
   )
};
