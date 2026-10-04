"use client";

import { useState } from "react";
import { mutate as globalMutate } from "swr";

interface UseMutationOptions<TInput, TResponse> {
  key?: string;
  mutationFn: (input: TInput) => Promise<TResponse>;
}

export const useMutation = <TInput, TResponse>({
  key,
  mutationFn,
}: UseMutationOptions<TInput, TResponse>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const trigger = async (input: TInput): Promise<TResponse> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await mutationFn(input);

      if (key) {
        await globalMutate(key);
      }

      return response;
    } catch (error) {
      const mutationError =
        error instanceof Error ? error : new Error("Something went wrong");

      setError(mutationError);

      throw mutationError;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    trigger,
    isLoading,
    error,
  };
};
