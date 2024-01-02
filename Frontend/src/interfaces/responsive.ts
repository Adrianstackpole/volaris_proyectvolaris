import { Employee } from "@/interfaces/employee"

export interface Responsive {
  id: string
  serialNumber: string
  brand: string
  model: string
  type: string
  comment: string
  isSigned: boolean
  createdAt: string
  assigner: Employee
  approver: Employee
  receiver: Employee
}