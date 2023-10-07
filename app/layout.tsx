import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Blue Bird',
	description: 'A Twitter clone built with Next.js and Supabase',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<div className="bg-gray-900 min-h-screen flex">{children}</div>
			</body>
		</html>
	)
}
