import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/istockphoto-1395329383-612x612-removebg-preview.png";
import { FaRegistered } from "react-icons/fa";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { ownerRegisterAPI } from "../../api/ownerAuthAPI";
import Swal from "sweetalert2";
import LoadingScreen from "../../utils/LoadingScreen";
const RegisterOwner = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const model = yup.object({
    owner: yup.string().required(),
    email: yup.string().email().trim().lowercase().required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password")]),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(model),
  });

  const onHandleSubmit = handleSubmit(async (data) => {
    const { owner, email, password, confirm } = data;

    setLoading(true);

    ownerRegisterAPI({ owner, email, password, confirm }).then(() => {
      setLoading(false);
      if (data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "A mail has been sent to your email",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate("/message");
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Can't Register Owner",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  });
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
          <h2 className="text-2xl font-semibold mb-6 flex">
            Register <FaRegistered className="ml-2 text-[dodgerblue]" />
          </h2>
          <form onSubmit={onHandleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600">Your Username</label>
              <input
                type="text"
                id="username"
                {...register("owner")}
                className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
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
            <div className="mb-4">
              <label className="block text-gray-600">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                {...register("confirm")}
                className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="mt-6 flex flex-col items-center">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300"
              >
                Register
              </button>
              <span>
                not a store owner?{" "}
                <Link to={`/login-owner`}>
                  <span className="text-[dodgerblue] cursor-pointer">
                    login
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

export default RegisterOwner;
