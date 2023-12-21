import dynamic from 'next/dynamic';
const Title =dynamic(()=>import('../Layout/title'),{ssr:false,})
const Layout =dynamic(()=>import('../Layout/layout'),{ssr:false,})
  
export default function Manager_add(){
    return (
        <>
         <Title page="Manager Add"></Title>
    
       
    <Layout>
    
            <h1 align="center">Manager Add</h1>
            
            <table align="center">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>
                            <input type="text" name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>
                            <input type="text" name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>Address</td>
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
