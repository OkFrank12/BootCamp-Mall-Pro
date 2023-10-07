import { MdOutlineVisibility } from "react-icons/md";
import { FiShoppingBag } from "react-icons/fi";
import { useAllProducts } from "../hooks/CustomHook";
import { useEffect, useState } from "react";
import DetailPage from "./DetailPage";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../global/GlobalState";
import { Link } from "react-router-dom";
import { viewProducts } from "../api/storeAPI";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";
const LandingPage = () => {
  const { products, isLoading } = useAllProducts();
  const [state, setState] = useState<boolean>(false);
  const dispatch = useDispatch();
  const [elsState, setelsState] = useState<{}>({} as any);
  const cart = useSelector((state: any) => state.cart);

  const [data, setData] = useState<Array<any>>([]);
  const [view, setView] = useState<number>(12);
  const [page, setPage] = useState<number>(1);

  const lastPage = view * page;
  const firstPage = lastPage - view;
  const myState = data.slice(firstPage, lastPage);
  const countPage = Math.ceil(data.length / view);

  let pagination: number[] = [];
  for (let i = 1; i <= countPage; i++) {
    pagination.push(i);
  }
  useEffect(() => {
    viewProducts().then((res: any) => {
      setData([...data, ...res]);
    });
  }, []);
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-screen flex flex-col justify-center items-center">
        <h1 className="text-[100px] font-bold text-[#183049]">🛍️Aj Mall</h1>
        <h1 className="text-5xl text-white font-semibold mb-4">
          Welcome to Our E-Commerce Store
        </h1>
        <p className="text-xl text-white text-center max-w-lg">
          Discover a world of amazing products, unbeatable deals, and seamless
          shopping experiences.
        </p>
        <Link to={`/logic`}>
          <span className="cursor-pointer mt-6 bg-yellow-500 text-white py-2 px-[40px] rounded-md w-[250px] flex justify-center text-lg hover:bg-yellow-600 transition duration-300">
            Get Started
          </span>
        </Link>
      </div>
      <div className="flex min-h-[230vh] flex-wrap justify-between px-20 w-full bg-[#fbfbe7]">
        {isLoading ? (
          <div>loading products</div>
        ) : (
          myState?.map((el: any) => (
            <div className="w-[300px] h-[400px] border shadow-md relative m-3">
              <img
                className="w-[100%] h-[400px] object-cover "
                src={el?.image}
              />
              <div className="w-full justify-center flex absolute bottom-0 pb-3 opacity-0 hover:opacity-100 hover:bg-[rgba(0,0,0,0.2)] transition-all duration-500 h-[400px] items-end">
                <div className="w-[50px] h-[50px] text-slate-500 rounded-[50%] text-[30px] bg-white  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] shadow-md hover:text-white duration-300 transition-all ">
                  <MdOutlineVisibility
                    onClick={() => {
                      setelsState(el);
                      setState(true);
                    }}
                  />
                </div>
                <div className="w-[50px] h-[50px] text-slate-500 rounded-[50%] text-[30px] bg-white ml-3  flex justify-center items-center hover:cursor-pointer hover:bg-[#3e3e3e] hover:text-white duration-300 transition-all shadow-md">
                  <FiShoppingBag
                    onClick={() => {
                      dispatch(addToCart(el));
                    }}
                  />
                </div>
              </div>
              <div className="flex mt-2 border-b-[1px] border-[silver] border-r-[1px] rounded-md">
                <div>
                  <p className="uppercase font-semibold">{el?.title}</p>
                  <div>
                    <span className="text-slate-500 line-through">
                      ₦{el?.cost}
                    </span>
                    <span className="text-rose-500 ml-2">₦2,500.00</span>
                  </div>
                  <p className="font-extralight">{el?.category}</p>
                </div>
              </div>
            </div>
          ))
        )}

        {state && (
          <div className="fixed top-0 left-0 duration-300 transition-all ">
            <DetailPage els={elsState} setState={setState} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
