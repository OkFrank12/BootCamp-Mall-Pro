import { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useDispatch, useSelector } from "react-redux";

const CheckOutPage = () => {
  const cart = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const [state, setState] = useState<number>(0);
  const [stateURL, setStateURL] = useState<string>("");
  const [stateResult, setStateResult] = useState<number | any>();

  const [toggle, setToggle] = useState<boolean>(false);

  const result = () => {
    let cartData = cart?.map((el: any) => {
      return el.cost * el.qty;
    });

    if (cartData.length === 0) {
      return;
    }
    return cartData?.reduce((a: number, b: number) => {
      return a + b;
    });
  };

  useEffect(() => {
    setStateResult(result() + state);
  }, [state, cart]);

  const config: any = {
    reference: new Date().getTime().toString(),
    email: "user@example.com",
    amount: stateResult! * 100,
    publicKey: "pk_test_5a0581a5d3a5e4eff176456546f8e4b3f32d2d01",
  };

  const onSuccess: any = (reference: any) => {
    console.log(reference);
  };

  const onClose = () => {
    console.log("closed");
  };

  const initializePayment = usePaystackPayment(config);

  const bestResult: any = parseInt(stateResult);
  useEffect(() => {
    if (stateURL === "") {
      return;
    } else {
      window.location.assign(stateURL);
    }
  }, [stateURL]);
  return (
    <>
      <div className=""></div>
    </>
  );
};

export default CheckOutPage;
