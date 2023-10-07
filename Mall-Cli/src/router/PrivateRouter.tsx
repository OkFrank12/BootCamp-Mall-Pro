import React, { PropsWithChildren, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRouter: React.FC<PropsWithChildren> = ({ children }) => {
  const owner = useSelector((state: any) => state.owner);
  const [state, setState] = useState<boolean>(false);

  return (
    <div>
      {state ? (
        <div>{children}</div>
      ) : (
        <div>
          <Navigate to={`/login-owner`} />
        </div>
      )}
    </div>
  );
};

export default PrivateRouter;
