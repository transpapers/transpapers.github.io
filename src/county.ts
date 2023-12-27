export interface County {
    court: Court,
    fingerprintLocations: FingerprintLocation[],
    publications: Publication[],
}

export interface Court {
    address: string,
    city: string,
    circuit: string,
    phone: string,
    website: string,
    specificCourtInfo?: string,
}

export interface FingerprintLocation {
    address: string,
    name: string,
    website: string,
}

export interface Publication {
    name: string,
    website: string,
}
