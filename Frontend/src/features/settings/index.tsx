import { useEffect } from "react"

import { useDispatch } from "react-redux"

import { SelectTheme } from "@/components"
import { Separator } from "@/components/ui"

import { getSettingsThunk } from "@/store/settings"

import Numeration from "./components/numeration"

const Settings = () => {
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(getSettingsThunk())
  }, [dispatch])

  return (
    <div className='w-full'>
      <div className='flex justify-between'>
        <p className='text-2xl'>Configuración</p>
      </div>
      <Separator className='my-5' />
      <SelectTheme />
      <div className="mt-4">
        <Numeration  />
      </div>
    </div>
  )
}

export default Settings