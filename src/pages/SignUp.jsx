import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/efbc23c4-2bba-4fd7-a0b3-5cfa86ccfc17/NP-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="netflix"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-full"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">sign up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-3 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="password"
                  autoComplete="currentPassword"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign up
                </button>
                <div className="flex items-center justify-between txt-sm text-gray-600">
                  <p>
                    <input className="mr-1" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8 text-gray-600">
                  Already subscribe to Netflix?
                  <span className="text-white">
                    <Link to={"/login"}>Sign in</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
