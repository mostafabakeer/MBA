import { Unbounded } from "next/font/google";
import  face from '../public/photo/face.jpg';
import In from '../public/photo/in.jpg';
import git from '../public/photo/git.jpg';
import Whate from '../public/photo/whatsap.jpg';
 import Image from "next/image";
import my1 from '../public/photo/mostafa.jpg';
import my2 from '../public/photo/cardmy.jpg';
import my3 from '../public/photo/my3.jpg';
import Link from "next/link";

export default function about(params) {
return(<div   className="bodyA">
       <div className="slid  ">
           <div id="carouselId" class="carousel slide   " data-bs-ride="carousel">
               <ol class="carousel-indicators">
                   <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                   <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                   <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
               </ol>
             
                 <div class="carousel-inner  mm" role="listbox" data-aos="fade-left">
                     <div class="carousel-item active">d
                         <Image src= {my3} class=" d-block h-52 m" alt="First slide"/>
                         <div class="carousel-caption d-none d-md-block">
                             
                         </div>
                     </div>
                     <div class="carousel-item">
                         <Image src= {my2} class="  d-block h-52 m" alt="Second slide"/>
                         <div class="carousel-caption d-none d-md-block">
                            
                         </div>
                     </div>
                     <div class="carousel-item">
                         <Image src={my1} class="  d-block h-52 m rounded-full" alt="Third slide"/>
                         <div class="carousel-caption d-none d-md-block">
                             
                         </div>
                     </div>
                     <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                   <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                   <span class="carousel-control-next-icon" aria-hidden="true"></span>
                   <span class="visually-hidden">Next</span>
               </button>
                 </div>
             
            
           </div>
       </div>
       <div className=" ">
           
           <div className="form   "> 
            
           <input type="email" placeholder="name@example.com" class="in1 first-letter:  bg-transparent w-full text-center" data-aos="fade-right"/>
           <input type=" text" placeholder=" your name " class=" in2 bg-transparent w-full text-center"data-aos="fade-left" />
           <input type="email" placeholder=" message for my" class="in3 bg-transparent w-full text-center " data-aos="zoom-in"/>
           <div className="  button">
               <button className=" bg-slate-50 rounded-full"   >send message</button>
           </div>
           
           </div>
       </div>
       <div className="img w-full"
       >
           <Link href="https://www.facebook.com/"><Image className="im im1" src={face}/></Link>
           <Link href="https://github.com/mostafabakeer"><Image className="im im2" src={git}/></Link>
           <Link href=""><Image className="im im3" src={Whate}/></Link>
           <Link href="https://www.linkedin.com/in/mostafa-bakeer-ali-51b819236/"><Image className="im im4" src={In}/></Link>
           <button type=" number" className=" bg-slate-500 rounded-full " > 01068633486</button>
       </div>
         
         
       
       












</div>)
};
