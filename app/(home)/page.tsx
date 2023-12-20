import BreadCrumb from '../components/BreadCrumb'
import CreateAccount from '../components/CreateAccount'
import Navbar from '../components/Navbar'
import Table from '../components/Table'

export default function Home() {
  return (
    <main >
      <Navbar />
      <section className='px-8'>
        <BreadCrumb />
        <CreateAccount />
        <Table />
      </section>
    </main>
  )
}
