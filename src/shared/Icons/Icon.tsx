import React from 'react';
import { BlockIcon, CommentsIcon, MenuIcon, SaveIcon, ShareIcon, WarningIcon } from '../Icons';
import { HideIcon } from '../Icons/HideIcon';


export enum EIcons {
    block = "BlockIcon",
    comments = 'CommentsIcon',
    hide = 'HideIcon',
    menu = 'MenuIcon',
    save = 'SaveIcon',
    share = 'ShareIcon',
    warning = 'WarningIcon'
}

type TSizes = 10 | 12 | 14 | 15 | 16;

interface IIconProps {
    name: EIcons;
    size?: TSizes;
}

export function Icon(props: IIconProps) {
    const { name, size } = props;

    switch (name) {
		case EIcons.block:
			return (
				<BlockIcon width={size} height={size}/>
				)
			case EIcons.comments:
				return (
				<CommentsIcon />
			);
			case EIcons.hide:
				return (
				<HideIcon />
			);
			case EIcons.menu:
				return (
				<MenuIcon />
			);
			case EIcons.save:
				return (
				<SaveIcon />
			);
			case EIcons.share:
				return (
				<ShareIcon />
			);
			case EIcons.warning:
				return (
				<WarningIcon />
			);
			default: 
		return <></>
	}

}
