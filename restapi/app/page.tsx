import Button from "@/components/Button";
import Buttoninactive from "@/components/Buttoninactive";
import MainCard from "@/components/MainCard";



export default function Home() {
  
  return (
    <>
    <div className="bg-white max-w-7xl mx-auto mt-12 py-8 px-8 rounded-4xl text-black">
      <div className="text-center mb-4">
        <h1 className="text-6xl ">Featured Flavors</h1>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex gap-2 flex-wrap">
          <Button text={"New Arival"}/>
          <Buttoninactive text={"Popular "} />
          <Buttoninactive text={"Customer  "} />
          <Buttoninactive text={"Choise "} />
        </div>
        <div>
          <input placeholder="Search Products" type="text" className="border border-gray-300 py-2 px-4 rounded"/>
        </div>
      </div>
      <MainCard />
      
    </div>
    </>
  );
}
