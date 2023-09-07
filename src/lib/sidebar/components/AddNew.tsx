'use client';

import { colors } from '@/styles/colorPalette';
import TextField from '../../components/TextField';
import { useState } from 'react';
import { addNewSneaker } from '@/services/backendServices';
import { SneakerInfo } from '@/types';
import Button from '@/lib/components/button/Button';
import { typographySize } from '@/styles/typography';

type AddNewSneakerProps = {
    setShowSidebar: (response: boolean) => void;
};

export default function AddNewSneaker({ setShowSidebar }: AddNewSneakerProps) {
    const [formData, setFormData] = useState<SneakerInfo>({
        sneakerName: '',
        brand: '',
        price: 0,
        size: 0,
        year: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setShowSidebar(!(await addNewSneaker(formData)));
        setFormData({
            sneakerName: '',
            brand: '',
            price: 0,
            size: 0,
            year: 0,
        });
    };

    return (
        <form>
            <TextField
                fieldName="Name"
                inputOnChange={handleChange}
                inputName={'sneakerName'}
                inputValue={formData.sneakerName}
            />
            <div style={{ marginBottom: `${typographySize.mmLarge}` }} />

            <TextField
                fieldName="Brand"
                inputName={'brand'}
                inputOnChange={handleChange}
                inputValue={formData.brand}
            />
            <div style={{ marginBottom: `${typographySize.mmLarge}` }} />

            <TextField
                fieldName="Price"
                inputOnChange={handleChange}
                inputType="number"
                inputName={'price'}
                inputValue={formData.price}
            />
            <div style={{ marginBottom: `${typographySize.mmLarge}` }} />

            <TextField
                fieldName="Size US"
                inputOnChange={handleChange}
                inputType="number"
                inputName={'size'}
                inputValue={formData.size}
            />
            <div style={{ marginBottom: `${typographySize.mmLarge}` }} />

            <TextField
                fieldName="Year"
                inputOnChange={handleChange}
                inputType="number"
                inputName={'year'}
                inputValue={formData.year}
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
    );
}
