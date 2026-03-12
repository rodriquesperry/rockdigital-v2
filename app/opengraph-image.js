import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export const alt = 'Rock Digital homepage preview';
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
	const logoPath = join(
		process.cwd(),
		'public',
		'web-app-manifest-512x512.png'
	);
	const logoBuffer = await readFile(logoPath);
	const logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`;

	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					width: '100%',
					height: '100%',
					background:
						'linear-gradient(135deg, #f7efe4 0%, #fffaf4 48%, #efe1c8 100%)',
					color: '#1f1408',
					fontFamily: 'sans-serif',
				}}
			>
				<div
					style={{
						width: '34%',
						height: '100%',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '56px 32px 56px 64px',
						background:
							'linear-gradient(180deg, rgba(31,20,8,0.06) 0%, rgba(31,20,8,0.12) 100%)',
					}}
				>
					<div
						style={{
							display: 'flex',
							width: 300,
							height: 300,
							borderRadius: 36,
							background: '#ffffff',
							boxShadow: '0 24px 60px rgba(31, 20, 8, 0.18)',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<img
							src={logoSrc}
							alt='Rock Digital logo'
							width='220'
							height='220'
							style={{ objectFit: 'contain' }}
						/>
					</div>
				</div>
				<div
					style={{
						width: '66%',
						height: '100%',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						padding: '72px 84px 72px 48px',
					}}
				>
					<div
						style={{
							display: 'flex',
							fontSize: 24,
							fontWeight: 700,
							letterSpacing: 3,
							textTransform: 'uppercase',
							color: '#b77919',
							marginBottom: 22,
						}}
					>
						Rock Digital
					</div>
					<div
						style={{
							display: 'flex',
							fontSize: 62,
							lineHeight: 1.05,
							fontWeight: 800,
							marginBottom: 28,
							maxWidth: 680,
						}}
					>
						Web design and digital growth built to convert.
					</div>
					<div
						style={{
							display: 'flex',
							fontSize: 28,
							lineHeight: 1.35,
							color: '#47301b',
							maxWidth: 650,
						}}
					>
						Custom websites, SEO, optimization, and marketing strategy that help
						businesses attract better traffic and turn more visitors into
						customers.
					</div>
				</div>
			</div>
		),
		size
	);
}
