import BreadCrumb from '../components/BreadCrumb'
import CreateAccount from '../components/CreateAccount'
import Navbar from '../components/Navbar'
import Table from '../components/Table'

import { PiChatsCircleLight } from "react-icons/pi"

export default function Home() {
  return (
    <section className='relative'>
      <Navbar />
      <section className='px-8'>
        <BreadCrumb />
        <CreateAccount />
        <Table />
      </section>
      <div className='absolute bottom-0 cursor-pointer left-4 w-12 h-12 rounded-full border border-yellow-600 bg-yellow-200 flex justify-center items-center hover:shadow-lg duration-150'>
        <PiChatsCircleLight size={20} className={"text-yellow-600"} />
      </div>
    </section>
  )
}
