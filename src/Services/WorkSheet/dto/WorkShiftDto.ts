import { DayOfTheWeek } from './dateOfTheWeek'
import { Shift } from "./Shift"

export interface WorkShiftDto {
    dateOfWeek: DayOfTheWeek
    shiftTime: Shift
}