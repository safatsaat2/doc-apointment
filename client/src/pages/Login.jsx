

import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";



const login = () => {

    
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data) => {
        
        const res = await axios.post("http://localhost:8080/user/login", data)
        
        if (res.data.success) {
            localStorage.setItem("token", res.data.token)
            alert("Login Successfully")
            navigate('/')
        }

        else {
            alert(res.data.message) 
            reset()
        }
    }
    return (
        <div className="flex justify-between">
            <div className="lg:bg-[#E9F0FF] lg:w-1/3 lg:h-screen flex flex-col justify-center items-center">
                <h1 className="text-4xl text-primary font-bold">DOCAPP</h1>
                <img src="https://i.ibb.co/zhcX4X9/Gut-health-rafiki-2.png" alt="" />
            </div>

            <div className="flex flex-col justify-center mx-auto">
                <h1 className="text-6xl font-semibold font-heading ">Hi There!</h1>
                <p className=" font-medium mt-4 font-secondary">Welcome to DOCAPP</p>

                {/* FORM STARTS */}
                <form className=" " onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control my-5">
                        <p className="label mb-4">
                            <span className="label-text ">Email:</span>
                        </p>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="Provide Your Email"
                            className="input input-bordered text-black w-full lg:w-[458px] py-4 rounded-md border px-2"
                        />
                        {errors.email && (
                            <p className="text-red">Email is required</p>
                        )}
                    </div>
                    <div className="form-control">
                        <p className="label mb-4">
                            <span className="label-text ">Password:</span>
                        </p>
                        <input
                            type="password"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern:
                                    /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                            })}
                            placeholder="Provide Your Password"
                            className="input input-bordered text-black w-full lg:w-[458px] py-4 rounded-md border px-2"
                        />
                        {errors.password?.type === "required" && (
                            <p className="text-red">Password is required</p>
                        )}
                        {errors.password?.type === "minLength" && (
                            <p className="text-red">
                                Password must be 6 characters
                            </p>
                        )}
                        {errors.password?.type === "maxLength" && (
                            <p className="text-red">
                                Password must be less than 20 characters
                            </p>
                        )}
                        {errors.password?.type === "pattern" && (
                            <p className="text-red">
                                Password must have one Uppercase one lower case, one
                                number and one special character.
                            </p>
                        )}
                    </div>

                    <div className="form-control mt-4">
                        <input
                            className="btn py-2 px-10 rounded-md bg-primary text-[#fff] cursor-pointer "
                            type="submit"
                            value="Log in"
                        />
                    </div>
                    <p className="font-secondary mt-4 text-sm">New to website? <Link className="text-primary font-bold" to="/register">Register</Link></p>
                </form>
                {/* FORM ENDS */}
            </div>
        </div>
    );
};

export default login;