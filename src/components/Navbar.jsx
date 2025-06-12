// import React from "react";
import { Link } from "react-router-dom";
import getImageUrl from "../utils/imageGetter";
// import { useSelector, useDispatch } from "react-redux";
// import { useState } from "react";
// import { userAction } from "../redux/slices/user";
// import { useNavigate } from "react-router-dom";

function Navbar(props) {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const userAvailable = useSelector((state) => state.user.isUserAvailable);
  // const [arrow, setArrow] = useState(false);
  // const user = useSelector((state) => state.user);
  // // const [roleUser, setRoleUser] = useState(user.userInfo.role);
  // const token = user.userInfo.token;
  // const onLogOutHandler = () => {
  //   const { logoutThunk } = userAction;
  //   dispatch(
  //     logoutThunk({
  //       token,
  //       cb: () => {
  //         navigate("/login");
  //       },
  //     })
  //   );
  // };

  return (
    <nav
      className="w-full flex justify-between py-4 px-5 items-center bg-light md:px-11 lg:px-11 xl:px-[130px] border-b border-[#E8E8E8]"
      style={{ fontFamily: "Plus Jakarta Sans" }}
    >
      <div className="nav-start">
        <div className="flex gap-x-4 items-center">
          <div>
            <img src={getImageUrl("logo", "png")} alt="logo" className="w-24" />
          </div>
        </div>
      </div>
      <div className="nav-end hidden lg:flex lg:gap-x-4 lg:items-center">
        <div className="cursor-pointer flex items-center">
          <ion-icon name="search-outline"></ion-icon>
        </div>
        <Link to="/profile">
          <img
            src={getImageUrl("profile", "png")}
            alt=""
            height="56px"
            width="56px"
            className="rounded-full w-[56px] h-[56px] cursor-pointer"
          />
        </Link>
        <img
          src={getImageUrl("Forward", "svg")}
          alt="icon"
          className="cursor-pointer"
        />
      </div>
      <div
        className={`absolute text-dark bg-light text-sm font-normal py-2 px-6 top-24 right-[8rem] rounded-md drop-shadow-md hidden`}
      >
        <ul className="flex flex-col gap-y-2">
          <li className="p-1">
            <button>Logout</button>
          </li>
          <li className="p-1">
            <button>Dashboard</button>
          </li>
          <li className="p-1">
            <button>Movie Admin</button>
          </li>
        </ul>
      </div>
      <button className="lg:hidden" onClick={() => props.isClick()}>
        <img
          src={getImageUrl("burger-menu", "svg")}
          alt="burger-menu"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </button>
    </nav>
  );
}

export default Navbar;
