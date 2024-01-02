import Sidebar from './sidebar'

type Props = {
  children: JSX.Element
}

const Layout = ({ children }: Props) => {
  return (
    <div className='h-[100vh] flex'>
      <Sidebar />
      <div className='p-10 w-full h-full ml-[248px]'>{children}</div>
    </div>
  )
}

export default Layout
