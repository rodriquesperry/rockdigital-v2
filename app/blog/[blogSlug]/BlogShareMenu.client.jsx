'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './blogPost.module.css';

const siteUrl = 'https://rockdigital.agency';

function LinkIcon() {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true'>
			<path d='M10.6 13.4a1 1 0 0 0 1.4 1.4l4.6-4.6a3.2 3.2 0 0 0-4.5-4.5l-1.2 1.2a1 1 0 1 0 1.4 1.4l1.2-1.2a1.2 1.2 0 0 1 1.7 1.7l-4.6 4.6Z' />
			<path d='M13.4 10.6a1 1 0 0 0-1.4-1.4l-4.6 4.6a3.2 3.2 0 0 0 4.5 4.5l1.2-1.2a1 1 0 1 0-1.4-1.4l-1.2 1.2a1.2 1.2 0 0 1-1.7-1.7l4.6-4.6Z' />
		</svg>
	);
}

function ShareIcon() {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true'>
			<path d='M12 3a1 1 0 0 1 .7.3l4 4a1 1 0 0 1-1.4 1.4L13 6.4V15a1 1 0 1 1-2 0V6.4L8.7 8.7a1 1 0 0 1-1.4-1.4l4-4A1 1 0 0 1 12 3Z' />
			<path d='M5 11a1 1 0 0 1 1 1v6h12v-6a1 1 0 1 1 2 0v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1Z' />
		</svg>
	);
}

function BlueskyIcon() {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true'>
			<path d='M6.1 4.3c2.4 1.8 5 5.5 5.9 7.5.9-2 3.5-5.7 5.9-7.5 1.7-1.3 4.5-2.3 4.5.9 0 .6-.4 5.3-.7 6.1-.9 3-4.1 3.8-6.9 3.3 4.9.8 6.2 3.6 3.5 6.4-5.2 5.3-7.4-1.3-8-3-.1-.2-.2-.4-.2-.5 0 .1-.1.3-.2.5-.6 1.7-2.8 8.3-8 3-2.7-2.8-1.4-5.6 3.5-6.4-2.8.5-6-.3-6.9-3.3-.3-.8-.7-5.5-.7-6.1 0-3.2 2.8-2.2 4.5-.9Z' />
		</svg>
	);
}

function FacebookIcon() {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true'>
			<path d='M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z' />
		</svg>
	);
}

function LinkedInIcon() {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true'>
			<path d='M5.4 8.8H2.2V22h3.2V8.8ZM3.8 7A1.9 1.9 0 1 0 3.8 3.2 1.9 1.9 0 0 0 3.8 7ZM22 22h-3.2v-6.4c0-1.5 0-3.5-2.1-3.5s-2.5 1.7-2.5 3.4V22H11V8.8h3.1v1.8h.1c.4-.8 1.5-2.1 3.1-2.1 3.3 0 3.9 2.2 3.9 5V22H22Z' />
		</svg>
	);
}

function ThreadsIcon() {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true'>
			<path d='M17.6 11.2c-.1-3.8-2.2-6-5.8-6-2.2 0-3.9 1-5 2.8l1.8 1.2c.8-1.3 1.8-1.9 3.1-1.9 2.1 0 3.3 1.3 3.5 3.6-.9-.4-1.9-.6-3-.6-2.8 0-4.7 1.5-4.7 3.8 0 2.2 1.8 3.7 4.3 3.7 2.3 0 4-1.2 4.6-3.3.9.6 1.3 1.4 1.3 2.3 0 2-2.3 3.4-5.4 3.4-4.6 0-7.3-3.1-7.3-8.2 0-5.2 2.7-8.2 7.1-8.2 3.3 0 5.5 1.5 6.8 4.5l2.1-.9C19.5 3.8 16.5 2 12.1 2 6.3 2 2.7 5.8 2.7 12s3.7 10 9.6 10c4.5 0 7.7-2.2 7.7-5.3 0-2.3-1.5-4.2-4.1-5.1l-.3-.1Zm-2.5 1.9c-.3 1.7-1.4 2.7-3.1 2.7-1.3 0-2.1-.6-2.1-1.6 0-1.1.9-1.8 2.4-1.8 1 0 1.9.2 2.8.7Z' />
		</svg>
	);
}

