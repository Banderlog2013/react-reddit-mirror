import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({button, children, isOpen, onClose = NOOP, onOpen = NOOP}: IDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
	useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
	useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

	const handleOpen = () => {
		if (isOpen === undefined) {
		setIsDropdownOpen(!isDropdownOpen)
		}
	}

	const menuNode = document.querySelector('#menu_root');
    if (!menuNode) return null;

	const buttonRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ top: 0, left: 0 });

	useEffect(() => {
		function updatePos() {
			if (buttonRef.current !== null) {
				const pos = buttonRef.current.getBoundingClientRect();
				setPosition({
					top: pos.top + 37,
					left: pos.left + 30,
				})
				// console.log(pos);
			}
		}
		updatePos();
		window.addEventListener('resize', updatePos);
		window.addEventListener('scroll', updatePos);

		return () => {
			window.removeEventListener('resize', updatePos);
			window.removeEventListener('scroll', updatePos);
		};

	}, [isDropdownOpen]);
	
	return(
		<div className={styles.container}>
			<div ref={buttonRef} onClick={handleOpen}>{ button }</div>
			{isDropdownOpen && ReactDOM.createPortal(
				<div className={styles.listContainer} style={{top: `${position.top}px`, left: `${position.left}px`}}>
					<div className={styles.list} onClick={() => setIsDropdownOpen(false)}>{children}</div>
				</div>,
				menuNode,
			)}
		</div>
	);
}
