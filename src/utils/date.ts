import format from 'date-fns/format';
import * as RNLocalize from 'react-native-localize';
import {utcToZonedTime} from 'date-fns-tz';
import es from 'date-fns/locale/es';
import capitalize from 'lodash.capitalize';

export const dateFormatShort = (date: string) => {
  const zone = RNLocalize.getTimeZone();
  const dateProcessed = utcToZonedTime(date, zone);
  const month = capitalize(format(dateProcessed, 'MMMM', {locale: es}));
  const day = capitalize(format(dateProcessed, 'd', {locale: es}));
  const year = format(dateProcessed, 'yyyy', {locale: es});
  return `${day} de ${month}, ${year}`;
};
