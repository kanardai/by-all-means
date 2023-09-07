import { SneakerInfo } from '@/types';

export default function formDataCheck(formData: SneakerInfo) {
    if (formData.sneakerName.trim() === '' || formData.brand.trim() === '') {
        return true;
    } else if (
        formData.price <= 0 ||
        formData.size <= 0 ||
        formData.year <= 0
    ) {
        return true;
    } else false;
}
