import Logo from './Logo'
import CompanyTitle from './CompanyTitle'
import Menu from './Menu'
import Support from './Support'

const Sidebar = () => {
  return (
    <aside className='w-80 p-3 border-l h-screen flex flex-col justify-between'>
      <section>
        <Logo />
        <CompanyTitle />
        <Menu />
      </section>
      <Support />
    </aside>
  )
}

export default Sidebar