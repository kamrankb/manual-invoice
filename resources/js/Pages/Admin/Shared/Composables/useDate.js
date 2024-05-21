import { format, startOfDay, endOfDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, subMonths, startOfYear, endOfYear } from 'date-fns';

export function useDate() {
  const range = (formatString="") => {
    const utc = (formatString) => {
      const dateTime = new Date().toISOString();
      const dates = dateRange(dateTime, formatString);
      
      return {
        date: dateTime,
        range: dates
      }
    };

    const gmt = (formatString) => {
      const gmtDatetime = new Date();
      gmtDatetime.setHours(gmtDatetime.getHours() + 5); // Add 5 hours to get GMT+5 datetime

      const dateTime = gmtDatetime.toISOString();
      const dates = dateRange(dateTime, formatString);
      
      return {
        date: dateTime,
        range: dates
      }
    };

    const dateRange = (dateTime, formatString) => {
      const currentDate = new Date(dateTime);

      // Define date ranges
      const todayStart = startOfDay(currentDate);
      const todayEnd = endOfDay(currentDate);

      const currentMonthStart = startOfMonth(currentDate, 1);
      const currentMonthEnd = endOfMonth(currentDate);

      const lastWeekStart = startOfWeek(currentDate, 1);
      const lastWeekEnd = endOfWeek(currentDate, 1);

      const lastMonthStart = startOfMonth(subMonths(currentDate, 1));
      const lastMonthEnd = endOfMonth(subMonths(currentDate, 1));

      const datesObj = {
        today: {
          date: format(todayStart, 'yyyy-MM-dd HH:mm:ss'),
          formatted: format(todayStart, (formatString ? formatString : 'MMM d'))
        },
        currentMonth: {
          start: format(currentMonthStart, 'yyyy-MM-dd HH:mm:ss'),
          end: format(currentMonthEnd, 'yyyy-MM-dd HH:mm:ss'),
          formatted: {
            start: format(currentMonthStart, (formatString ? formatString : 'MMM d')),
            end: format(currentMonthEnd, (formatString ? formatString : 'MMM d'))
          }
        },
        lastWeek: {
          start: format(lastWeekStart, 'yyyy-MM-dd HH:mm:ss'),
          end: format(lastWeekEnd, 'yyyy-MM-dd HH:mm:ss'),
          formatted: {
            start: format(lastWeekStart, (formatString ? formatString : 'MMM d')),
            end: format(lastWeekEnd, (formatString ? formatString : 'MMM d'))
          }
        },
        LastMonth: {
          start: format(lastMonthStart, 'yyyy-MM-dd HH:mm:ss'),
          end: format(lastMonthEnd, 'yyyy-MM-dd HH:mm:ss'),
          formatted: {
            start: format(lastMonthStart, (formatString ? formatString : 'MMM d')),
            end: format(lastMonthEnd, (formatString ? formatString : 'MMM d'))
          }
        },
      };

      return datesObj;
    };
    
    return {
      gmt,
      utc
    };
  };

  const currentYear = () => {
    const currentDate = new Date();
    
    return {
      start: format(startOfYear(currentDate, 1), 'dd/MM/yyyy'),
      end: format(endOfYear(currentDate), 'dd/MM/yyyy')
    }
  };

  const parseDate = (dateString) => {
    console.log(dateString)
    const [day, month, year] = dateString?.split("/");
    return new Date(year, month - 1, day);
  };

  return { range, currentYear, parseDate };
}