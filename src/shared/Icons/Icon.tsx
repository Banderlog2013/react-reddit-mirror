import React from 'react';
import { BlockIcon, CommentsIcon, MenuIcon, SaveIcon, ShareIcon, WarningIcon, HideIcon } from '../Icons';
import { ArrowIcon } from './ArrowIcon';



export enum EIcons {
    block = "BlockIcon",
    comments = 'CommentsIcon',
    hide = 'HideIcon',
    menu = 'MenuIcon',
    save = 'SaveIcon',
    share = 'ShareIcon',
    warning = 'WarningIcon',
	arrow = 'ArrowIcon'
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
				<CommentsIcon width={size} height={size}/>
			);
			case EIcons.hide:
				return (
				<HideIcon width={size} height={size}/>
			);
			case EIcons.menu:
				return (
				<MenuIcon/>
			);
			case EIcons.save:
				return (
				<SaveIcon width={size} height={size}/>
			);
			case EIcons.share:
				return (
				<ShareIcon width={size} height={size}/>
			);
			case EIcons.warning:
				return (
				<WarningIcon width={size} height={size}/>
			);
			case EIcons.arrow:
				return (
				<ArrowIcon />
			);
			default: 
		return <></>
	}

}
