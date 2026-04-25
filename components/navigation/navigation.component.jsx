'use client';

import { useEffect, useId, useRef, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import logo from '@/assets/RockDigitalLogo.svg';
import darkLogo from '@/assets/DarkThemeLogo.svg';

import styles from './navigation.module.css';

const navigationLinks = [
	{ href: '/about', label: 'ABOUT' },
	{ href: '/services', label: 'SERVICES' },
	{ href: '/blog', label: 'BLOG' },
	{ href: '/contact', label: 'CONTACT US' },
	{
		href: '/website-audit',
		label: 'Request a Website Audit',
		className: styles.auditLink,
	},
];

const darkNavigationRouteMatchers = [
	'/about',
	'/landing-page',
	'/web-design',
	'/case-studies/',
];

const usesDarkNavigation = (pathname = '/') =>
	darkNavigationRouteMatchers.some((routePrefix) =>
		routePrefix.endsWith('/')
			? pathname.startsWith(routePrefix)
			: pathname === routePrefix
	);

const Navigation = () => {
	const [scroll, setScroll] = useState(false);
	const [isNavVisible, setIsNavVisible] = useState(true);
	const [showOffcanvas, setShowOffcanvas] = useState(false);
	const [headerHeight, setHeaderHeight] = useState(0);
	const pathname = usePathname();
	const mobileNavId = useId();
	const headerRef = useRef(null);
	const isDarkTheme = usesDarkNavigation(pathname);
	const brandLogo = isDarkTheme ? darkLogo : logo;

	const closeOffcanvas = () => setShowOffcanvas(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;
		const scrollThreshold = 12;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const hasScrolled = currentScrollY > 0;
			const scrollDelta = currentScrollY - lastScrollY;

			setScroll(hasScrolled);

			if (currentScrollY <= 0) {
				setIsNavVisible(true);
				lastScrollY = 0;
				return;
			}

			if (Math.abs(scrollDelta) < scrollThreshold) {
				return;
			}

			setIsNavVisible(scrollDelta < 0);
			lastScrollY = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		document.body.style.overflow = showOffcanvas ? 'hidden' : '';
		if (showOffcanvas) {
			setIsNavVisible(true);
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [showOffcanvas]);

	useEffect(() => {
		const onKeyDown = (event) => {
			if (event.key === 'Escape') {
				closeOffcanvas();
			}
		};

		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, []);

	useEffect(() => {
		const headerElement = headerRef.current;

		if (!headerElement) {
			return undefined;
		}

		const updateHeaderHeight = () => {
			setHeaderHeight(headerElement.getBoundingClientRect().height);
		};

		updateHeaderHeight();

		if (typeof ResizeObserver === 'undefined') {
			window.addEventListener('resize', updateHeaderHeight);
			return () => window.removeEventListener('resize', updateHeaderHeight);
		}

		const resizeObserver = new ResizeObserver(() => {
			updateHeaderHeight();
		});

		resizeObserver.observe(headerElement);

		return () => {
			resizeObserver.disconnect();
		};
	}, []);

	return (
		<>
			<div className={styles.headerSpacer} style={{ height: `${headerHeight}px` }} aria-hidden='true' />
			<header
				ref={headerRef}
				className={`${styles.header} ${isDarkTheme ? styles.headerDark : ''} ${
					!isNavVisible && !showOffcanvas ? styles.headerHidden : ''
				}`.trim()}
			>
				<div className={`${styles.navbar} ${isDarkTheme ? styles.navbarDark : ''}`.trim()}>
					<div className={styles.navbarInner}>
						<Link href='/' className={styles.navbar_brand} aria-label='Rock Digital home'>
							<Image
								src={brandLogo}
								alt='Rock Digital Logo'
								className={scroll ? styles.resize : styles.brandImage}
								priority
								sizes='96px'
							/>
						</Link>

						<nav className={styles.desktopNav} aria-label='Primary navigation'>
							{navigationLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									prefetch={link.prefetch}
									className={`${styles.link} ${link.className || ''}`.trim()}
								>
									{link.label}
								</Link>
							))}
						</nav>

						<button
							type='button'
							className={`${styles.toggler} ${isDarkTheme ? styles.togglerDark : ''}`.trim()}
							aria-controls={mobileNavId}
							aria-expanded={showOffcanvas}
							aria-label={showOffcanvas ? 'Close navigation menu' : 'Open navigation menu'}
							onClick={() => setShowOffcanvas((current) => !current)}
						>
							<span />
							<span />
							<span />
						</button>
					</div>
				</div>
			</header>

			<div
				className={`${styles.backdrop} ${showOffcanvas ? styles.backdropVisible : ''}`}
				aria-hidden='true'
				onClick={closeOffcanvas}
			/>

			<div
				id={mobileNavId}
				className={`${styles.mobilePanel} ${
					isDarkTheme ? styles.mobilePanelDark : ''
				} ${
					showOffcanvas ? styles.mobilePanelOpen : ''
				}`}
				role='dialog'
				aria-modal='true'
				aria-label='Mobile navigation'
			>
				<div className={styles.mobileHeader}>
					<Link href='/' className={styles.mobileBrand} onClick={closeOffcanvas}>
						<Image
							src={brandLogo}
							alt='Rock Digital Logo'
							className={styles.mobileBrandImage}
							sizes='88px'
						/>
					</Link>
					<button
						type='button'
						className={`${styles.closeButton} ${isDarkTheme ? styles.closeButtonDark : ''}`.trim()}
						onClick={closeOffcanvas}
						aria-label='Close navigation menu'
					>
						<span />
						<span />
					</button>
				</div>
				<nav className={styles.mobileNav} aria-label='Mobile navigation links'>
					{navigationLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							prefetch={link.prefetch}
							className={`${styles.link} ${link.className || ''}`.trim()}
							onClick={closeOffcanvas}
						>
							{link.label}
						</Link>
					))}
				</nav>
			</div>
		</>
	);
};

export default Navigation;
