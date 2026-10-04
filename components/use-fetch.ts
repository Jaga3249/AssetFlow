"use client";

import useSWR, { SWRConfiguration } from "swr";

export const useFetch = <T>(
  key: string | null,
  fetcher: () => Promise<T>,
  options?: SWRConfiguration<T>,
) => {
  const { data, error, isLoading, isValidating, mutate } = useSWR<T>(
    key,
    fetcher,
    options,
  );

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
  };
};
