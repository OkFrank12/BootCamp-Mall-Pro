import { MdOutlineVisibility } from "react-icons/md";
import image from "../../assets/istockphoto-1239305591-612x612-removebg-preview.png";
import { FiShoppingBag } from "react-icons/fi";
const HomePage = () => {
  return (
    <div className="w-[250px] h-[300px] relative m-2 ">
      <img
        className="w-[250px] h-[300px] bg-[gray] object-cover "
        src={image}
      />
      <div className="w-full justify-center flex absolute bottom-0 pb-3 opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.2)] transition-all duration-500 h-[300px] items-end">
        <div className="w-[30px] h-[30px] rounded-[50%] bg-white  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] shadow-md hover:text-white duration-300 transition-all ">
          <MdOutlineVisibility />
        </div>
        <div className="w-[30px] h-[30px] rounded-[50%] bg-white ml-3  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-300 transition-all shadow-md">
          <FiShoppingBag />
        </div>
      </div>
      <div className="flex mt-2">
        <div>
          <p className="uppercase font-semibold">Title of the Products</p>
          <div>
            <span className="text-slate-500 line-through">₦2,500.00</span>
            <span className="text-rose-500 ml-2">₦2,500.00</span>
          </div>
          <p className="font-extralight">Accessories</p>
        </div>
        <img
          src={image}
          className="w-[70px] h-[70px] rounded-md border-[1px] border-[silver]"
        />
      </div>
    </div>
  );
};

export default HomePage;
