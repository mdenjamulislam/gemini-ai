import { NavLink } from "react-router-dom";
import aiBot from "../assets/ai-bot.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then((result) => {
                console.log("Login Successful!");
            })
            .catch((error) => {
                console.log("Error message", error.meassage);
            });
    };

    return (
        <section className="pt-56 pb-8 md:pb-10">
            <div className="container flex items-center justify-center relative">
                <div className="w-full md:w-96">
                    <div className="p-5 space-y-5 md:space-y-8 bg-slate-800 rounded-2xl relative z-[2]">
                        <h2 className="text-xl md:text-2xl font-semibold text-white">Login</h2>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm text-white">
                                    Email/Username
                                </label>
                                <input type="email" name="email" id="email" placeholder="Enter your email/username" className="w-full px-3.5 py-2 md:px-5 md:py-3 text-sm rounded-xl bg-white outline-none focus:border-accent focus:outline-none focus:bg-white" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="password" className="text-sm text-white">
                                    Password
                                </label>
                                <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full px-3.5 py-2 md:px-5 md:py-3 text-sm rounded-xl bg-white outline-none focus:border-accent focus:outline-none focus:bg-white" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <input type="checkbox" name="remember" id="remember" className="w-4 h-4 rounded" />
                                    <label htmlFor="remember" className="text-sm text-white">
                                        Remember me
                                    </label>
                                </div>
                                <a href="forgot-password.html" className="text-accent text-sm">
                                    Forgot Password?
                                </a>
                            </div>
                            <button type="submit" className="flex px-4 py-3 text-sm text-white w-full justify-center bg-sky-500 rounded-xl hover:bg-sky-700">
                                Sign in
                            </button>
                            <p className="text-center text-sm text-white">
                                Don't have an account?{" "}
                                <NavLink to="/register" className="text-accent">
                                    Register
                                </NavLink>
                            </p>
                        </form>
                    </div>
                    {/*  */}
                    <img src={aiBot} alt="" className="w-72 md:w-80 absolute -top-48 md:right-48 rotate-12" />
                </div>
                {/* End of the grid */}
            </div>
            {/* End of the section container */}
        </section>
    );
};

export default Login;
