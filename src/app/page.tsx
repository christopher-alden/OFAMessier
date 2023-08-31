
import Calendar from "@/app/components/Calendar/Calendar";
import ItemRows from "@/app/components/Category/ItemRows";
import Clock from "@/app/components/Notify/Clock";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-36 px-24 gap-8">
      <section className="flex w-full h-[6vh] justify-between items-center">
        <h1 className="text-4xl suisse-bold uppercase">
          Dashboard
        </h1>
        <div className="rounded-xl w-fit flex justify-center items-center">
          <Clock />
        </div>
      </section>
      <section className="flex justify-between">
        <div className=" min-w-[400px] w-[40vw] min-h-[700px] h-[75vh] rounded-xl">
          <ItemRows/>
        </div>
        <div className="w-fit h-fit">
          <Calendar/>
        </div>
      </section>
    </main>
  );
}
