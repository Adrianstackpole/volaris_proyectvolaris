import { PersonIcon } from "@radix-ui/react-icons"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { AtSignIcon, BriefcaseIcon, MapPin, UserCircle } from "lucide-react"

import { Button, Card, CardContent, CardHeader, Input, Label } from "@/components/ui"

// import { SearchEmployeeType as FieldValues } from "@/lib/responsives"

import { AssignerState, ReceiverState } from "../actions"

interface Props {
    state: AssignerState | ReceiverState,
    onSubmit: SubmitHandler<FieldValues>,
    title: string,
    subtitle: string,
}

const SearchEmployee = ({ onSubmit, state, title, subtitle }: Props) => {
    const { register, handleSubmit } = useForm()

    return (
        <Card className='mt-5'>
            <CardHeader>
                <h1 className='text-2xl'>{title}</h1>
                <span className='text-white/40'>{subtitle}</span>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex w-full'>
                        <div className='flex flex-col w-full space-y-2 px-2'>
                            <Label htmlFor='target-employee-number'># de empleado</Label>
                            <Input
                                disabled={state.loading}
                                {...register("employeeNumber", { required: true })}
                                className='w-100 '
                                id='target-employee-number'
                            />
                        </div>
                        <Button type="submit" className='self-end'>Buscar</Button>
                    </div>
                </form>
                {state.data &&
                    <div className="grid lg:grid-cols-3 md:grid-cols-1 mt-5">
                        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                            <PersonIcon className="mt-px h-5 w-5" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{state.data.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    Nombre
                                </p>
                            </div>
                        </div>
                        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                            <BriefcaseIcon />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{state.data.position.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    Puesto
                                </p>
                            </div>
                        </div>
                        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                            <AtSignIcon />
                            <div className="space-y-1">
                                <a href={`mailto:${state.data.email}`} className="text-sm font-medium leading-none">{state.data.email}</a>
                                <p className="text-sm text-muted-foreground">
                                    Correo electrónico
                                </p>
                            </div>
                        </div>
                        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                            <UserCircle />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{state.data.boss.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    Jefe
                                </p>
                            </div>
                        </div>
                        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                            <UserCircle />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{state.data.boss.position.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    Puesto del jefe
                                </p>
                            </div>
                        </div>
                        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all">
                            <MapPin />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">{state.data.location.name}</p>
                                <p className="text-sm text-muted-foreground">
                                    Ubicación
                                </p>
                            </div>
                        </div>
                    </div>
                }
            </CardContent>
        </Card>
    )
}

export default SearchEmployee