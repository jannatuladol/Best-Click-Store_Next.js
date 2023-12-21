import dynamic from 'next/dynamic';
const Title =dynamic(()=>import('../Layout/title'),{ssr:false,})
const Layout =dynamic(()=>import('../Layout/layout'),{ssr:false,})
  
export default function Dashboard(){
    return (
        <>
         <Title page="Dashboard"></Title>
       <Layout>
       
        <h1 align="center">Admin Panel</h1>
        <a href='notice'><h3>Notice</h3></a> 
        <a href='change_password'><h3>Change Password</h3></a> 
        <a href='update_profile'><h3>Update_Profile</h3></a> 
        <a href='user_profile'><h3 align="left">Profile View</h3></a>
        <a href='all_user_view'><h3 align="left">All User View</h3></a>
        <a href='manager_add'><h3 align="left">Add Manager</h3></a>
        <a href='manager_view'><h3 align="left">Manager View</h3></a>
        <a href='manager_update'><h3 align="left">Manager Update</h3></a>
        <a href='help_line'><h3 align="left">Help Line</h3></a>
        <a href='sign_in'><h3 align="left">Log Out</h3></a>
        
        </Layout>
        </>
    )
}