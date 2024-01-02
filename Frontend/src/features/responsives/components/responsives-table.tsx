import { useSelector } from "react-redux"

import { RootState } from "@/store"
import { DataTableDemo } from "./table"

const ResponsivesTable = () => {
  const responsives =  useSelector((state: RootState) => state.responsives.responsives)

  if(responsives.loading) return <p>Loading...</p>

  if(responsives.data) return <DataTableDemo responsives={responsives.data} />
}

export default ResponsivesTable