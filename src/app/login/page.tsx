import TextButton from "../components/Buttons/TextButton"
import Logo from "../components/Logo/Logo"

const LoginPage = () =>{
    return(
        <div className="min-h-screen min-w-screen flex flex-col justify-center items-center">
            <div className="w-[500px] h-fit rounded-xl glass p-8 pb-12 flex flex-col gap-4">
                <Logo className="text-white"/>
                <section>
                    <form  className="flex flex-col gap-2 ">
                        <label className="flex flex-col gap-2">
                            <p className="text-white  text-sm">Initial</p> 
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
    )
}

export default LoginPage