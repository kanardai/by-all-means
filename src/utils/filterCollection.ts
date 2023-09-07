import { SneakerInfo } from '@/types';

export function filterCollection(
    sneakers: SneakerInfo[] | undefined,
    search: string
): SneakerInfo[] | undefined {
    const filteredItems = sneakers?.filter((sneaker) =>
        Object.values(sneaker).some((value) =>
            value.toString().toLowerCase().includes(search)
        )
    );

    return filteredItems;
}
