export interface VehicleListResponse {
    count: number
    next: string
    previous: string
    results: Vehicle[]
}

export interface Vehicle{
   
  name: string
  model: string
  length: string
  url: string
}