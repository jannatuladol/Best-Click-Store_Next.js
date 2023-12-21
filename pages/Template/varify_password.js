import dynamic from 'next/dynamic';
const Title =dynamic(()=>import('../Layout/title'),{ssr:false,})
const Layout =dynamic(()=>import('../Layout/layout'),{ssr:false,})
 
export default function Varify_password(){
    return (
        <>
        <Title page="Varify Password"></Title>
    
       
    <Layout>
   
            <h1 align="center">Varify password</h1>
            
            <table align="center">
                <tbody>
                    <tr>
                        <td>Pin</td>
                        <td>
                            <input type="text" name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>New Password</td>
                        <td>
                            <input type="text" name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="sign_in"><button type="submit">Submit</button></a>
                        </td>
                    </tr>
                    </tbody> 
            </table>
       
       </Layout>
        </>
    )
}
