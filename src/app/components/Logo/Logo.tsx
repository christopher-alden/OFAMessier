import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  
  return (
    <h1 className="text-black text-2xl suisse-bold">OFAMessier</h1>
  )
};

export default Logo;
