import { PagedFilterAndSortedRequest } from "../../Common/PagedFilterAndSortedRequest";

export interface PagedClassResultRequestDto extends PagedFilterAndSortedRequest {
  keyword?: string;
}
