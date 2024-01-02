import { Separator } from "./ui/separator"

interface Props {
  children?: JSX.Element
  title: string
}

const TitlePage = ({ children, title }: Props ) => {
  return (
    <>
      <div className='flex justify-between'>
        <p className='text-2xl'>{title}</p>
        {children}
      </div>
      <Separator className='my-5' />
    </>
  )
}

export default TitlePage
