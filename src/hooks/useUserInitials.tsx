import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/index.api";
import { QueryKeys } from "../constants/queryKeys";

export function useUserInitials() {
  const { data, isLoading } = useQuery({
    queryKey: [QueryKeys.user],
    queryFn: getUser,
  });

  const firstLetter = data?.first_name?.charAt(0) ?? "";
  const secondLetter = data?.last_name?.charAt(0) ?? "";

  return {
    firstLetter,
    secondLetter,
    user: data,
    isLoading,
  };
}
