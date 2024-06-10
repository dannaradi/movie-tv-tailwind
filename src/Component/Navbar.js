import { Link } from "react-router-dom"
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";


export default function Navbar() {
    const cookies = new Cookies();
    const Swal = require('sweetalert2')
    const navigate = useNavigate();
    
    const onClickButton = () => {
        if (cookies.get('isLogin') === false){
            navigate(`/sign-in`);
        } else{
            Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
              }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        icon: "success",
                        title: "Logged Out!",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    cookies.set('isLogin', false)
                    navigate(`/`);
                }
              });
        }
    }

    return (
        <nav className="bg-[#041836] border-gray-200 dark:bg-gray-900 rounded-lg">
            <div className="max-w-screen-xl flex flex-wrap justify-between items-center mx-auto p-4 gap-5">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-amber-500">ChannelName</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link className={`block mt-2 py-4 px-3 bg-[#041836] md:p-0 text-amber-500`} to="/">Menu</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-1 justify-end">
                    <button onClick={onClickButton} type="button" className="text-black bg-[#FFB400] focus:ring-4 focus:outline-none font-medium rounded-full text-sm px-4 py-2 text-center">
                        {(cookies.get('isLogin') === true) ? "Sign Out" : "Sign in"}
                    </button>
                </div>
            </div>
        </nav>
    )
}