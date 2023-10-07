import { Link } from "react-router-dom";
import image from "../../assets/istockphoto-1239305591-612x612-removebg-preview.png";
import { FaSignInAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { ownerLoginAPI, verifyOwnerAPI } from "../../api/ownerAuthAPI";
import Swal from "sweetalert2";
import LoadingScreen from "../../utils/LoadingScreen";
import { useDispatch } from "react-redux";
import { ownerState } from "../../global/GlobalState";
import jwtDecode from "jwt-decode";
const LoginOwner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const model = yup.object({
    email: yup.string().email().trim().required(),
    password: yup.string().required(),
  });
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(model),
  });

  const onHandleSubmit = handleSubmit(async (data) => {
    setLoading(true);

    ownerLoginAPI(data).then(async (res) => {
      setLoading(false);

      if (data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Welcome Back",
          showConfirmButton: false,
          timer: 3000,
        });
        const decode: any = jwtDecode(res);
        dispatch(ownerState(decode.id));

        navigate("/");
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Can't Sign in",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    });
  });

  useEffect(() => {
    if (token) {
      verifyOwnerAPI(token);
    }
  }, []);
  return (
    <div className="w-full min-h-[100vh] items-center flex bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400">
      {loading && <LoadingScreen />}
      <img src={image} className="w-[700px]" />
      <div className="flex-col flex justify-center items-center">
        <div className=" w-[600px] flex flex-col items-center">
          <p className="my-5 text-white text-[50px] font-bold">
            Welcome Back 😜👍✌️
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <span className="flex w-full justify-end">
            <Link to={`/reset-account-password`}>
              <span className="text-rose-500 cursor-pointer">
                forgot password
              </span>
            </Link>
          </span>
          <h2 className="text-2xl font-semibold mb-6 flex">
            Login <FaSignInAlt className="ml-2 text-[dodgerblue]" />
          </h2>
          <form onSubmit={onHandleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                {...register("password")}
                className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mt-6 flex flex-col items-center">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
              >
                Login
              </button>
              <span>
                already a store owner?{" "}
                <Link to={`/register-owner`}>
                  <span className="text-[dodgerblue] cursor-pointer">
                    register
                  </span>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginOwner;
