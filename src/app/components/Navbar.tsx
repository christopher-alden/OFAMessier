"use client";
import TextButton from "./Buttons/TextButton";
import Logo from "./Logo/Logo";
import { useRouter } from 'next/navigation';


const Navbar = () =>{

    const router = useRouter();

    const handleRedirect = (url: string) => {
        router.push(url);
    };

    return(
        <div className="w-screen h-32 px-8 py-6 absolute">
            <div className=" bg-[#f1f1f1] w-full h-full rounded-xl px-16 py-2 flex justify-between items-center ">
                <Logo/>
                <section className="flex gap-4">
                    <TextButton variant='default' size='default' className="text-lg uppercase" >web</TextButton>
                    <TextButton variant='default' size='default' className="text-lg uppercase">schedule</TextButton>
                    <TextButton variant='default' size='default' className="text-lg uppercase">subjects</TextButton>
                    <TextButton variant='default' size='default' className="text-lg uppercase">ast</TextButton>
                    <TextButton variant='default' size='default' className="text-lg uppercase" onClick={()=>handleRedirect('/timer')}>timer</TextButton>
                </section>
            </div>
        </div>
    )
}

export default Navbar;