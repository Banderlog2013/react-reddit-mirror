import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dropdown.css';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
//   x: string | number | any;
//   y: string | number | any;
}

const NOOP = () => {};

export function Dropdown({button, children, isOpen, onClose = NOOP, onOpen = NOOP}: IDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
	React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
	React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);

	const handleOpen = () => {
		if (isOpen === undefined) {
		setIsDropdownOpen(!isDropdownOpen)
		}
	}

	// const node = document.querySelector('#menu_root');
    // if (!node) return null;
	
	// const pos = node.getBoundingClientRect();
	// console.log(pos);

	return((
		<div className={styles.container}>
		<div onClick={handleOpen}>{ button }</div>
		{isDropdownOpen && (
			<div className={styles.listContainer}>
				<div className={styles.list} onClick={() => setIsDropdownOpen(false)}>{children}</div>
			</div>
		)}
		</div> 
	));
}
