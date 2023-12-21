import dynamic from 'next/dynamic';
const Title =dynamic(()=>import('../Layout/title'),{ssr:false,})
const Layout =dynamic(()=>import('../Layout/layout'),{ssr:false,})
  
export default function Change_password(){
    return (
        <>
        <Title page="Change Password"></Title>
    
       
        <Layout>
        
            <h1 align="center">Change_password</h1>
            
            <table align="center">
                <tbody>
                    <tr>
                        <td>Old Password</td>
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
                        <td>Confirm Password</td>
                        <td>
                            <input type="text" name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="dashboard"><button type="submit">Submit</button></a>
                        </td>
                    </tr>
                </tbody>
            </table>
           
            </Layout>
            
        </>
    )
}
