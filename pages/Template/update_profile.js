import dynamic from 'next/dynamic';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import axios from 'axios';

const Title = dynamic(() => import('../Layout/title'), { ssr: false });
const Layout = dynamic(() => import('../Layout/layout'), { ssr: false });

export default function Update_profile() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    // const [loading, setLoading] = useState(false);
    // const [updatedData, setUpdatedData] = useState(null);
    const router = useRouter();

    const [id, setId] = useState('');
    const [firstName, setFname] = useState('');
    const [lastName, setLname] = useState('');
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

    const onSubmit = async (data) => {
        // setLoading(true);
        try {
            const response = await axios.put('http://localhost:3000/admin/updateadmin', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // const updatedData = response.data;
            // setUpdatedData(updatedData);
            // setLoading(false);
            // Redirect to another page or handle success here
            router.push('dashboard'); // Redirect to the profile page after successful update
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return (
        <>
            <Title page="Edit Profile" />
            <Layout>
                <fieldset align="center">
                    <div align="right">

                        <a href='delete_profile'><h3>Delete Profile</h3></a>

                    </div>



                    <h1>Edit Profile</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <input
                                type="text"
                                id="id"
                                value={id}
                                hidden
                                {...register('id', { required: 'ID is required' })}
                            />
                            {errors.id && <p>{errors.id.message}</p>}
                        </div>

                        <div>
                            <label >First Name</label>
                            <input
                                type="text"
                                id="fname"
                                defaultValue={firstName}
                                {...register('fname', { required: 'First name is required' })}
                            />
                            {errors.fname && <p>{errors.fname.message}</p>}
                        </div>
                        <div>
                            <label >Last Name</label>
                            <input
                                type="text"
                                id="lname"
                                defaultValue={lastName}
                                {...register('lname', { required: 'Last name is required' })}
                            />
                            {errors.lname && <p>{errors.lname.message}</p>}
                        </div>
                        <div>
                            <label >Gender </label>
                            <input
                                type="text"
                                id="gender"
                                defaultValue={gender}
                                {...register('gender', { required: 'Gender is required' })}
                            />
                            {errors.gender && <p>{errors.gender.message}</p>}
                        </div>
                        <div>
                            <label >Email </label>
                            <input
                                type="text"
                                id="email"
                                defaultValue={email}
                                {...register('email', { required: 'Email is required' })}
                            />
                            {errors.email && <p>{errors.email.message}</p>}
                        </div>
                        <div>
                            <label >Phone </label>
                            <input
                                type="text"
                                id="phone"
                                defaultValue={phone}
                                {...register('phone', { required: 'Phone is required' })}
                            />
                            {errors.phone && <p>{errors.phone.message}</p>}
                        </div>

                        <div>
                            <button type="submit" class="">Submit</button>
                        </div>

                    </form>
                </fieldset>

            </Layout >
        </>
    );
}
