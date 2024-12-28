import startOfWeek from 'date-fns/startOfWeek'
import { format, parse, getDay } from 'date-fns';
import esEs from 'date-fns/locale/es'
import { dateFnsLocalizer } from 'react-big-calendar';

const locales = {
  'es': esEs,
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})