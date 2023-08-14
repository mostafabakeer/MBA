import loogg from "../public/photo/Picsart_23-08-08_20-45-51-530.png";
import bgimg from "../public/photo/cardmy.jpg";
import { TypeAnimation } from "react-type-animation";
import poto from "../public/photo/myphoto.png";
import Image from "next/image";
import About from "./about";
import Cv from "../public/photo/448-252.jpeg";
import { Inter } from "next/font/google";
import M from "./m";
import Lang from "../pages/lang";
import Link from "next/link";
import Aos from "aos";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      
      <div className="body  ">
      <div className=" s m-auto text-red-700">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            " (صلى على سيد الخلق (محمد صالى الله عليه وسلم   ",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
          ]}
          wrapper="span"
          style={{ fontSize: "1em", display: "inline-block" }}
        />
      </div>
       
        </div>
        <div className="coloa    ">
          <div className="bodyy   mt-20 font-semibold   ">
            <div className="imgecont  h-52">
              <Image quality={100} src={bgimg} className="bgimg   w-full " />
              <div className=" typ float-right">
                {" "}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    " Welcome to my website ",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"

                    " My name is Moustafa Bakeer",
                    800,
                    " Website programmer fall stack",
                    2000,
                  ]}
                  wrapper="span"
                  speed={40}
                  style={{ fontSize: "1em", display: "inline-block" }}
                />
              </div>
              <Image
                src={loogg}
                className="loogg float-left   mx-auto   mb-3 "
              />
            </div>

            <div className="cont  text-center mx-auto ">
              {/* <Image src={loogg} className="loogg w-24 h-24  mx-auto   mb-3 " /> */}
              <div className="nameCont ">
                <h2
                  className=" name  justify-center mb-3 border-r-2 border-l-2  opacity-70"
                  data-aos="fade-left"
                >
                  web developar fall stake
                </h2>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    " welcom in my site ",
                    "I am Mustafa. I am very happy to have you in my position. I hope you like it. Have a nice day",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                  ]}
                  wrapper="span"
                  speed={10}
                  style={{ fontSize: "1em", display: "inline-block" }}
                  repeat={Infinity}
                />
                <p className="PName font-serif  text-sm text-cyan-200  ">
                  I am Mustafa Bakir Ali, a student at the Faculty of Law, and a
                  lover of programming, so I learned programming, or more
                  correctly, I taught myself programming and developed myself to
                  reach the goal that I set for myself, and I will reach it, God
                  willing.
                </p>
              </div>
            </div>
            <div className=" w-screen  inline-block">
              <div
                className="Cv    w-44 h-80  bg-gradient-to-t  from-orange-400  rounded-full overflow-hidden mx-auto"
                data-aos="zoom-in"
              >
                <Image
                  id="cv"
                  className="cv  w-32  h-80 mx-auto mt-4  "
                  objectFit="cover"
                  src={Cv}
                ></Image>
              </div>
            </div>
          </div>
          <style>div</style>

          <div
            data-bs-spy="scroll"
            data-bs-target="#navId"
            data-bs-smooth-scroll="true"
          >
            <div id="navId">
              <ul class="nav nav-tabs" role="tablist"></ul>
            </div>
          </div>

           
        </div>
      <div className=" ">
     
      </div>
        <div id="Abo" className="aboute">
          {/* <About></About> */}
        
    
        </div>
        <div className="footer fixed-bottom w-full h-16 B">
      <div className="bodyfot  justify-normal text-center  ">
        
         <Link className="linke  " href= "/"> Home </Link>
          
         <Link className="linke" href="lang">level </Link>
        
         <Link className="linke" href=" #Abo">Aboute </Link>
         
      

      </div>
    </div>
    </>
  );
}
