import PinItem from "@/components/PinItem";
import { data } from "@/components/data";
export default function Home() {

  return (
    <main className="p-5">
      <div
        className=" w-full h-full md:px-5 
     columns-2 md:columns-3
     lg:columns-4 mb-4
     xl:columns-5 space-y-6 mx-auto"
      >
        {data.map((items, index) => {
          return <PinItem key={index} {...items} />
        })}


      </div>

    </main>
  )
}
