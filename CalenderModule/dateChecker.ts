import { useSelector } from 'react-redux';
import moment, { Moment } from 'moment';
import JapaneseHolidays from 'japanese-holidays';
import type { root } from '../../../interfaces/slices';

export const dateChecker = ({ date }: { date: Moment }) => {
  const { weekday, holiday, start, end, otherWorkdays, otherHolidays } =
    useSelector((s: root) => s.siteState.siteHoliday);
  // console.log(weekday, holiday, otherWorkdays, otherHolidays, start, end);
  //   start date check
  if (start !== undefined) {
    if (date.isBefore(moment(start), 'day')) {
      return false;
    }
  }
  //   end date check
  if (end !== undefined) {
    if (date.isAfter(moment(end), 'day')) {
      return false;
    }
  }
  //   extra workday check
  if (otherWorkdays !== undefined) {
    const dateStr = date.format('YYYYMMDD');
    if (otherWorkdays.includes(dateStr)) {
      return true;
    }
  }
  //   extra holiday check
  if (otherHolidays !== undefined) {
    const dateStr = date.format('YYYYMMDD');
    if (otherHolidays.includes(dateStr)) {
      return false;
    }
  }
  //   holiday check
  if (holiday) {
    const check = JapaneseHolidays.isHoliday(date.toDate());
    if (check) {
      return true;
    }
  }
  //   weekday check
  const week = date.lang('en').format('ddd');
  // console.log('wee', week);
  // console.log('day', weekday[week]);
  if (!weekday[week]) {
    return false;
  }

  return true;
};
