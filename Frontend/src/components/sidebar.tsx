import { NavLink } from 'react-router-dom'

import { FilePlus, UserSquare2, PlaneTakeoff, Settings, Smartphone } from 'lucide-react'

const items = [
  {
    title: 'Responsivas',
    to: '/responsives',
    icon: <FilePlus />
  },
  {
    title: 'Empleados',
    to: '/employees',
    icon: <UserSquare2 />
  },
  {
    title: 'Configuración',
    to: '/settings',
    icon: <Settings />
  },
  {
    title: 'Dispositivos',
    to: '/devices',
    icon: <Smartphone />
  }
]

const Sidebar = () => {
  return (
    <aside className='w-[248px] fixed border border-r-1 h-full py-[24px] px-[16px] flex flex-col justify-between'>
      <div className='w-[216px]'>
        <div className='mb-10 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white'>
          <PlaneTakeoff />
          <span className='ml-3 text-base font-semibold'>Volaris</span>
        </div>
        <ul>
          {items.map(item => (
            <li key={item.to}>
              <NavLink
                className={({ isActive }) =>
                  `flex h-[36px] mb-2 [&>svg]:w-[20px] [&>svg]:mr-5 rounded-lg hover:bg-accent ${isActive ? 'bg-accent' : ''
                  } items-center px-[12px] py-[8px]`
                }
                to={item.to}
              >
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar
