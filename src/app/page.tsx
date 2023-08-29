import ItemRows from "@/components/Category/ItemRows";
import Clock from "@/components/Notify/Clock";
import StatusNotification from "@/components/Notify/StatusNotification";


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
      <aside className=" min-w-[400px] w-[40vw] min-h-[700px] h-[75vh] rounded-xl">
        <ItemRows/>
      </aside>
    </main>
  );
}
