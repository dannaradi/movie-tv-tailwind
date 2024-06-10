import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';


export default function SignIn({setMainPath}) {
    const Swal = require('sweetalert2')
    const navigate = useNavigate();
    const cookies = new Cookies();

    const [form, setForm] = useState({
        email:"",
        password:""
    })

    const onChangeForm = (e) => {
        setForm({...form, [e.target.id] : e.target.value})
    }

    useEffect(() => {
        setMainPath(window.location.pathname)
    }, [])


    let buttonColor = (form.email.length > 0) ? "bg-blue-700 hover:bg-blue-800" : "bg-gray-700"
    let passwordHide = (form.email.length > 0) ? "show" : "hidden"

    const loginHandle = (e) => {
        e.preventDefault()

        if (form.email.toLocaleLowerCase() === 'movie@mail.com' && form.password.toLocaleLowerCase() === 'movieadmin') {
            cookies.set('isLogin', true);
            Swal.fire({
                icon: "success",
                title: "Logged In",
                showConfirmButton: false,
                timer: 2000
            });
        } else {
            cookies.set('isLogin', false);
            Swal.fire({
                icon: "warning",
                title: "User Not Registered",
                showConfirmButton: false,
                timer: 2000
            });
        } 
        navigate(`/`);
        
    }   

    return(
        <div className="flex justify-center pt-60">

            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
                <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Sign in</h5>

                <form className="min-w-80" onSubmit={loginHandle}>
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input value={form?.email} onChange={(e)=>onChangeForm(e)} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="movie@mail.com" required />
                    </div>

                    <div className={`mb-5 ${passwordHide}`}>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input value={form?.password} onChange={(e)=>onChangeForm(e)} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div>

                    <button type="submit" disabled={form.email.length < 1} className={`text-white ${buttonColor} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center hover:cursor-pointer`}>Submit</button>
                </form>
            </div>

        </div>
    )
}