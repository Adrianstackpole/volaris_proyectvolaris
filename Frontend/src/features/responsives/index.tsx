import { useEffect } from 'react'

import { Plus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

import { getResponsivesThunk } from '@/store/responsives/thunks'

import ResponsivesTable from './components/responsives-table'

const Responsives = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getResponsivesThunk())
  }, [dispatch])

  return (
    <div className='w-full'>
      <div className='flex justify-between'>
        <p className='text-2xl'>Responsivas</p>
        <Button onClick={() => navigate('/new-responsive')}>
          <Plus className='mr-2' />
          Nueva responsiva
        </Button>
      </div>
      <Separator className='my-5' />
      <ResponsivesTable />
    </div>
  )
}

export default Responsives
