import { useState, FC } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../global/GlobalState";
import { AiOutlineClose } from "react-icons/ai";

interface iels {
  els?: any;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailPage: FC<iels> = ({ els, setState }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.6)] flex justify-center items-center relative  ">
        <div className="w-[80%] h-[80%] bg-white rounded shadow-md flex overflow-hidden absolute z-10 ">
          <img className="w-[50%] h-full object-cover" src={els?.image} />
          <div className="w-[50%] h-full flex justify-center flex-col px-12 ">
            <div
              className="absolute top-10 right-10 cursor-pointer w-[40px] h-[40px] flex justify-center items-center border rounded-md hover:text-white hover:bg-blue-500 duration-300 transition-all"
              onClick={() => {
                setState(false);
              }}
            >
              <AiOutlineClose />
            </div>
            <div className="my-3 uppercase font-bold text-[40px] ">
              {els?.title}
            </div>
            <div className="flex">
              <div className="text-slate-500 mr-2 line-through text-[25px] font-bold">
                ₦{els?.cost * 2}
              </div>
              <div className="text-rose-500 text-[25px] font-bold">
                ₦{els?.cost}
              </div>
            </div>
            <br />
            <hr />
            <br />
            <div className="text-[#7b7b7b]">{els?.description}</div>
            <div>
              <div
                className="flex mt-8 border w-[200px] h-[40px] justify-center items-center px-2 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300 "
                onClick={() => {
                  dispatch(addToCart(els));
                  setState(false);
                }}
              >
                Add to Cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
