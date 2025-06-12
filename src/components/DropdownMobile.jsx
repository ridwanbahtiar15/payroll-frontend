import getImageUrl from "../utils/imageGetter";
import { Link } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { userAction } from "../redux/slices/user";
// import { useState } from "react";

function DropdownMobile(props) {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const userAvailable = useSelector((state) => state.user.isUserAvailable);
  // const user = useSelector((state) => state.user);
  // const token = user.userInfo.token;
  // const [roleUser, setRoleUser] = useState(user.userInfo.role)

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
    <div id="dropdownMobile" className="w-screen font-mulish lg:hidden">
      <div
        className="fixed left-0 top-0 z-10 w-screen h-screen pt-4 px-5
            md:px-11 lg:px-11 bg-light"
      >
        <div className="mb-5 flex justify-between">
          <img
            src={getImageUrl("Tickitz", "svg")}
            alt="logo"
            className="w-20 h-10 md:w-28 md:h-14"
          />
          <button className="lg:hidden" onClick={() => props.isClick()}>
            <img
              src={getImageUrl("close-dark", "svg")}
              alt="x"
              className="w-6 h-6"
            />
          </button>
        </div>
        <ul className="flex flex-col gap-y-2 w-full text-center">
          <li className="p-3 text-dark hover:bg-primary hover:text-light hover:font-medium rounded-md md:text-lg">
            <Link to="/login">Home</Link>
          </li>
          <li className="p-3 text-dark hover:bg-primary hover:text-light hover:font-medium rounded-md md:text-lg">
            <Link to="/login">Movie</Link>
          </li>
          {/* {!userAvailable && (
            <li className="p-3 text-dark hover:bg-primary hover:text-light hover:font-medium rounded-md md:text-lg">
              <Link to="/login">SignIn</Link>
            </li>
          )}
          {!userAvailable && (
            <li className="p-3 text-dark hover:bg-primary hover:text-light hover:font-medium rounded-md md:text-lg">
              <Link to="/login">SignUp</Link>
            </li>
          )}
          {userAvailable && (
            <li className="p-3 text-dark hover:bg-primary hover:text-light hover:font-medium rounded-md md:text-lg">
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {/* {roleUser == "Admin" && (
            <>
              <li className="p-3 text-dark hover:bg-primary hover:text-light hover:font-medium rounded-md md:text-lg">
                <Link to="/admin/dashboard">Dashboard</Link>
              </li>
              <li className="p-3 text-dark hover:bg-primary hover:text-light hover:font-medium rounded-md md:text-lg">
                <Link to="/admin/movie">Movie Admin</Link>
              </li>
            </>
          )} */}
          {/* {userAvailable && ( */}
          {/* <li className="p-3 text-dark hover:bg-primary hover:text-light hover:font-medium rounded-md md:text-lg">
            <button onClick={onLogOutHandler}>Logout</button>
          </li> */}
          {/* )}{" "} */}
          {/* */}
        </ul>
      </div>
    </div>
  );
}

export default DropdownMobile;
