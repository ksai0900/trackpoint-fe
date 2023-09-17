import { Appointments } from "./appointments";
import { PagResponseMeta } from "./pag-response-meta";

export interface PaginationResponse<T> {
    data: T[];
    meta: PagResponseMeta;
}

