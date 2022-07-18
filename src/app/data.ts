export interface TouConfPriceSeason {
    createdUtc: number;
    name: string;
    priceSeasonId: number;
    scheduleId: number;
    startDay: number;
    startMonth: number;
    updatedBy: number;
    updatedUtc: number;
}

export interface TouConfPriceTierInterval {
    createdBy: number;
    createdUtc: number;
    dayType: number;
    priceSeasonId: number;
    startMinute: number;
    tierId: number;
}