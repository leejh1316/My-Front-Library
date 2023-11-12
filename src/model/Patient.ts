export interface Patient{
  soldierId: string;
  name: string;
  rank: "이병" | "일병" | "상병" | "병장";
  reason: string;
  kisu: number;
  room: number;
  startTime: string;
  endTime: string;
  group:"단기"|"장기"
}
export interface PatientGroup{
  name:string,
  jangiSoldier: Patient[],
  dangiSoldier: Patient[]
}