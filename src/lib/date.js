export function nowDay(date) {
    let strDate = 'Y-m-d'
        .replace('Y', date.getFullYear())
        .replace('m', () => {
        if (date.getMonth()+1 >= 10)
            return date.getMonth()+1;
        else return `0${date.getMonth()+1}`;
        })
        .replace('d', date.getDate());
    return strDate;
}
