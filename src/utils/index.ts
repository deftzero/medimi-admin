import { format } from "date-fns";


export function dateFormatter(date: string | any) {
  if(!date) return 'N/A'
  return format(new Date(date), "dd/MM/yyyy")
}

export const byteToHumanSize = (bytes: any = 0, decimals = 2) => {
  let units = ["B", "KB", "MB", "GB", "TB", "PB"];
  let i = 0;
  for (i; bytes > 1024; i++) {
    bytes /= 1024;
  }
  return parseFloat(bytes).toFixed(decimals) + " " + units[i];
};

export function returnTagColorByStatus(status: string) {
  const colorMap: any = {
    ACTIVE: 'green',
    INACTIVE: 'red'
  }
  return colorMap[status]
}