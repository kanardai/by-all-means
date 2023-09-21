'use client';

import { colors } from '@/styles/colorPalette';
import TextField from '../../components/TextField';
import { use, useEffect, useState } from 'react';
import { addNewSneaker } from '@/services/backendServices';
import { SneakerInfo } from '@/types';
import Button from '@/lib/components/button/Button';
import { typographySize } from '@/styles/typography';
import { formDataAlerts, inputValidation } from '@/utils/inputValidation';

type AddNewSneakerProps = {
    setShowSidebar: (response: boolean) => void;
};

export default function AddNewSneaker({ setShowSidebar }: AddNewSneakerProps) {
    const [alerts, setAlerts] = useState<typeof formDataAlerts>([]);
    const [formData, setFormData] = useState<SneakerInfo>({
        sneakerName: '',
        brand: '',
        price: 0,
        size: 0,
        year: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // because 'maxLength' is used in the input tag, which works only
        // with 'type=text', then string is converted to an integer when saved into the object
        if (name === 'price' || name === 'size' || name === 'year') {
            setFormData({
                ...formData,
                [name]: parseInt(value) || 0,
            });
            return;
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (inputValidation(formData).length !== 0) {
            setAlerts(inputValidation(formData));
            return;
        }

        setShowSidebar(!(await addNewSneaker(formData)));

        setAlerts([]);

        setFormData({
            sneakerName: '',
            brand: '',
            price: 0,
            size: 0,
            year: 0,
        });
    };

    return (
        <>
            <form>
                <TextField
                    fieldName="Name"
                    inputOnChange={handleChange}
                    inputName={'sneakerName'}
                    inputValue={formData.sneakerName}
                    alert={alerts.includes('sneakerName')}
                />
                <div style={{ marginBottom: `${typographySize.mmLarge}` }} />

                <TextField
                    fieldName="Brand"
                    inputName={'brand'}
                    inputOnChange={handleChange}
                    inputValue={formData.brand}
                    alert={alerts.includes('brand')}
                />
                <div style={{ marginBottom: `${typographySize.mmLarge}` }} />

                <TextField
                    fieldName="Price"
                    inputOnChange={handleChange}
                    inputName={'price'}
                    inputValue={formData.price}
                    alert={alerts.includes('price')}
                />
                <div style={{ marginBottom: `${typographySize.mmLarge}` }} />

                <TextField
                    fieldName="Size US"
                    inputOnChange={handleChange}
                    inputName={'size'}
                    inputValue={formData.size}
                    alert={alerts.includes('size')}
                />
                <div style={{ marginBottom: `${typographySize.mmLarge}` }} />

                <TextField
                    fieldName="Year"
                    inputOnChange={handleChange}
                    inputName={'year'}
                    inputValue={formData.year}
                    alert={alerts.includes('year')}
                />
                <div style={{ marginBottom: `${typographySize.large}` }} />

                <Button
                    color={colors.white}
                    clickHandler={handleSubmit}
                    icon="plus"
                >
                    Add new Sneakers
                </Button>
            </form>
        </>
    );
}
