import { GetCourseOutput } from '../../Course/dto/getCourseOutput';
import { GetRoomOutput } from '../../Room/dto/getRoomOutput';
import { WorkShiftDto } from '../../WorkSheet/dto/WorkShiftDto';
export interface GetAllClassOuput {
  className: string;
  code: string;
  course: GetCourseOutput;
  room: GetRoomOutput;
  startDate: string;
  endDate: Date;
  limitStudent: number;
  currentStudent: number;
  lessionTimes: number;
  isActive: boolean;
  lsWorkSheet: WorkShiftDto[];
  id: number;
  numberSchedule: number;
  image: string;
}
