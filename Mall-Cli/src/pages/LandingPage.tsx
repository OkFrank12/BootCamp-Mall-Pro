import { MdOutlineVisibility } from "react-icons/md";
import image from "../assets/istockphoto-1239305591-612x612-removebg-preview.png"
import { FiShoppingBag } from "react-icons/fi";
const LandingPage = () => {
  return (
    <div>
      <div className="w-[250px] h-[300px] relative m-2">
        <img className="w-[250px] h-[300px] bg-[gray] object-cover " src={image}/>
        <div className="w-full justify-center flex absolute bottom-0 pb-3 opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.2)] transition-all duration-500 h-[300px] items-end">
          <div className="w-[30px] h-[30px] rounded-[50%] bg-white  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] shadow-md hover:text-white duration-300 transition-all ">
            <MdOutlineVisibility />
          </div>
          <div className="w-[30px] h-[30px] rounded-[50%] bg-white ml-3  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-300 transition-all shadow-md">
            <FiShoppingBag />
          </div>
        </div>
      </div>
      <div className="flex items-center mt-2 justify-center w-[250px]">
        <span className="text-[12px] ml-1">(review)</span>{" "}
      </div>
      <div className="w-[200px] px-2 leading-0 ">title</div>
      <div className="flex items-center mt-2 justify-center w-[250px]">
        <div className="line-through mr-2 text-[silver] "></div>
        <div className="text-red-500">2000</div>
      </div>
    </div>
  );
};

export default LandingPage;
