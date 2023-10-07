import reactImg from "../../assets/react.svg";
import { AiFillHome, AiFillProfile, AiFillFolder } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { TbPointerCancel } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { BsToggle2On, BsToggle2Off } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { onLogOut, toggleState } from "../../global/GlobalState";
import { useSingleAccount } from "../../hooks/CustomHook";
const Sider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggle = useSelector((state: any) => state.toggle);
  const onChangeToggle = () => {
    dispatch(toggleState(!toggle));
  };

  const { data, isLoading } = useSingleAccount();
  return (
    <>
      <div
        className={`${
          toggle ? "w-[250px]" : "w-[80px]"
        } fixed flex flex-col overflow-hidden text-[15px] ${
          toggle ? "thirdpoint:w-[180px]" : "thirdpoint:w-[75px]"
        }  transition-all duration-300 text-white items-center h-full bg-[dodgerblue]`}
      >
        {toggle ? (
          <BsToggle2Off
            onClick={onChangeToggle}
            className="my-[30px] text-[30px] cursor-pointer hover:scale-[1.09] transition-all duration-300"
          />
        ) : (
          <BsToggle2On
            onClick={onChangeToggle}
            className="my-[30px] text-[30px] cursor-pointer hover:scale-[1.09] transition-all duration-300"
          />
        )}

        {toggle ? (
          <>
            <img
              src={reactImg}
              className=" rounded-full object-cover border h-[100px] w-[100px]"
            />
            <span className="uppercase mt-3 font-bold text-[20px]">
              {data?.owner}
            </span>
            <span className="lowercase ">{data?.email}</span>
            {/*home*/}
            <Link
              to={`/`}
              className="my-4 flex items-center hover:bg-[#a0d0ff] duration-300 transition-all cursor-pointer w-full py-3 justify-center"
            >
              <AiFillHome className="text-[30px]" />
              <span className="ml-2 capitalize font-semibold">home</span>
            </Link>
            {/*Profile*/}
            <Link
              to={`/profile`}
              className="my-4 flex items-center hover:bg-[#a0d0ff] duration-300 transition-all cursor-pointer w-full py-3 justify-center"
            >
              <AiFillProfile className="text-[30px]" />
              <span className="ml-2 capitalize font-semibold">Profile</span>
            </Link>
            {/*Edit*/}
            <Link
              to={`/edit-profile`}
              className="my-4 flex items-center hover:bg-[#a0d0ff] duration-300 transition-all cursor-pointer w-full py-3 justify-center"
            >
              <FaUserEdit className="text-[30px]" />
              <span className="ml-2 capitalize font-semibold">Edit bio</span>
            </Link>
            {/*History*/}
            <Link
              to={`/history`}
              className="my-4 flex items-center hover:bg-[#a0d0ff] duration-300 transition-all cursor-pointer w-full py-3 justify-center"
            >
              <AiFillFolder className="text-[30px]" />
              <span className="ml-2 capitalize font-semibold">History</span>
            </Link>
            <br />
            <br />
            <button
              onClick={() => {
                dispatch(onLogOut());
                navigate(`/login-owner`);
              }}
              className="flex items-center w-[200px] justify-center bg-white text-[dodgerblue] py-3 rounded hover:scale-95 duration-300 transition-all"
            >
              <TbPointerCancel className="text-[30px]" />
              <span className="capitalize">logout</span>
            </button>
          </>
        ) : (
          <>
            <img
              src={reactImg}
              className=" rounded-full object-cover border h-[70px] w-[70px]"
            />
            {/*home*/}
            <Link
              to={`/`}
              className="my-4 flex items-center hover:bg-[#a0d0ff] duration-300 transition-all cursor-pointer w-full py-3 justify-center"
            >
              <AiFillHome className="text-[30px]" />
            </Link>
            {/*Profile*/}
            <Link
              to={`/profile`}
              className="my-4 flex items-center hover:bg-[#a0d0ff] duration-300 transition-all cursor-pointer w-full py-3 justify-center"
            >
              <AiFillProfile className="text-[30px]" />
            </Link>
            {/*Edit*/}
            <Link
              to={`/edit-profile`}
              className="my-4 flex items-center hover:bg-[#a0d0ff] duration-300 transition-all cursor-pointer w-full py-3 justify-center"
            >
              <FaUserEdit className="text-[30px]" />
            </Link>
            {/*History*/}
            <Link
              to={`/history`}
              className="my-4 flex items-center hover:bg-[#a0d0ff] duration-300 transition-all cursor-pointer w-full py-3 justify-center"
            >
              <AiFillFolder className="text-[30px]" />
            </Link>
            <br />
            <br />
            <button
              onClick={() => {
                dispatch(onLogOut());
                navigate(`/login-owner`);
              }}
              className="flex items-center  rounded-full justify-center p-3 bg-white text-[dodgerblue] hover:scale-95 duration-300 transition-all"
            >
              <TbPointerCancel className="text-[30px]" />
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Sider;
