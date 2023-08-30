import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  const handleRedirect = (url:string) =>{
    router.push(url)
  }
  return (
    <button className="text-black text-2xl suisse-bold flex flex-col" onClick={()=>handleRedirect('/')}>
      <p className='suisse-light text-xs'>one for all</p>
      <h1 className='-mt-1'>OFAMessier</h1>
    </button>
  )
};

export default Logo;
