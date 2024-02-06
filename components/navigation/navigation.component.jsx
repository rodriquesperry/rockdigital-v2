'use client';

import React, { useState, useEffect, useRef } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import logo from '@/assets/RockDigitalLogo-196px.jpeg';

import styles from './navigation.module.css';

const Navigation = () => {
	const offCanvasRef = useRef();
	const [scroll, setScroll] = useState(false);

	const closeOffcanvas = () => offCanvasRef.current.backdrop.click();

	useEffect(() => {
		const handleScroll = (e) => {
			if (
				document.body.scrollTop > 0 ||
				document.documentElement.scrollTop > 0
			) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<Navbar expand='lg' className={`mb-3 sticky-top ${styles.navbar}`}>
				<Container fluid>
					<Link href='/' className={`${styles.navbar_brand}`}>
						<Image
							src={logo}
							alt='Rock Digital Logo'
							className={`${scroll ? styles.resize : styles.navbar_brand}`}
							priority
						/>
					</Link>

					<Navbar.Toggle className={styles.toggler} aria-controls='responsive-navbar-nav' />
					<Navbar.Offcanvas
						id='offcanvasNavbar-expand'
						aria-labelledby='offcanvasNavbarLabel-expand'
						placement='end'
						ref={offCanvasRef}
					>
						<Offcanvas.Header closeButton>
							<Link href='/' onClick={closeOffcanvas}>
								<Offcanvas.Title
									id='offcanvasNavbarLabel-expand'
									className={styles.offCanvasTitle}
								>
									<Image src={logo} alt='Rock Digital Logo' className='img-fluid' />
								</Offcanvas.Title>
							</Link>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<Nav
								className={`justify-content-end flex-grow-1 pe-3 lato ${styles.navbar_nav}`}
							>
								<Link
									href='/services'
									className={styles.link}
									onClick={closeOffcanvas}
								>
									SERVICES
								</Link>
								<Link
									href='/portfolio'
									className={styles.link}
									onClick={closeOffcanvas}
								>
									PORTFOLIO
								</Link>
								<Link
									href='/contact'
									className={styles.link}
									onClick={closeOffcanvas}
								>
									CONTACT US
								</Link>
								<Link
									href='/blog'
									className={styles.link}
									onClick={closeOffcanvas}
								>
									BLOG
								</Link>
							</Nav>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
};

export default Navigation;
