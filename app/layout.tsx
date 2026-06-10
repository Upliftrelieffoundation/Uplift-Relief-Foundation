import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlobalScrollObserver } from "@/components/GlobalScrollObserver";
import React from "react";

const baseUrl =
	process.env.NEXT_PUBLIC_BASE_URL || "https://www.upliftfoundation.org";

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: "Uplift Relief Foundation | Street Dog Rescue & Child Education",
		template: "%s | Uplift Relief Foundation Nagpur",
	},
	description:
		"We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
	keywords: [
		"NGO Nagpur",
		"Animal Rescue Nagpur",
		"Street Dog Rescue",
		"Free Education for Children",
		"Underprivileged Children Education",
		"Uplift Relief Foundation",
		"Donate NGO India",
	],
	authors: [{ name: "Uplift Relief Foundation" }],
	creator: "Uplift Relief Foundation",
	publisher: "Uplift Relief Foundation",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: baseUrl,
		siteName: "Uplift Relief Foundation",
		title: "Uplift Relief Foundation | Rescue. Educate. Transform.",
		description:
			"We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
		images: [
			{
				url: `${baseUrl}/images/og-image.jpg`, // Replace with actual default OG image later
				width: 1200,
				height: 630,
				alt: "Uplift Relief Foundation - Rescue, Educate, Transform",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Uplift Relief Foundation",
		description:
			"We rescue injured street dogs and provide free education for underprivileged children across Nagpur.",
		images: [`${baseUrl}/images/og-image.jpg`], // Replace with actual image
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: baseUrl,
	},
};

// Organization JSON-LD Schema for AEO and GEO optimization
const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "NGO",
	name: "Uplift Relief Foundation",
	url: baseUrl,
	logo: `${baseUrl}/images/logo.png`, // Update when you have an actual logo path
	description:
		"We rescue injured street dogs and provide free education for underprivileged children across Nagpur. 100% transparent, grassroots NGO.",
	sameAs: [
		"https://www.instagram.com/upliftfoundation", // Update links as needed
		"https://www.facebook.com/upliftfoundation",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="data-scroll-behavior-smooth">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(organizationSchema),
					}}
				/>
			</head>
			<body>
				<GlobalScrollObserver />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