function XIcon() {
	return (
		<svg viewBox='0 0 24 24' aria-hidden='true'>
			<path d='M14.4 10.2 22.2 1h-1.9l-6.8 7.9L8.1 1H1.9l8.2 12L1.9 23h1.9l7.2-8.4 5.8 8.4H23l-8.6-12.8Zm-2.5 3-1-1.5L4.3 2.4h2.9l5.3 7.5 1 1.5 6.9 9.8h-2.9l-5.6-8Z' />
		</svg>
	);
}

function buildShareUrl(type, url, title) {
	const encodedUrl = encodeURIComponent(url);
	const encodedText = encodeURIComponent(`${title} ${url}`);
	const encodedTitle = encodeURIComponent(title);

	switch (type) {
		case 'bluesky':
			return `https://bsky.app/intent/compose?text=${encodedText}`;
		case 'facebook':
			return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
		case 'linkedin':
			return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
		case 'threads':
			return `https://www.threads.net/intent/post?text=${encodedText}`;
		case 'x':
			return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
		default:
			return url;
	}
}

export default function BlogShareMenu({ slug, title }) {
	const [isOpen, setIsOpen] = useState(false);
	const [copyLabel, setCopyLabel] = useState('Copy link');
	const menuRef = useRef(null);

	const postUrl = `${siteUrl}/blog/${slug}`;

	const shareItems = [
		{ type: 'bluesky', label: 'Share on Bluesky', icon: <BlueskyIcon /> },
		{ type: 'facebook', label: 'Share on Facebook', icon: <FacebookIcon /> },
		{ type: 'linkedin', label: 'Share on LinkedIn', icon: <LinkedInIcon /> },
		{ type: 'threads', label: 'Share on Threads', icon: <ThreadsIcon /> },
		{ type: 'x', label: 'Share on X', icon: <XIcon /> },
	];

	useEffect(() => {
		if (!isOpen) {
			return undefined;
		}

		const handlePointerDown = (event) => {
			if (!menuRef.current?.contains(event.target)) {
				setIsOpen(false);
			}
		};

		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				setIsOpen(false);
			}
		};

		document.addEventListener('pointerdown', handlePointerDown);
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('pointerdown', handlePointerDown);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen]);

	const copyPostLink = async () => {
		try {
			await navigator.clipboard.writeText(postUrl);
			setCopyLabel('Copied');
			window.setTimeout(() => setCopyLabel('Copy link'), 1800);
		} catch {
			setCopyLabel('Copy unavailable');
			window.setTimeout(() => setCopyLabel('Copy link'), 1800);
		}
	};

	return (
		<div className={styles.shareMenuWrap} ref={menuRef}>
			<button
				className={styles.shareTrigger}
				type='button'
				aria-label='Share this post'
				aria-expanded={isOpen}
				aria-haspopup='menu'
				onClick={() => setIsOpen((current) => !current)}
			>
				<ShareIcon />
			</button>
			{isOpen ? (
				<div className={styles.shareMenu} role='menu'>
					<button
						className={styles.shareMenuItem}
						type='button'
						role='menuitem'
						onClick={copyPostLink}
					>
						<LinkIcon />
						<span>{copyLabel}</span>
					</button>
					<div className={styles.shareMenuDivider} aria-hidden='true' />
					{shareItems.map((item) => (
						<a
							className={styles.shareMenuItem}
							href={buildShareUrl(item.type, postUrl, title)}
							key={item.type}
							role='menuitem'
							target='_blank'
							rel='noopener noreferrer'
						>
							{item.icon}
							<span>{item.label}</span>
						</a>
					))}
				</div>
			) : null}
		</div>
	);
}
