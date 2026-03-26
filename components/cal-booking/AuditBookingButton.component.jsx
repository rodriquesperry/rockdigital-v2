'use client';

import { useEffect, useRef } from 'react';
import { getCalApi } from '@calcom/embed-react';

const namespace = 'website-audit';
const calLink = 'rodriques-perry/website-audit';
const modalConfig = {
	layout: 'month_view',
	useSlotsViewOnSmallScreen: true,
};
const uiConfig = {
	hideEventTypeDetails: false,
	layout: 'month_view',
};

const AuditBookingButton = ({
	className = 'btn btn-warning',
	label = 'Schedule a Call',
}) => {
	const calApiRef = useRef(null);

	useEffect(() => {
		let isMounted = true;

		(async () => {
			const cal = await getCalApi({ namespace });

			if (!isMounted) {
				return;
			}

			cal('ui', uiConfig);
			cal('preload', { calLink, type: 'modal' });
			calApiRef.current = cal;
		})();

		return () => {
			isMounted = false;
		};
	}, []);

	const openCalendar = async () => {
		const cal = calApiRef.current || (await getCalApi({ namespace }));

		calApiRef.current = cal;
		cal('ui', uiConfig);
		cal('modal', {
			calLink,
			config: modalConfig,
		});
	};

	return (
		<button type='button' className={className} onClick={openCalendar}>
			{label}
		</button>
	);
};

export default AuditBookingButton;
