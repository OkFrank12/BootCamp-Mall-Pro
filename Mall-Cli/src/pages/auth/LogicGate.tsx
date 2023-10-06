import image from "../../assets/istockphoto-1338265862-612x612-removebg-preview.png";

const LogicGate = () => {
  return (
    <div className="w-full h-[100vh] items-center flex bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400">
      <img src={image} className="w-[700px]" />
      <div className=" w-[600px] flex flex-col items-center">
        <p className="my-5 text-white text-[50px] font-bold">
          Welcome to AjMall
        </p>
        <div className="flex flex-col items-center">
          <span className="text-white font-semibold">
            Sign in as an administrator to access privileged features and
            settings
          </span>
          <br />
          <button className="w-[300px] text-[dodgerblue] rounded-md py-3 bg-white shadow-md hover:scale-[1.03] transition-all duration-500">
            Login as an Admin
          </button>
        </div>
        <br />
        <br />
        <div className="flex flex-col items-center">
          <span className="text-white font-semibold text-center">
            Sign in as a store owner to oversee and manage your store's
            operations and settings.
          </span>
          <br />
          <button className="w-[300px] rounded-md py-3 bg-white shadow-md hover:scale-[1.03] transition-all duration-500 text-[dodgerblue]">
            Login as an store owner
          </button>
        </div>
        <br />
        <br />
        <div className="flex flex-col items-center">
          <span className="text-white font-semibold text-center">
            Sign in as a dispatch rider to access delivery-related functions and
            assignments.
          </span>
          <br />
          <button className="w-[300px] text-[dodgerblue] rounded-md py-3 bg-white shadow-md hover:scale-[1.03] transition-all duration-500">
            Login as a dispatcher
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogicGate;
