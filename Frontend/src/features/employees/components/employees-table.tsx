import { useSelector } from "react-redux"

import { RootState } from "@/store"
import { DataTableDemo } from "./table"

const EmployeesTable = () => {
  const employees =  useSelector((state: RootState) => state.employees.employees)

  console.log(employees)

  if(employees.loading) return <p>Loading...</p>

  if(employees.data) return <DataTableDemo employees={employees.data} />
}

export default EmployeesTable