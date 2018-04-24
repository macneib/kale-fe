import * as _ from 'lodash';
import * as moment from 'moment';

export function toUtcFormattedTime(t: moment.Moment | Date) {
  return (moment.isMoment(t) ? (t as moment.Moment) : moment(t)).format(
    'M/D/YY HH:mm:ss,SSS'
  );
}

export function veryShortDate(t: moment.Moment | Date) {
  return (moment.isMoment(t) ? (t as moment.Moment) : moment(t)).format('M/D');
}

export function toShortTimeString(t: moment.Moment | Date) {
  return (moment.isMoment(t) ? (t as moment.Moment) : moment(t)).format(
    'HH:mm:ss,SSS'
  );
}

export interface ITimestamped {
  time: Date;
}

export class Timestamped<T> implements ITimestamped {
  constructor(public data: T, public time: Date) {}

  public toString() {
    return 'time=' + toUtcFormattedTime(this.time) + ';data=' + this.data;
  }
}
