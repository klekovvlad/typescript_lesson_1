import { FC } from "react";

export enum CardVariant {
    outline = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    children?: any;
    variant: CardVariant;
    onClick: () => void
}


const Card: FC<CardProps> = 
    (
        {
            width,
            height, 
            variant,
            children,
            onClick
        }
    ) => {

        // const [state, useState] = useState(0)

    return (
        <div style={{width, height, 
            border: variant === CardVariant.outline ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : 'none'
            }}
            // onClick={() => onClick(state)}
            >
           {children}
        </div>
    )
}

export default Card