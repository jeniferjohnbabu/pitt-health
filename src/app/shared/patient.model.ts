export class PatientModel {
    constructor(
        public firstName: string,
        public lastName: string,
        public visits: number,
        public age: number,
        public pcp: string,
        public insurance: string,
        public payment: number
    ) {}
}