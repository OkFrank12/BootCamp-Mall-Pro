import { Link } from "react-router-dom";
import image from "../../assets/istockphoto-1239305591-612x612-removebg-preview.png";
import { BiReset } from "react-icons/bi";
const ChangePassword = () => {
  return (
    <div className="w-full h-[100vh] items-center flex bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400">
      <img src={image} className="w-[700px]" />
      <div className="flex-col flex justify-center items-center">
        <div className=" w-[600px] flex flex-col items-center">
          <p className="my-5 text-white text-[50px] font-bold">
            Change Now!!! 😜👍✌️
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl font-semibold mb-6 flex">
            Change Password <BiReset className="ml-2 text-[dodgerblue]" />
          </h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-600">Password</label>
              <input
                type="password"
                id="password"
                name="password"
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

export default ChangePassword;
