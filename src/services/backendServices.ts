import { SneakerInfo } from '@/types';
import { apiCatalog } from './apiCatalog';

export async function addNewSneaker(formData: SneakerInfo): Promise<boolean> {
    const { baseUrl, sneakers } = apiCatalog;
    try {
        const response = await fetch(baseUrl + sneakers, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            return true;
        } else {
            console.error('Error sending data');
            return false;
        }
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}

export async function getSneakers(): Promise<SneakerInfo[]> {
    const { baseUrl, sneakers } = apiCatalog;
    try {
        const response = await fetch(baseUrl + sneakers, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        });

        if (response.ok) {
            const data: SneakerInfo[] = await response.json();
            return data;
        } else {
            console.error('Error fetching data');
            return [];
        }
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

export async function deleteSneaker(id: string) {
    const { baseUrl, sneakers } = apiCatalog;
    try {
        const response = await fetch(baseUrl + sneakers + '/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
        });

        if (!response.ok) console.error('Error fetching data');
    } catch (error) {
        console.error('Error:', error);
    }
}
