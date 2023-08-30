import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  const handleRedirect = (url:string) =>{
    router.push(url)
  }
  return (
    <button className="text-black text-2xl suisse-bold" onClick={()=>handleRedirect('/')}>OFAMessier</button>
  )
};

export default Logo;
