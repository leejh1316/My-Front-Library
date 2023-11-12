export interface Soldier{
    id : number,
    soldierId : string,
    name : string,
    rank : "병장" | "상병" | "일병" | "이병",
    kisu : number,
    room : number
}