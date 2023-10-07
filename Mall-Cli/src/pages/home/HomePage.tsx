import { useSingleAccount } from "../../hooks/CustomHook";

const HomePage = () => {
  const { data, isLoading } = useSingleAccount();

  console.log(data);
  return (
    <>
      <div>{data?.owner}</div>
    </>
  );
};

export default HomePage;
