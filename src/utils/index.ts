import { format } from "date-fns";


export function dateFormatter(date: string | any) {
  if(!date) return 'N/A'
  return format(new Date(date), "dd/MM/yyyy")
}