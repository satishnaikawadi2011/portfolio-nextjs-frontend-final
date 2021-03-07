import React from 'react';
import styles from './my-switch.module.css';

interface MySwitchProps {
	selected: boolean;
	toggleSelected: React.MouseEventHandler<HTMLDivElement>;
	selectedString?: string;
	disabledString?: string;
}

const MySwitch: React.FC<MySwitchProps> = ({
	selected,
	toggleSelected,
	selectedString = 'Yes',
	disabledString = 'No'
}) => {
	return (
		<div className={styles.toggle__container} onClick={toggleSelected}>
			<div
				className={`${styles.dialog__button} ${
					selected ? '' :
					styles.disabled}`}
			>
				{
					selected ? selectedString :
					disabledString}
			</div>
		</div>
	);
};

export default MySwitch;
