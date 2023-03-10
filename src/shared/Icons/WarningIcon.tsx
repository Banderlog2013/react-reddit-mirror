import * as React from 'react';

interface IWarningIcon {
    width: number | string;
    height: number | string;
}

interface IWarningIconProps {
    size: IWarningIcon[];
}

export const WarningIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({...size}) => {
    return (
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...size}>
            <path d="M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z" fill="#999999"/>
        </svg>
    );
}