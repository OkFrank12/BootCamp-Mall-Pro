import image from "../../assets/istockphoto-1239305591-612x612-removebg-preview.png";
const MessagePage = () => {
  return (
    <div className="w-full h-[100vh] items-center flex flex-col bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400">
      <img src={image} className="w-[500px]" />
      <div className="flex-col flex justify-center items-center">
        <div className=" w-[600px] text-center flex flex-col items-center">
          <p className="my-5 text-white text-[50px] font-bold">
            A Verification Mail has been sent to your email 😜👍✌️
          </p>
          <span className="text-white">
            visit your gmail
             <a href="https://mail.google.com" className="text-[crimson] ml-2 uppercase">
               visit google
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
