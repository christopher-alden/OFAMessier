import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes } from "react";
import { twMerge } from 'tailwind-merge';

type logoProps = ButtonHTMLAttributes<HTMLButtonElement>

const Logo = ({className}:logoProps) => {
  
  const router = useRouter();

  const handleRedirect = (url:string) =>{
    router.push(url)
  }
  return (
    <button className={twMerge('text-black text-2xl suisse-bold flex flex-col', className)} onClick={()=>handleRedirect('/')}>
      <p className='suisse-light text-xs'>one for all</p>
      <h1 className='-mt-1'>OFAMessier</h1>
    </button>
  )
};

export default Logo;
