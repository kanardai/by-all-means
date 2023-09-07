export type SneakerInfo = {
    sneakerName: string;
    brand: string;
    price: number;
    size: number;
    year: number;
    _id?: string;
};

export type Sorting = keyof Pick<SneakerInfo, 'year' | 'price' | 'size'>;
