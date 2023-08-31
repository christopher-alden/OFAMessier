"use client"
import { useState } from "react";
import TextButton from "../components/Buttons/TextButton";
import { useRedirect } from "../components/Hooks/useRedirect";
import Logo from "../components/Logo/Logo";
import { registerUser } from "@/firebase"

const RegisterPage = () =>{
    const redirectTo = useRedirect();
    const [error, setError] = useState<boolean>(false);

    const handleRegister = async (e:any) => {
        e.preventDefault()
    
        const initial = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
    
        try {
            const user = await registerUser(initial, email, password);
            redirectTo('/'); 
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return(
        <div className="min-h-screen min-w-screen flex flex-col justify-center items-center">
            <div className="w-[500px] h-[480px] rounded-xl glass p-8 flex flex-col gap-4">
                <Logo className="text-white"/>
                <section>
                    <form onSubmit={handleRegister} className="flex flex-col gap-2 ">
                        <label className="flex flex-col gap-2">
                            <p className="text-white  text-sm">Initial</p> 
                            <input spellCheck={false} type="text" className="border-[1px] focus:ring-0 focus:outline-none focus:border-accent text-white px-4 py-2 bg-transparent rounded-lg " ></input>
                        </label>
                        <label className="flex flex-col gap-2">
                            <p className="text-white  text-sm">Email</p> 
                            <input spellCheck={false} type="text" className="border-[1px] focus:ring-0 focus:outline-none focus:border-accent text-white px-4 py-2 bg-transparent rounded-lg " ></input>
                        </label>
                        <label className="flex flex-col gap-2">
                            <p className="text-white  text-sm">Password</p> 
                            <input spellCheck={false} type="text" className="border-[1px] focus:ring-0 focus:outline-none focus:border-accent text-white px-4 py-2 bg-transparent rounded-lg " ></input>
                        </label>   
                        <TextButton variant='solid' size='default' className="suisse-bold text-base py-4 mt-10">Register</TextButton>  
                    </form>
                </section>
            </div>
        </div>
    );
}

export default RegisterPage