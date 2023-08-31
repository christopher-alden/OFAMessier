import { useRouter } from "next/navigation";

export const useRedirect = () => {
  const router = useRouter();

  const handleRedirect = (url: string) => {
    router.push(url);
  };

  return handleRedirect;
};