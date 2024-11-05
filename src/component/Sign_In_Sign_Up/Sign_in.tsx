import { Link } from 'react-router-dom'
import SyncCloud_Logo from '../../assets/syncloud_logo.svg'
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";

const Sign_in = () => {

  return (
    <div className="bg-gradient-radial animate-gradient-expansion flex flex-col w-[100vw] h-[100vh] font-poppins">

        <div className="SignIN_Header relative h-[9vh] flex align-middle">
            <Link to={"/"} className=' flex flex-row w-max'>
                <img src={SyncCloud_Logo} className='ml-8' height={50} width={50}/> 
                <p className=" my-auto mx-2 text-white text-2xl"><b>Syncloud</b></p>
            </Link> 
            <Link to={"/sign_up"} className='absolute right-8 flex text-[1.2rem] text-white mt-4'>Create a  Account</Link>
        </div>

        <div className="SignIN_Content h-[75vh] w-[40vw] m-auto text-white">

            
            <p className=' text-[2rem] text-center mb-10 '>Login</p>

            <form action="" className='flex flex-col'>

                 <div className="relative flex flex-row-reverse border border-gray-400 px-3 py-1 rounded-lg my-3">
                    <input
                      type="email"
                      placeholder="syncloud@gmail.com"
                      className="w-full px-2 py-4 rounded-lg bg-transparent text-white text-[1.2rem] placeholder-gray-400 outline-none"
                    />
                    <span className="my-auto "><MdEmail size={25}/></span>
                </div>

                <div className="relative flex flex-row-reverse border border-gray-400 px-3 py-1 rounded-lg my-3">
                    <input
                      type="password"
                      placeholder="Enter a password"
                      className="w-full px-2 py-4 rounded-lg bg-transparent text-white text-[1.2rem] placeholder-gray-400 outline-none"
                    />
                    <span className="my-auto "><FaKey size={20}/></span>
                </div>

                <button className="w-full py-3 bg-white text-purple-800 rounded-lg font-semibold my-3 hover:bg-slate-200 hover:duration-150">
                  Submit
                </button>

                <div className="flex items-center space-x-2 my-3">
                    <input type="checkbox" id="remember" className="text-purple-700" />
                    <label htmlFor="remember" className="text-gray-400">Remember me!</label>
                </div>

                <div className="flex items-center space-x-4 mt-4 my-3">
                    <div className="border-t border-gray-500 flex-grow"></div>
                    <span className="text-gray-400">Or use</span>
                    <div className="border-t border-gray-500 flex-grow"></div>
                  </div>

                {/* Google Sign-in Button */}
                <button className="w-full py-3 bg-transparent border border-gray-500 rounded-lg font-semibold my-3">
                  Sign in using Google
                </button>
            </form>

        </div>

    </div>
  )

}

export default Sign_in