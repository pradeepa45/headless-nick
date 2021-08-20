import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <h4><time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time></h4>
}