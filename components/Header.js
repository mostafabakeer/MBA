 
import Link from "next/link"
  
 
 
 
 
  
  
export default function Header(params) {
 
    return(
       
     <>
      
     
        <nav class="navbar navbar-black w-full  ">
          <div class="container-fluid w-full">
            <Link class="navbar-brand" href="/"> <span className="m" >M</span>uostaf <span className="m">B</span>akeer</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel ">
              <div class="offcanvas-header ">
                <Link href="/" class="offcanvas-title" id="offcanvasNavbarLabel"> <span className="m">M</span>uostaf <span className="m">B</span>akeer</Link>
                <button type="button" class="btn-close   text-center  tex bg-white " data-bs-dismiss="offcanvas" aria-label="Close">X</button>
              </div>
              <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" href="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" href="lang">level</Link>
                  </li>
                  <li class="nav-item dropdown">
                     
                   
                       
                      <Link class="nav-link" href="about">Aboute</Link>
                    
                  </li>
                </ul>
                
              </div>
            </div>
          </div>
        </nav>    
     
     </>
    )
};
