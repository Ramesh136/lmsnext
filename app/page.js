import { UserButton } from "@clerk/nextjs";
import Header from "./(Home)/_components/Header";
import SideBarNav from "./(Home)/_components/SideBarNav";


export default function Home() {
  return <>
    <div className='h-full w-64 flex-col fixed inset-y-0 z-50'>
        <SideBarNav />
      </div>
      <div className='fixed inset-x-0 bg-transparent'>
      <Header />
    </div>
    <UserButton afterSignOutUrl="/sign-in"/>
    
    <div className="mt-20 ml-64 pt-10 pl-5"> 
    <h2 className="text-7xl"> Welcome Champ </h2>
    <h2 className="mt-10 text-4xl">Lets Learn , head to Browse </h2>
      
    </div>
  </>
}
