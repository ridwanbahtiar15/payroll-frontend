import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getImageUrl from "../../utils/imageGetter";

function Login() {
  useEffect(() => {
    document.title = "Login";
  });

  const [isPwdShown, setIsPwdShown] = useState(false);
  const showPwdHandler = () => {
    setIsPwdShown((state) => !state);
  };

  return (
    <>
      <main className="w-screen h-screen bg-[#F5F6F8] flex justify-center items-center">
        <div className="w-full h-full flex items-center justify-center">
          <div
            id="White_box"
            className="pb-10"
            style={{ fontFamily: "Plus Jakarta Sans" }}
          >
            <form className="bg-white flex flex-col gap-4 p-20 rounded-md text-sm w-full">
              <div className="flex justify-center mb-4">
                <img
                  src={getImageUrl("logo", "png")}
                  alt="image"
                  className="w-36"
                />
              </div>
              <p className="text-2xl md:text-[1.8rem] font-bold">
                Welcome Back👋
              </p>
              <div id="Email">
                <p className="text-secondary font-semibold mb-2">Username</p>
                <div className="w-full border border-solid border-gray-300 p-3 flex items-center gap-2 rounded-lg">
                  <input
                    type="text"
                    placeholder="Enter your username"
                    name="email"
                    className="flex-1 outline-none text-sm lg:text-sm text-gray-700"
                  />
                  <div className="cursor-pointer"></div>
                </div>
              </div>
              <div id="Password">
                <p className="text-secondary font-semibold mb-2">Password</p>
                <div className="w-fullborder border border-solid border-gray-300 p-3 flex items-center gap-2 rounded-lg">
                  <input
                    type={isPwdShown ? "text" : "password"}
                    placeholder="Enter your password"
                    name="pwd"
                    className="flex-1 outline-none text-sm lg:text-sm text-gray-700"
                  />
                  <div className="cursor-pointer" onClick={showPwdHandler}>
                    <ion-icon name="eye-off-outline"></ion-icon>
                  </div>
                </div>
              </div>
              <a href="#" className="text-[#1D4ED8] flex justify-end">
                Forgot your password?
              </a>
              {/* <button
                type="submit"
                id="Login"
                className="bg-[#1D4ED8] text-white rounded-md py-4 font-bold"
              >
                Login
              </button> */}
              <Link
                to={"/dashboard"}
                className="bg-[#1D4ED8] text-white rounded-md py-4 font-bold text-center"
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;
