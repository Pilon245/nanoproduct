export class CreateDoctorInputModel {
  name: string;
  spec: string;
}

export class CreateRecordInputModel {
  user_id: string;
  doctor_id: string;
  slot: Date;
}

export class DoctorsFactory {
  constructor(public id: string, public name: string, public spec: string) {}
}
