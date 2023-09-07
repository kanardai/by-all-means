import { SneakerInfo } from '@/types';

export function sortCollection(
    sneakers: SneakerInfo[] | undefined,
    sort: keyof Pick<SneakerInfo, 'year' | 'price' | 'size'>
): SneakerInfo[] | undefined {
    const filteredItems = sneakers?.sort((a, b) => a[sort] - b[sort]);
    return filteredItems;
}
