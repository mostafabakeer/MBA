 
  
  import { useRouter } from 'next/router'

export default function m1() {
    const route=useRouter();
const {m}=route.query

  return (
    <>
    <h1 className=' bg-slate-300 text-center text-xl'> sory not found  </h1>
         
       
    </>
     
    
    
     
  );
}
