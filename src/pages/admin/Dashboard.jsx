import { useState } from "react";
import { Link } from "react-router-dom";
// import { Link, useSearchParams, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";

import Navbar from "../../components/Navbar";
import DropdownMobile from "../../components/DropdownMobile";
import getImageUrl from "../../utils/imageGetter";
// import { getAllMovie } from "../utils/https/home";
// import AuthModal from "../components/AuthModal";

function ListMovie() {
  // const [isDropdownShown, setIsDropdownShow] = useState(false);
  const [IsDate, setIsDate] = useState(false);
  const [date, setDate] = useState("Select month");
  const [dataDate] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  // const [searchParams] = useSearchParams({
  //   page: 1,
  // });
  // const getMovieUrl =
  //   import.meta.env.VITE_BACKEND_HOST + "/movie?" + searchParams.toString();
  // const [dataMovie, setDataMovie] = useState([]);
  // const [metaMovie, setMetaMovie] = useState([]);
  // const token = useSelector((state) => state.user.userInfo.token);
  // useEffect(() => {
  //   getAllMovie(token, getMovieUrl)
  //     .then((res) => {
  //       setDataMovie(res.data.data);
  //       setMetaMovie(res.data.meta);
  //     })
  //     .catch(() => {
  //       setDataMovie([]);
  //     });
  // }, [searchParams]);

  // const navigate = useNavigate();
  // const pagination = (page) => {
  //   if (page !== metaMovie.page) {
  //     // const params = searchParams.toString().slice(0, 1) + page;
  //     navigate("/admin/movie?page=" + page);
  //   }
  // };

  // const renderButtons = () => {
  //   return Array.from({ length: metaMovie.total_page }, (_, index) => (
  //     <button
  //       onClick={() => {
  //         pagination(index + 1);
  //       }}
  //       key={index}
  //       className={` text-light border border-primary rounded-lg w-[40px] h-[40px] flex justify-center items-center drop-shadow-xl ${
  //         index + 1 === metaMovie.page
  //           ? "bg-primary text-white"
  //           : "bg-light text-primary"
  //       }`}
  //     >
  //       {index + 1}
  //     </button>
  //   ));
  // };

  // const url = import.meta.env.VITE_BACKEND_HOST;
  // const authAxios = axios.create({
  //   baseURL: url,
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });
  // const DeleteHandler = (id) => {
  //   authAxios.delete(`/movie/${id}`).then(() => {
  //     getAllMovie(token, getMovieUrl)
  //       .then((res) => {
  //         setDataMovie(res.data.data);
  //         setMetaMovie(res.data.meta);
  //       })
  //       .catch(() => {
  //         setDataMovie([]);
  //       });
  //   });
  // };

  return (
    <>
      <Navbar />
      <main
        className="py-10 px-4 xl:px-[130px] bg-[#F5F6F8] h-full"
        style={{ fontFamily: "Plus Jakarta Sans" }}
      >
        <section className="w-full bg-light rounded-xl p-4 md:p-10 flex flex-col gap-y-10 bg-[#fff]">
          <div className="flex flex-col gap-y-4 md:flex-row md:justify-between md:items-center">
            <p className="text-2xl text-dark font-bold">History Payroll</p>
            <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4 md:items-center">
              <div className="flex flex-col gap-y-2 relative">
                <div
                  className="py-3 px-4 bg-[#F5F6F8] flex justify-beetwen gap-x-10 rounded-lg items-center cursor-pointer text-sm"
                  onClick={() => setIsDate((state) => !state)}
                >
                  <img src={getImageUrl("calendar", "svg")} alt="icon" />
                  <p className="text-secondary font-semibold">{date}</p>
                  <img src={getImageUrl("Forward", "svg")} alt="icon" />
                </div>
                {IsDate && (
                  <div className="py-2 px-4 bg-[#F5F6F8] rounded-md cursor-pointer w-full absolute top-16 drop-shadow-xl">
                    <div className="flex flex-col gap-y-3 text-sm">
                      {dataDate.map((result, i) => (
                        <p
                          className="text-secondary font-semibold hover:bg-slate-300 active:bg-slate-300"
                          key={i}
                          onClick={() => {
                            setDate(result);
                            setIsDate(false);
                          }}
                        >
                          {result}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link
                to="/admin/addmovie"
                className="py-3 px-6 bg-[#1D4ED8] rounded-lg text-white font-bold focus:ring-2 focus:ring-blue-500 text-center text-sm"
              >
                Add Payment
              </Link>
            </div>
          </div>
          <div className="overflow-x-scroll">
            <table className="table-auto w-full">
              <thead>
                <tr className="text-xs font-bold text-center">
                  <td className="py-4">No</td>
                  <td className="p-4">Date</td>
                  <td className="p-4">Status</td>
                </tr>
              </thead>
              <tbody>
                {/* {dataMovie.map((result, i) => ( */}
                <tr className="text-center text-sm bg-[#F5F6F8]">
                  <td className="py-4">1</td>
                  <td className="p-4">12-12-12</td>
                  <td className="p-4 text-white flex items-center justify-center">
                    <div className="bg-[#1D4ED8] p-2 rounded-sm text-xs">
                      Success
                    </div>
                  </td>
                </tr>
                <tr className="text-center text-sm">
                  <td className="py-4">2</td>
                  <td className="p-4">12-12-12</td>
                  <td className="p-4 text-white flex items-center justify-center">
                    <div className="bg-[#1D4ED8] p-2 rounded-sm text-xs">
                      Success
                    </div>
                  </td>
                </tr>
                <tr className="text-center text-sm bg-[#F5F6F8]">
                  <td className="py-4">3</td>
                  <td className="p-4">12-12-12</td>
                  <td className="p-4 text-white flex items-center justify-center">
                    <div className="bg-[#1D4ED8] p-2 rounded-sm text-xs">
                      Success
                    </div>
                  </td>
                </tr>
                <tr className="text-center text-sm">
                  <td className="py-4">4</td>
                  <td className="p-4">12-12-12</td>
                  <td className="p-4 text-white flex items-center justify-center">
                    <div className="bg-[#1D4ED8] p-2 rounded-sm text-xs">
                      Success
                    </div>
                  </td>
                </tr>
                <tr className="text-center text-sm bg-[#F5F6F8]">
                  <td className="py-4">3</td>
                  <td className="p-4">12-12-12</td>
                  <td className="p-4 text-white flex items-center justify-center">
                    <div className="bg-[#1D4ED8] p-2 rounded-sm text-xs">
                      Success
                    </div>
                  </td>
                </tr>
                {/* // ))} */}
              </tbody>
            </table>
          </div>
          <div className="flex gap-x-2 justify-center font-nunito font-medium">
            render button
          </div>
        </section>
      </main>
      {/* <AuthModal role={"Admin"} />
      {isDropdownShown && (
        <DropdownMobile isClick={() => setIsDropdownShow(false)} />
      )} */}
    </>
  );
}

export default ListMovie;
