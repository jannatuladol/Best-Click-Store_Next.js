import Link from 'next/link';
import dynamic from 'next/dynamic';


const Layout =dynamic(()=>import('./Layout/layout'),{
 ssr:false,
})

const Title =dynamic(()=>import('./Layout/title'),{
  ssr:false,
 })

 
export default function Home() {
  return (
    <>

    <Title page="Home"></Title>
    
    
    <div align="right">
    <h3>  
    <Link href="/">Home |</Link> 
    <Link href="Template/sign_in">Sign In |</Link> 
    <Link href="Template/sign_up">Sign Up |</Link>
    </h3>
    </div>
   
    
    <h1 align="center">Home Page</h1>
   
    
    
    <h3 align="center"><strong>&copy;2023 Best Click Store</strong></h3>
   
    
    
 
    </>
  );
}
