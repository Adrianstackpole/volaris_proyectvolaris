import { useSelector } from "react-redux"

import { RootState } from "@/store"

import { Card, CardHeader, CardTitle, CardDescription, Input } from "@/components"

const Numeration = () => {
  const { loading, data } =  useSelector((state: RootState) => state.settings.settings)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Numeración de las responsivas</CardTitle>
            <CardDescription>
              Escribe el número donde iniciará la numeración de las responsivas
            </CardDescription>
          </div>
          <Input className="w-1/12" disabled={loading} value={data?.numeration || ""} />
        </div>

      </CardHeader>
    </Card>
  )
}

export default Numeration