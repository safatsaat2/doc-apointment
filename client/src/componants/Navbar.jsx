import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [user, setUser] = useState(false)
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setUser(true)
        }
        else {
            setUser(false)
        }
    }, [])
    console.log(user)
    const logOut = () => {
        localStorage.removeItem("token")
        setUser(false)
    }
    const {user1} = useSelector(state => state.user)
    return (
        <>
            <div>
                <h1>{user1?.name}</h1>
                <div className="max-w-7xl mx-auto flex justify-between my-3 items-center">
                    <img src="https://i.ibb.co/tLX2t1f/Group-1000003766.png" alt="" />
                    <div className="flex gap-x-5">
                        {user === true ?
                            <>
                                <div onClick={()=>logOut()} className="py-2 px-3 border border-primary rounded-lg text-primary cursor-pointer hover:bg-primary hover:text-[#FFF]">
                                    Log Out
                                </div>
                            </>
                            :
                            <>
                                <Link to="/login">
                                    <div className="py-2 px-3 border border-primary rounded-lg text-primary cursor-pointer hover:bg-primary hover:text-[#FFF]">
                                        Log in
                                    </div>
                                </Link>
                                <Link to="/register">
                                <div className="py-2 px-3 border border-primary rounded-lg text-primary cursor-pointer hover:bg-primary hover:text-[#FFF]">
                                    Register
                                </div>
                                </Link>
                            </>
                        }

                    </div>
                </div>
                <div className="bg-primary">
                    <div className=" flex justify-around max-w-3xl mx-auto py-3">
                        <p className="text-[#FFF]">Home</p>
                        <p className="text-[#FFF]">Appointments</p>
                        <p className="text-[#FFF]">Apply Doctors</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Navbar;