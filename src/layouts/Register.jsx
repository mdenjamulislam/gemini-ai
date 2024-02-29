import { NavLink } from "react-router-dom";
import registerImage from "../assets/register.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    console.log(createUser);

    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error("User Register Error", error.message);
        })
    }

    return (
        <section className="py-8 md:py-10">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-800 rounded-2xl">
                    <div className="p-5 md:p-10">
                        <h2 className="text-xl md:text-3xl font-semibold text-white">Register An Account</h2>
                        <form onSubmit={handleRegister} className="space-y-4 text-white">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm text-white">
                                    Name
                                </label>
                                <input type="text" name="name" id="name" placeholder="Name" required className="w-full px-3.5 py-2 md:px-5 md:py-3 text-sm rounded-xl text-gray-600 bg-white outline-none focus:border-accent focus:outline-none focus:bg-white" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm">
                                    Email
                                </label>
                                <input type="email" name="email" id="email" placeholder="Enter your email" required className="w-full px-3.5 py-2 md:px-5 md:py-3 text-sm rounded-xl text-gray-600 bg-white outline-none focus:border-accent focus:outline-none focus:bg-white" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="password" className="text-sm">
                                    Password
                                </label>
                                <input type="password" name="password" id="password" placeholder="Enter your password" required className="w-full px-3.5 py-2 md:px-5 md:py-3 text-sm rounded-xl text-gray-600 bg-white outline-none focus:border-accent focus:outline-none focus:bg-white" />
                                <label htmlFor="password" className="text-xs text-textColor">
                                    (Password shuld be strong)
                                </label>
                            </div>
                            <button type="submit" className="flex px-4 py-3 text-sm text-white w-full justify-center bg-sky-500 rounded-xl hover:bg-sky-700">
                                Register
                            </button>
                            <p className="text-center text-sm">
                                I have an account.{" "}
                                <NavLink to="/login" className="text-accent">
                                    Login
                                </NavLink>
                            </p>
                        </form>
                    </div>
                    <div>
                        <img src={registerImage} alt="" className="w-full h-full object-cover" />
                    </div>
                </div>
                {/* End of the grid */}
            </div>
            {/* End of the section container */}
        </section>
    );
};

export default Register;
