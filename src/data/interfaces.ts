export interface IRemoteRevenue {
  id: string;
  date: Date;
  time: string;
  patient: IPatient;
  medicalAccount: IMedicalAccount;
  totalAmount: number;
  commission: number;
  createdAt: Date;
  status: string
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  phoneNumber: string;
  dob?: Date,
  email: string;
  type: string;
  createdAt?: Date;
  status?: string
}

export interface IPatient {
  id: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  phoneNumber?: string;
  email?: string;
  type?: string;
  address?: string
  dob?: Date
  telephone?: string
  bloodType?: string
  background?: string[]
  field?: string[]
  height?: number
  weight?: number
  relatives?: IUser[]
  createdAt?: Date;
  status?: string
}

export interface IMedicalAccount {
  id: string;
  name: string;
  type?: string;
  avatar?: string,
  country?: string;
  region?: string;
  city?: string;
  collectionMethod?: string
  collectionNumber?: string
  address?: IAddress[]
  documents?: IFile[]
  gallery?: IFile[]
  subscriptions?: ISubscription[]
  staff?: IStaff[]
  services?: IService[]
  description?: string
  createdAt?: Date;
  status?: string
}

export interface IFile {
    name: string
    url: string
    size: number
    type: string
}

export interface IAddress {
  label: string
  latitude: number
  longitude: number
  indications: string
}

export interface ISubscription {
  id: string
  type: string
  activationDate: Date
  startDate: Date
  endDate: Date
  amount: number
  joinedFile: string,
  createdAt?: Date;
  status: string
}

export interface IStaff {
  id: string
  firstName: string
  lastName: string
  email: string
  role: string
  service: string
  createdAt?: Date;
  status: string
}

export interface IService {
  id: string
  title: string
  description: string
  numberOfStaff: number
  createdAt?: Date;
  status: string
}

export interface ICountry {
  id: string;
  name: string;
  from: string;
  characterization: string;
  iso: string;
  timezone: string;
  healthAuthName?: string;
  regions?: IRegion[]
  cities?: ICity[]
  createdAt?: Date;
  status?: string;
}

export interface IRegion {
  id: string
  name: string
  createdAt?: Date
}

export interface ICity {
  id: string
  name: string
  district: string
  createdAt?: Date
}