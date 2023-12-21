import dynamic from 'next/dynamic';
const Title =dynamic(()=>import('../Layout/title'),{ssr:false,})
const Layout =dynamic(()=>import('../Layout/layout'),{ssr:false,})
 
export default function All_user_view(){
    return (
        <>
        <Title page="All user view"></Title>
    
       
    <Layout>
   
       
           <h1 align="center">All User View</h1>

           <h3 align="center">Search <input type="box" name="" id="" /></h3>
           
           
            <table align="center" border={1}>
                <tbody>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                    <tr>
                        <th>1</th>
                        <th>jannatul</th>
                        <th>Adol</th>
                        <th>Female</th>
                        <th>jannatuladol@gmail.com</th>
                        <th>01798135862</th>
                    </tr>
                </tbody>
            </table>
            <a href="dashboard"><h3 align="center">Go To Dashboard</h3></a>
           
            </Layout>
   
        </>
    )
}
