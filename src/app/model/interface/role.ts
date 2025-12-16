export interface IRole{
   roleId:number,
   role:String
}

export interface IDesignation{
   designationId : number,
   designation: String
}

export interface APIResponseModel{
    message:String,
    result:boolean,
    data:any
}
export interface Employee{
   empName: String,
   empId: String,
   empCode: String,
   empEmailId: String,
   empDesignation: String,
   role: String
}

export interface ClientProject {
  empName: string;
  empId: number;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  projectName: string;
  startDate: Date; // or Date if you want to parse it
  expectedEndDate: Date; // or Date if you want to parse it
  clientName: string;
  clientProjectId: number;
}