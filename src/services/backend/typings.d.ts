declare namespace API {
  type AddAccountRequest = {
    email: string;
    password: string;
    phone: string;
    type: number;
  };

  type AddAccountResponse = {
    email?: string;
    password?: string;
    userId?: number;
  };

  type AddDoctorInfoRequest = {
    department: number;
    description: string;
    email: string;
    gender: number;
    name: string;
    password: string;
    phone: string;
    position: string;
    type: number;
  };

  type AddMonitorInfoRequest = {
    patientHeathMonitorEntity?: PatientHeathMonitorEntity;
    type: number;
    userId: number;
  };

  type AddPatientBaseInfoRequest = {
    patientInfoEntity?: PatientInfoEntity;
    type: number;
    userId: number;
  };

  type DepartmentLabelEntity = {
    departmentId?: string;
    departmentName?: string;
  };

  type DoctorEntity = {
    departmentName?: string;
    description?: string;
    gender?: string;
    name?: string;
    phone?: string;
    position?: string;
    userId?: number;
  };

  type LoginRequestDTO = {
    email?: string;
    loginType?: number;
    password?: string;
  };

  type LoginResponseDTO = {
    token?: string;
    type?: number;
    userId?: number;
  };

  type LoginStateDTO = {
    avatar?: string;
    email?: string;
    phone?: string;
    type?: number;
    userId?: number;
  };

  type PatientHeathMonitorEntity = {
    bloodOxygen?: string;
    pulse?: string;
    temperature?: string;
    time?: string;
    weight?: string;
  };

  type PatientInfoEntity = {
    age?: number;
    birthday?: string;
    department?: number;
    email?: string;
    healthMonitor?: string;
    height?: number;
    location?: string;
    name?: string;
    sickHistory?: string;
    sickReason?: string;
    weight?: number;
  };

  type PatientInfoList = {
    patientQueryInfoEntities?: PatientQueryInfoEntity[];
    total?: number;
  };

  type PatientQueryInfoEntity = {
    age?: number;
    birthday?: string;
    departmentName?: string;
    email?: string;
    healthMonitor?: string;
    height?: number;
    location?: string;
    name?: string;
    sickHistory?: string;
    sickReason?: string;
    weight?: number;
  };

  type QueryDepartmentResponse = {
    departmentLabelEntityList?: DepartmentLabelEntity[];
  };

  type queryDoctorListUsingGETParams = {
    pageNo?: number;
    pageSize?: number;
  };

  type QueryDoctorResponse = {
    doctorEntityList?: DoctorEntity[];
    total?: number;
  };

  type queryHealthMonitorRecordUsingGETParams = {
    userId: number;
  };

  type queryPatientInfoUsingGETParams = {
    departmentName?: string;
    name?: string;
    pageNo: number;
    pageSize: number;
  };

  type ReserveDoctorRequest = {
    beginTime?: string;
    doctorId?: number;
    endTime?: string;
    patientId?: number;
    reservation?: string;
  };

  type queryReserveDoctorListUsingGETParams = {
    pageNo: number;
    pageSize: number;
    type?: number;
    userId?: number;
  };

  type ResponseQueryHealthMonitorRecordResponse = {
    code?: string;
    data?: QueryHealthMonitorRecordResponse;
    info?: string;
  };

  type ReserveDoctorEntity = {
    department?: string;
    description?: string;
    gender?: string;
    name?: string;
    phone?: string;
    position?: string;
    reserved?: boolean;
    userId?: number;
  };

  type ReserveDoctorList = {
    reserveDoctorEntityList?: ReserveDoctorEntity[];
    total?: number;
  };

  type reserveDoctorUsingGETParams = {
    beginTime?: string;
    doctorId?: number;
    endTime?: string;
    patientId?: number;
    reservation?: string;
  };

  type ResponseAddAccountResponse = {
    code?: string;
    data?: AddAccountResponse;
    info?: string;
  };

  type ResponseLoginResponseDTO = {
    code?: string;
    data?: LoginResponseDTO;
    info?: string;
  };

  type ResponseLoginStateDTO = {
    code?: string;
    data?: LoginStateDTO;
    info?: string;
  };

  type ResponsePatientInfoList = {
    code?: string;
    data?: PatientInfoList;
    info?: string;
  };

  type ResponseQueryDepartmentResponse = {
    code?: string;
    data?: QueryDepartmentResponse;
    info?: string;
  };

  type ResponseQueryDoctorResponse = {
    code?: string;
    data?: QueryDoctorResponse;
    info?: string;
  };

  type ResponseReserveDoctorList = {
    code?: string;
    data?: ReserveDoctorList;
    info?: string;
  };

  type Responsestring = {
    code?: string;
    data?: string;
    info?: string;
  };

  type MonitorData = {
    series?: Series;
    xAxis?: XAxis;
    yAxis?: YAxis;
  };

  type QueryHealthMonitorRecordResponse = {
    days?: number;
    oxygenData?: MonitorData;
    pulseData?: MonitorData;
    temperature?: MonitorData;
    weightData?: MonitorData;
  };
  type Series = {
    data?: number[];
    name?: string;
    type?: string;
  };

  type XAxis = {
    data?: string[];
    type?: string;
  };

  type YAxis = {
    type?: string;
  };
}
