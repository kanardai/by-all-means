import { colors } from '@/styles/colorPalette';
import { PButton, typographySize } from '@/styles/typography';
import styled from '@emotion/styled';
import ButtonIcon from './components/ButtonIcon';

type ButtonProps = {
    active?: boolean;
    children: string;
    clickHandler?: (e?: React.MouseEvent<HTMLElement>) => void;
    icon?: IconTypes;
    size?: ButtonSize;
    color: string;
    width?: string;
};

export type ButtonSize = 'sm' | 'lg';
export type IconTypes = 'calendar' | 'close' | 'dollar' | 'plus' | 'size';

export default function Button({
    active,
    children,
    clickHandler,
    color,
    icon,
    size = 'lg',
    width,
}: ButtonProps) {
    return (
        <ButtonStyled
            onClick={clickHandler}
            size={size}
            width={width}
            active={active}
        >
            {icon && <ButtonIcon icon={icon} color={color} size={size} />}

            <PButton color={color}>{children}</PButton>
        </ButtonStyled>
    );
}

//--- Button Primary Styles

const paddingLg = `0 ${typographySize.mLarge}`;
const paddingSm = `0 ${typographySize.xSmall}`;

type ButtonStyledProps = {
    size: ButtonSize;
    width?: string;
    active?: boolean;
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: 1px solid;
    border-color: ${({ active }) => (active ? colors.red : colors.black)};
    width: ${(props) => props.width || '100%'};
    background-color: ${({ size }) =>
        size === 'sm' ? `${colors.white}` : `${colors.black}`};
    background-color: ${({ active }) => active && `${colors.red}`};
    border-radius: ${typographySize.xSmall};
    padding: ${({ size }) => (size === 'sm' ? paddingSm : paddingLg)};
    height: ${({ size }) =>
        size === 'sm' ? '2.4vw' : `${typographySize.large}`};

    :hover {
        background-color: ${({ size }) => size === 'lg' && `${colors.hover}`};
    }

    :active {
        background-color: ${colors.red};
        border: 1px solid ${colors.red};
    }
`;
