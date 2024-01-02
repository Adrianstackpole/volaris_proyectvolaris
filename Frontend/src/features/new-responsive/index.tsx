import { useEffect, useReducer, useState } from 'react'

import axios from 'axios'
import { Eye, Save } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Icons } from '@/components/ui/icons'
import TitlePage from '@/components/title-page'
import { Button } from '@/components/ui/button'
import { LocationsCombobox } from '@/components/locations-combobox'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

import { reducer } from './reducer'
import {
  GetAssignerAction,
  GetLocationsAction,
  GetReceiverAction,
  INITIAL_STATE,
  SaveResponsiveAction
} from './actions'

import { camelize } from '@/lib/request'
import { BACKEND_API_URL } from '@/lib/api'
import { deviceForm } from '@/lib/responsives'
import { getLocations } from '@/lib/baas/locations'
import { postResponsive } from '@/lib/baas/responsives'

import { Location } from '@/interfaces/locations'

import SearchEmployee from './components/search-employee'


type FormValues = {
  device: string
  brand: string
  serialNumber: string
  model: string
  description: string
}

const NewResponsive = () => {
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)
  const [location, setLocation] = useState('')
  const {
    register,
    formState: { isValid },
    handleSubmit
  } = useForm({
    defaultValues: {
      device: '',
      brand: '',
      serialNumber: '',
      model: '',
      description: ''
    },
    mode: 'onChange'
  })
  const assignerState = state.assigner
  const receiverState = state.receiver
  const locationsState = state.location
  const assigner = assignerState.data
  const receiver = receiverState.data
  const locations = locationsState.data

  useEffect(() => {
    dispatch({
      type: GetLocationsAction.GET_LOCATIONS_REQUEST
    })
    getLocations<Location>()
      .then(res => {
        dispatch({
          type: GetLocationsAction.GET_LOCATIONS_SUCCESS,
          payload: res!.map(location => ({
            label: location.name,
            value: location.id
          }))
        })
      })
      .catch(err => {
        dispatch({
          type: GetLocationsAction.GET_LOCATIONS_ERROR,
          payload: err
        })
      })
  }, [])

  useEffect(() => {
    console.log(state)
    if(state.saveResponsive.loaded) navigate('/responsive/' + state.saveResponsive.data)
  }, [state])

  const searchAssigner: SubmitHandler<FieldValues> = async ({ employeeNumber }) => {
    try {
      dispatch({
        type: GetAssignerAction.GET_ASSIGNER_REQUEST
      })

      const { data } = await axios.get(`${BACKEND_API_URL}/api/employees/${employeeNumber}`)

      if (!data) {
        console.log('Hola')
        dispatch({ type: GetAssignerAction.GET_ASSIGNER_ERROR, payload: 'No se encontró al empleado' })
        return
      }

      dispatch({
        type: GetAssignerAction.GET_ASSIGNER_SUCCESS,
        payload: data === null ? data : camelize(data)
      })
    } catch (e) {
      dispatch({
        type: GetAssignerAction.GET_ASSIGNER_ERROR,
        payload: e
      })
    }
  }

  const searchReceiver: SubmitHandler<FieldValues> = async ({ employeeNumber }) => {
    try {
      dispatch({
        type: GetReceiverAction.GET_RECEIVER_REQUEST
      })
      const { data } = await axios.get(
        `${BACKEND_API_URL}/api/employees/${employeeNumber}`
      )

      dispatch({
        type: GetReceiverAction.GET_RECEIVER_SUCCESS,
        payload: camelize(data)
      })
    } catch (e) {
      dispatch({
        type: GetReceiverAction.GET_RECEIVER_ERROR,
        payload: e
      })
    }
  }

  const onSubmit: SubmitHandler<FormValues> = async values => {
    try {
      dispatch({
        type: SaveResponsiveAction.SAVE_RESPONSIVE_REQUEST
      })
      const { file } = await postResponsive({
        ...values,
        assigner_id: assigner.id,
        receiver_id: receiver.id,
        location_id: Number(location)
      })

      dispatch({
        type: SaveResponsiveAction.SAVE_RESPONSIVE_SUCCESS,
        payload: file
      })

    } catch (e) {
      dispatch({
        type: SaveResponsiveAction.SAVE_RESPONSIVE_ERROR,
        payload: e
      })
    }
  }

  return (
    <>
      <TitlePage title='Crear nueva responsiva' />
      <div className='container pb-32'>
        <div className='my-5 flex justify-center'>
          <div className='flex flex-col'>
            <Label className='mb-2'>Ubicación</Label>
            <LocationsCombobox location={location} setLocation={setLocation} locations={locations || []} />
          </div>
        </div>

        <SearchEmployee 
          title="Entrega" 
          subtitle="Selecciona al empleado que entrega el equipo" 
          state={assignerState}
          onSubmit={searchAssigner} 
        />

        <SearchEmployee 
          title="Recibe" 
          subtitle="Selecciona al empleado que recibe el equipo" 
          state={receiverState}
          onSubmit={searchReceiver} 
        />

        {/* CARACTERISTICAS */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className='mt-5'>
            <CardHeader>
              <h1 className='text-2xl'>Caracteristicas de la herramienta</h1>
              <span className='text-white/40'>
                Describe el equipo que se esta entregando/recibiendo
              </span>
            </CardHeader>
            <CardContent>
              <div className='grid w-full mt-5 items-center gap-4'></div>
              <div className='grid w-full items-center gap-4'>
                {deviceForm.map(input => {
                  return (
                    <div key={input.id} className='flex flex-col space-y-2 px-2'>
                      <Label htmlFor={input.htmlFor}>{input.label}</Label>
                      <Input
                        {...register(input.name, input.register)}
                        id={input.id}
                        placeholder={input.placeholder}
                      />
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          <div className='my-5 flex justify-between mx-auto max-w-sm'>
            <Button type='button' className='mr-3'>
              <Eye />
              Vista previa
            </Button>
            <Button
              type='submit'
              disabled={
                !location ||
                !assigner ||
                !receiver ||
                !isValid ||
                state.saveResponsive.loading
              }
            >
              {state.saveResponsive.loading && (
                <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
              )}
              <Save />
              Guardar
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default NewResponsive
