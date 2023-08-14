import poto from "../public/photo/myphoto.png";
import html from "../public/photo/html.png";
import css from "../public/photo/css.png";
import js from "../public/photo/js.png";
import react from "../public/photo/R.jpg";
import next from "../public/photo/next.png";
import mongo from "../public/photo/mongo.png";

import Image from "next/image";
const m = "Mostafa lang";

export default function lang(params) {
  return (
    <div>
      <div>
        <div div className="images ">
          <div>
            <Image src={poto} data-aos="fade-right" className="m1 w-32" />
          </div>
        </div>
      </div>
      <div className="lacc">
        <div className="    ">
          <div className="mm2  text-center  " data-aos="zoom-in">
            <Image src={html} alt="" />

            <div className="mm3">
              <span>
                <h3 className=" border-b-2">html</h3>
                <p>
                  {" "}
                  HTML is the standard markup language for Web pages. With HTML
                  you can create your own Website. HTML is easy to learn - You
                  will enjoy it!
                  <br></br>
                  my level/
                </p>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar html "></div>
                </div>
              </span>
            </div>
          </div>{" "}
          <div className="mm2  text-center " data-aos="fade-right">
            <Image src={css} alt="" />
            <div className="mm3">
              <span>
                <h3 className=" border-b-2">css</h3>
                <p>
                  {" "}
                  CSS is the language we use to style an HTML document. CSS
                  describes how HTML elements should be displayed. This tutorial
                  will teach you CSS from basic to advanced.
                  <br></br>
                  my level/
                </p>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar css "></div>
                </div>
              </span>
            </div>
          </div>{" "}
          <div className="mm2  text-center  " data-aos="fade-left">
            <Image src={mongo} alt="" />
            <div className="mm3   ">
              <span>
                <h3 className=" border-b-2">mongodb</h3>
                <p>
                  {" "}
                  is a document database. It stores data in a type of JSON
                  format called BSON. If you are unfamiliar with JSON, check out
                  our JSON tutorial
                  <br></br>
                  my level/
                </p>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar html mongodb"></div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="  box2  ">
          <div className="mm2  text-center " data-aos="zoom-in">
            <Image src={js} alt="" />
            <div className="mm3">
              <span>
                <h3 className=" border-b-2">js</h3>
                <p>
                  {" "}
                  JavaScript is the Programming Language for the Web. JavaScript
                  can update and change both HTML and CSS. JavaScript can
                  calculate, manipulate and validate data.
                  <br></br>
                  my level/
                </p>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar js "></div>
                </div>
              </span>
            </div>
          </div>{" "}
          <div className="mm2  text-center " data-aos="fade-left">
            <Image src={react} alt="" />
            <div className="mm3">
              <span>
                <h3 className=" border-b-2">react.js</h3>
                <p>
                  {" "}
                  React is a JavaScript library for building user interfaces.
                  React is used to build single-page applications. React allows
                  us to create reusable UI components.
                  <br></br>
                  my level/
                </p>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar react  "></div>
                </div>
              </span>
            </div>
          </div>
          <div className="mm2 m-auto text-center    " data-aos="fade-right">
            <Image src={next} alt="" />
            <div className="mm3">
              <span>
                <h3 className=" border-b-2">next.js</h3>
                <p>
                  {" "}
                  is a React frameworkthat gives you building blocks to create
                  web applications. By framework, we mean Next.js handles the
                  tooling and configuration needed for React, and provides
                  additional structure, features, and optimizations for your
                  application
                  <br></br>
                  my level/
                </p>
                <div
                  class="progress"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div class="progress-bar next"></div>
                </div>
              </span>
            </div>
          </div>{" "}
          
        </div>
      </div>
    </div>
  );
}
