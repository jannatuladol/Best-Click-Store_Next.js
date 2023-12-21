import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Title = dynamic(() => import('../Layout/title'), { ssr: false, })
const Layout = dynamic(() => import('../Layout/layout'), { ssr: false, })

export default function User_profile() {





    const [ID, setId] = useState('');
    const [firstname, setFname] = useState('');
    const [lastname, setLname] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        setId(sessionStorage.getItem("id"));
        setFname(sessionStorage.getItem("fname"));
        setLname(sessionStorage.getItem("lname"));
        setGender(sessionStorage.getItem("gender"));
        setEmail(sessionStorage.getItem("email"));
        setPhone(sessionStorage.getItem("phone"));

    })






    return (
        <>
            <Title page="View Profile"></Title>

            <Layout>
                <fieldset>
                    <h1 align="center">View Profile</h1>


                    <table align="center">
                        <tbody>
                            <tr>
                                <td>First Name :</td>
                                <td>
                                {firstname}
                                </td>
                            </tr>

                            <tr>
                                <td>Last Name :</td>
                                <td>
                                {lastname}
                                </td>
                            </tr>
                            <tr>
                                <td>Gender :</td>
                                <td>
                                    {gender}
                                </td>
                            </tr>

                            <tr>
                                <td>Email :</td>
                                <td>
                                {email}
                                </td>
                            </tr>

                            <tr>
                                <td>Phone :</td>
                                <td>
                                {phone}
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <a href='dashboard'><h3>Back to Dashboard</h3></a>
                                </td>

                                <td>
                                </td>

                                <td>
                                    <a href='update_profile'><h3>Update Profile </h3></a>
                                </td>

                            </tr>

                        </tbody>
                    </table>


                </fieldset>
            </Layout>
        </>
    )
}

