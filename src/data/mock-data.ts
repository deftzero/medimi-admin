import { ICountry, IMedicalAccount, IPatient, IRemoteRevenue, IUser } from "./interfaces";

export const remoteRevenueData: IRemoteRevenue[] = [
  {
    id: 'RR-1',
    date: new Date(),
    time: '12:10',
    patient: {
      id: 'P1',
      firstName: 'John',
      lastName: 'Allen',
    },
    medicalAccount: {
      id: 'SN-H1',
      name: 'Clinique Amitie',
    },
    totalAmount: 25000,
    commission: 2750,
    createdAt: new Date(),
    status: 'ACTIVE'
  },
  {
    id: 'RR-2',
    date: new Date(),
    time: '12:10',
    patient: {
      id: 'P1',
      firstName: 'Moussa',
      lastName: 'Diop',
    },
    medicalAccount: {
      id: 'SN-H2',
      name: 'Centre Hospital',
    },
    totalAmount: 45000,
    commission: 3750,
    createdAt: new Date(),
    status: 'ACTIVE'
  }
]

export const userData: IUser[] = [
  {
    id: 'P1',
    firstName: 'John',
    lastName: 'Allen',
    avatar: 'https://i.pravatar.cc/300',
    phoneNumber: '778412563',
    email: 'johnallen@gmail.com',
    type: 'Global',
    createdAt: new Date(),
    status: 'ACTIVE'
  },
  {
    id: 'P2',
    firstName: 'Emily',
    lastName: 'Davis',
    avatar: 'https://i.pravatar.cc/300',
    phoneNumber: '778412563',
    email: 'emily.davis@example.com',
    type: 'Local',
    createdAt: new Date(),
    status: 'INACTIVE'
  },
]

export const patientData: IPatient[] = [
  {
    id: 'P1',
    firstName: 'John',
    lastName: 'Allen',
    avatar: 'https://i.pravatar.cc/300',
    phoneNumber: '778412563',
    email: 'johnallen@gmail.com',
    address: '676 Cresview Terrace',
    telephone: '+2239239923',
    dob: new Date(),
    bloodType: 'A+',
    background: ['Covid-19'],
    field: ['Type 1 Diabetes'],
    height: 179,
    weight: 80,
    relatives: [
      {
        id: 'P10',
        firstName: 'Deft',
        lastName: 'Cache',
        email: 'johnallen@gmail.com',
        dob: new Date(),
        phoneNumber: '+330203012399',
        avatar: 'https://i.pravatar.cc/300',
        type: 'Relative'
      },
      {
        id: 'P11',
        firstName: 'Deft',
        lastName: 'Cache',
        email: 'johnallen@gmail.com',
        dob: new Date(),
        phoneNumber: '+330203012399',
        avatar: 'https://i.pravatar.cc/300',
        type: 'Relative'
      }
    ],
    type: 'Main',
    createdAt: new Date(),
    status: 'ACTIVE'
  },
  {
    id: 'P2',
    firstName: 'Emily',
    lastName: 'Davis',
    avatar: 'https://i.pravatar.cc/300',
    phoneNumber: '778412563',
    email: 'emily.davis@example.com',
    type: 'Relative',
    createdAt: new Date(),
    status: 'INACTIVE'
  },
]

export const medicalAccountData: IMedicalAccount[] = [
  {
    id: 'SN-H1',
    name: 'Hospital Principle',
    avatar: 'https://images.unsplash.com/photo-1638552903142-d4323d81eb8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcxMjY5MzAxMg&ixlib=rb-4.0.3&q=40&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
    type: 'AH2',
    address: [
      {
        label: 'Liberty 6 BP, Dakar',
        latitude: 21.239293,
        longitude: 23.23992,
        indications: 'to the hospital'
      },
      {
        label: 'Dakar-Plateu Hauteur',
        latitude: 21.239293,
        longitude: 23.23992,
        indications: 'to the hospital'
      }
    ],
    documents: [
      {
        name: 'third meeting mom.doc',
        size: 2388488,
        type: 'doc',
        url: ''
      },
      {
        name: 'third meeting mom.pdf',
        size: 2388488,
        type: 'pdf',
        url: ''
      }
    ],
    gallery: [
      {
        name: 'third meeting mom.doc',
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxODczMw&ixlib=rb-4.0.3&q=40&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        size: 2388488,
        type: 'doc'
      },
      {
        name: 'third meeting mom.pdf',
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMxODczMw&ixlib=rb-4.0.3&q=40&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=480',
        size: 2388488,
        type: 'pdf'
      }
    ],
    subscriptions: [
      {
        id: 'SUB-1',
        type: 'Medicall for Facilities',
        activationDate: new Date(),
        startDate: new Date(),
        endDate: new Date(),
        amount: 1500,
        joinedFile: 'recu.pdf',
        createdAt: new Date(),
        status: 'Active'
      }
    ],
    staff: [
      {
        id: 'SN-H1-CH1',
        firstName: 'Modou',
        lastName: 'Ndiaye',
        email: 'moudou.ndiaye',
        role: 'Faculty Admin',
        service: 'Gynecology',
        createdAt: new Date(),
        status: 'Active'
      }
    ],
    services: [
      {
        id: 'SN-H1-S1',
        title: 'Gynecology',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu',
        numberOfStaff: 15,
        createdAt: new Date(),
        status: 'Active',
      }
    ],
    country: 'Senegal',
    region: 'Dakar',
    city: 'Dakar',
    collectionMethod: 'Wave',
    collectionNumber: '+221785412145',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu.',
    createdAt: new Date(),
    status: 'In Validation'
  },
]

export const countryData: ICountry[] = [
  {
    id: 'C1',
    name: 'Senegal',
    from: 'Democratic Republic',
    characterization: 'Masculine',
    healthAuthName: 'Ministry of Health',
    regions: [
      {
        id: 'R1',
        name: 'Dakar',
        createdAt: new Date()
      },
      {
        id: 'R2',
        name: 'Thies',
        createdAt: new Date()
      }
    ],
    cities: [
      {
        id: 'CT1',
        name: 'Dakar',
        district: 'Dakar Plateau',
        createdAt: new Date()
      },
      {
        id: 'CT1',
        name: 'Dakar',
        district: 'Colobane',
        createdAt: new Date()
      }
    ],
    iso: 'SN',
    timezone: 'Dakar (UTC)'
  },
  {
    id: 'C2',
    name: 'Japan',
    from: 'Democratic Republic',
    characterization: 'Masculine',
    iso: 'JP',
    timezone: 'Japan (UTC+09:00)'
  }
]

export const selectOptions: any = [
  {
    id: 'ACTIVE',
    name: 'ACTIVE'
  },
  {
    id: 'INACTIVE',
    name: 'INACTIVE'
  }
]