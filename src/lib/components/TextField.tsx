'use client';

import { colors } from '@/styles/colorPalette';
import {
    PLabel,
    font,
    fontSize,
    fontWeight,
    typographySize,
} from '@/styles/typography';
import styled from '@emotion/styled';
import searchImg from './images/search.svg';
import Image from 'next/image';
import { useState } from 'react';
import { css, keyframes } from '@emotion/react';
import { getMaxLength } from '@/utils/getMaxLength';

type TextFieldNames = 'Name' | 'Brand' | 'Price' | 'Size US' | 'Year';

type TextFieldProps = {
    alert?: boolean;
    fieldName?: TextFieldNames;
    inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputName: string;
    inputValue: string | number;
    searchIcon?: boolean;
};

export default function TextField({
    alert,
    fieldName,
    inputOnChange,
    inputName,
    searchIcon,
    inputValue,
}: TextFieldProps) {
    const [isInputFocused, setInputFocused] = useState<boolean>(false);

    const handleInputFocus = () => {
        setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
    };

    return (
        <>
            {fieldName && (
                <DivFieldName>
                    <PLabel>{fieldName}</PLabel>
                </DivFieldName>
            )}

            <DivInput
                alert={alert}
                isFocused={isInputFocused}
                data-name="Text Field"
            >
                {searchIcon && <ImageInput src={searchImg} alt="search icon" />}
                <InputText
                    id={inputName}
                    maxLength={getMaxLength(fieldName)}
                    name={inputName}
                    onBlur={handleInputBlur}
                    onFocus={handleInputFocus}
                    onChange={inputOnChange}
                    placeholder={searchIcon ? 'Search' : ''}
                    type="text"
                    value={inputValue}
                />
            </DivInput>
        </>
    );
}

type DivInputProps = {
    alert?: boolean;
    isFocused: boolean;
};

const DivInput = styled.div<DivInputProps>`
    border: ${(props) =>
        props.isFocused
            ? `solid 0.2vw ${colors.black}`
            : `solid 0.1vw ${colors.gray80}`};

    display: flex;
    background-color: ${colors.white};
    align-items: center;
    height: 3.3vw;
    border-radius: ${typographySize.xxSmall};

    ${({ alert }) =>
        alert &&
        css`
            border: 0.2vw solid ${colors.red};
            animation: ${shake} 0.3s ease-in-out;
        `};
`;

const DivFieldName = styled.div`
    margin-bottom: ${typographySize.tiny};
`;

const ImageInput = styled(Image)`
    background-color: ${colors.white};
    margin: 0 ${typographySize.medium};
    width: ${typographySize.mmLarge};
    max-height: 90%;
`;

const InputText = styled.input`
    border: none;
    height: 90%;
    width: 97%;
    font-family: ${font.exconRegular};
    font-size: ${fontSize.normal};
    line-height: ${fontSize.large};
    font-weight: ${fontWeight.normal};
    ::placeholder {
        color: ${colors.gray80};
    }
    :focus {
        outline: none;
    }
`;

const shake = keyframes`
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
`;
