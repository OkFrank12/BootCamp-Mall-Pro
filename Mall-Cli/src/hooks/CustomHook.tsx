import { useQuery } from "@tanstack/react-query";
import { getOneOwner } from "../api/ownerAuthAPI";
import { useSelector } from "react-redux";

export const useSingleAccount = () => {
  const user = useSelector((state: any) => state.owner);
  const { data, isLoading } = useQuery({
    queryKey: ["owner"],
    queryFn: () => getOneOwner(user),
  });

  return { data, isLoading };
};
