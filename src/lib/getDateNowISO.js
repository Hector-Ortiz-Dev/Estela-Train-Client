/* eslint-disable no-unused-vars */
import { formatISO } from "date-fns";

export function getDateNowISO(){
    const nowDate = new Date();
    
    // Formateo a ISO 8601
    const dateISOFormat = formatISO(nowDate);

    return dateISOFormat;
}