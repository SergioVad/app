export function askOrderSort (db: object[], query: object) {
        return db.sort((a, b) => {
            if (a[query["sort"]].toLowerCase() > b[query["sort"]].toLowerCase()) {
                return 1;
            }
            if (a[query["sort"]].toLowerCase() < b[query["sort"]].toLowerCase()) {
                return -1;
            }
            return 0;
        })
}

export function deskOrderSort (db: object[], query: object) {
    return (
        db.sort((a, b) => {
            if (a[query["sort"]].toLowerCase() < b[query["sort"]].toLowerCase()) {
                return 1;
            }
            if (a[query["sort"]].toLowerCase() > b[query["sort"]].toLowerCase()) {
                return -1;
            }
            return 0;
        })
    )
}