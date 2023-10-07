import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Sider from "../static/Sider";

const LayOut = () => {
  const toggle = useSelector((state: any) => state.toggle);

  return (
    <>
      <div className="flex min-h-[100vh]">
        <Sider />
        <div className="w-full justify-end h-[100vh] flex bg-blue-100">
          <div
            className={`${
              toggle ? "w-[calc(100vw-250px)]" : "w-[calc(100vw-80px)]"
            } `}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayOut;
