import { DayOfTheWeek } from './dateOfTheWeek'
import { Shift } from "./shift"

export interface WorkShiftDto {
    dateOfWeek: DayOfTheWeek
    shiftTime: Shift
}