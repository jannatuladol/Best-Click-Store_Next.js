import dynamic from 'next/dynamic';
const Title =dynamic(()=>import('../Layout/title'),{ssr:false,})
const Layout =dynamic(()=>import('../Layout/layout'),{ssr:false,})
  
export default function All_manager_view(){
    return (
        <>
        <Title page="View manager"></Title>
    
       
    <Layout>
    
       
           <h1 align="center">All Manager View</h1>

           <h3 align="center">Search Manager <input type="box" name="" id="" /></h3>
           
           
            <table align="center" border={1}>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>jannatul</th>
                        <th>jannatuladol@gmail.com</th>
                        <th>Dhaka</th>
                    </tr>
                </tbody>
            </table>


            <a href="dashboard"><h3 align="center">Go To Dashboard</h3></a>
        
            </Layout>
        </>
    )
}
