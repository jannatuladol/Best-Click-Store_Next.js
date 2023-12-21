import dynamic from 'next/dynamic';
const Title =dynamic(()=>import('../Layout/title'),{ssr:false,})
const Layout =dynamic(()=>import('../Layout/layout'),{ssr:false,})
  
export default function Help_line(){
    return (
        <>
        <Title page="Notice"></Title>
       <Layout>
      
        <table align="center" border={1}>
                <tbody>
                    <tr>
                    <td><h2>View Notice</h2></td>
                    </tr>
                    <tr>
                        <th>Monday off day</th>
                    </tr>
                </tbody>
            </table>

            <br></br>
            <br></br>
            <br></br>

            <table align="center">
                <tbody>
                    <tr>
                        <td>
                            <a href="dashboard"><button type="submit"> Sent</button></a> 
                        </td>
                        <td>
                            <textarea name="" id=""></textarea>
                        </td>
                    </tr>
                    <tr>
                    </tr>
                </tbody>
            </table>
            
            </Layout>
        </>
    )
}
