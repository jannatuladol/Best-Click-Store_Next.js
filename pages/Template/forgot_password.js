import dynamic from 'next/dynamic';
const Title =dynamic(()=>import('../Layout/title'),{ssr:false,})
const Layout =dynamic(()=>import('../Layout/layout'),{ssr:false,})
  
export default function Forgot_password(){
    return (
        <>
         <Title page="Forgot password"></Title>
       <Layout>
        
            <h1 align="center">Forgot_password</h1>
            
            <table align="center">
                <tbody>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type="text" name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="varify_password"><button type="submit">Submit</button></a>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
           
            </Layout>
        </>
    )
}
