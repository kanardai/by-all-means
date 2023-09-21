/*eslint-disable */

import { SneakerInfo } from '@/types';

export let formDataAlerts: (keyof Omit<SneakerInfo, '_id'>)[] = [];

export const inputValidation = (
    formData: SneakerInfo
): typeof formDataAlerts => {
    formDataAlerts = [];
    // Validate sneakerName (at least one character)
    if (formData.sneakerName.trim().length === 0) {
        formDataAlerts.push('sneakerName');
    }

    // Validate brand (at least one character)
    if (formData.brand.trim().length === 0) {
        formDataAlerts.push('brand');
    }

    // Validate price (5 numbers from 1 to 99999)
    if (
        formData.price < 1 ||
        formData.price > 99999 ||
        !/^(?:[1-9]\d{0,3}|9999)$/.test(formData.price.toString())
    )
        formDataAlerts.push('price');

    // Validate size (two numbers from 1 to 30)
    if (
        formData.size < 1 ||
        formData.size > 23 ||
        !/^(?:[1-9]|1\d|2[0-3])$/.test(formData.size.toString())
    )
        formDataAlerts.push('size');

    // Validate year (from 1900 to 2023)
    if (
        formData.year < 1900 ||
        formData.year > 2023 ||
        !/^(19\d{2}|20[0-1]\d|202[0-2]|2023)$/.test(formData.year.toString())
    )
        formDataAlerts.push('year');

    return formDataAlerts;
};
