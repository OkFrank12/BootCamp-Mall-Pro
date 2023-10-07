import { useQuery } from "@tanstack/react-query";
import { getOneOwner } from "../api/ownerAuthAPI";
import { useSelector } from "react-redux";
import { viewProducts } from "../api/storeAPI";

export const useSingleAccount = () => {
  const user = useSelector((state: any) => state.owner);
  const { data, isLoading } = useQuery({
    queryKey: ["owner"],
    queryFn: () => getOneOwner(user),
  });

  return { data, isLoading };
};

export const useAllProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => viewProducts(),
  });

  return { products, isLoading };
};
