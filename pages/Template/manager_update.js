import dynamic from 'next/dynamic';
const Title =dynamic(()=>import('../Layout/title'),{ssr:false,})
const Layout =dynamic(()=>import('../Layout/layout'),{ssr:false,})
  
export default function Manager_update(){
    return (
        <>
         <Title page="Update Manager"></Title>
    
       
    <Layout>
   
            <h1 align="center">Manager Update</h1>
            <h3 align="center">Search Manager <input type="box" name="" id="" /></h3>

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
                        <td>Address</td>
                        <td>
                            <input type="text" name="" id="" />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="dashboard"><button type="submit">Submit</button></a>
                        </td>
                        <td>
                        <a href="dashboard"><button type="submit">Delete</button></a>
                        </td>
                    </tr>
                </tbody>
            </table>
           
            </Layout>
        </>
    )
}
