import Link from 'next/link';




 
export default function Header() {
  return (
    <>
    
    <div align="right">
    <h3>  
    <Link href="./dashboard">Dashboard |</Link> 
    <Link href="/">Home |</Link> 
    <Link href="/">Log Out|</Link>
    </h3>
    </div>
   
 
    </>
  );
}
