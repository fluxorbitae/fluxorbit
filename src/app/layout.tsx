import '@once-ui-system/core/css/styles.css';
import '@once-ui-system/core/css/tokens.css';
import '@/resources/custom.css'

import { Background, Column, Flex } from '@once-ui-system/core';

import { Footer } from "@/components/layout/Footer";
import { getCollections } from '@/lib/fourthwall';
import classNames from "classnames";
import { Metadata } from "next";
import { headers } from "next/headers";
import { ReactNode } from 'react';
import { dataStyle, fonts,  baseURL, effects, meta, og, schema, social, style, sameAs } from "@/resources/once-ui.config";
import { Providers } from '@/components/Providers';

export async function generateMetadata(): Promise<Metadata> {
	const host = (await headers()).get("host");
	const metadataBase = host ? new URL(`https://${host}`) : undefined;

	return {
		title: meta.title,
		description: meta.description,
		openGraph: {
			title: og.title,
			description: og.description,
			url: 'https://' + baseURL,
			type: og.type as
				| "website"
				| "article"
				| "book"
				| "profile"
				| "music.song"
				| "music.album"
				| "music.playlist"
				| "music.radio_station"
				| "video.movie"
				| "video.episode"
				| "video.tv_show"
				| "video.other",
		},
		metadataBase,
	};
}

const schemaData = {
	"@context": "https://schema.org",
	"@type": schema.type,
	"url": "https://" + baseURL,
	"logo": schema.logo,
	"name": schema.name,
	"description": schema.description,
	"email": schema.email,
	"sameAs": Object.values(sameAs).filter(Boolean)
};

export default async function RootLayout({
	children
}: {
	children: ReactNode
}) {
	const collections = await getCollections();
	
	return (
		<>
		<Flex
			suppressHydrationWarning
			as="html"
			lang="en"
			fillWidth
			className={classNames(
        fonts.heading.variable,
        fonts.body.variable,
        fonts.label.variable,
        fonts.code.variable,
      )}>
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
				/>
				<script
          id="theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const defaultTheme = 'system';
                  
                  // Set defaults from config
                  const config = ${JSON.stringify({
                    brand: style.brand,
                    accent: style.accent,
                    neutral: style.neutral,
                    solid: style.solid,
                    'solid-style': style.solidStyle,
                    border: style.border,
                    surface: style.surface,
                    transition: style.transition,
                    scaling: style.scaling,
                    'viz-style': dataStyle.variant,
                  })};
                  
                  // Apply default values
                  Object.entries(config).forEach(([key, value]) => {
                    root.setAttribute('data-' + key, value);
                  });
                  
                  // Resolve theme
                  const resolveTheme = (themeValue) => {
                    if (!themeValue || themeValue === 'system') {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                    return themeValue;
                  };
                  
                  // Apply saved theme
                  const savedTheme = localStorage.getItem('data-theme');
                  const resolvedTheme = resolveTheme(savedTheme);
                  root.setAttribute('data-theme', resolvedTheme);
                  
                  // Apply any saved style overrides
                  const styleKeys = Object.keys(config);
                  styleKeys.forEach(key => {
                    const value = localStorage.getItem('data-' + key);
                    if (value) {
                      root.setAttribute('data-' + key, value);
                    }
                  });
                } catch (e) {
                  console.error('Failed to initialize theme:', e);
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
			</head>
			<Providers>
			<Column
				as="body"
				background="page"
				fillWidth margin="0" padding="0">
				<Background
					position="fixed"
					mask={{
						cursor: effects.mask.cursor,
						x: effects.mask.x,
						y: effects.mask.y,
						radius: effects.mask.radius,
					}}
					gradient={{
						display: effects.gradient.display,
						x: effects.gradient.x,
						y: effects.gradient.y,
						width: effects.gradient.width,
						height: effects.gradient.height,
						tilt: effects.gradient.tilt,
						colorStart: effects.gradient.colorStart,
						colorEnd: effects.gradient.colorEnd,
						opacity: effects.gradient.opacity as
							| 0
							| 10
							| 20
							| 30
							| 40
							| 50
							| 60
							| 70
							| 80
							| 90
							| 100,
					}}
					dots={{
						display: effects.dots.display,
						color: effects.dots.color,
						size: effects.dots.size as any,
						opacity: effects.dots.opacity as any,
					}}
					grid={{
						display: effects.grid.display,
						color: effects.grid.color,
						width: effects.grid.width as any,
						height: effects.grid.height as any,
						opacity: effects.grid.opacity as any,
					}}
					lines={{
						display: effects.lines.display,
						opacity: effects.lines.opacity as any,
					}}
				/>
				{children}
				<Footer collections={collections}/>
			</Column>
			</Providers>
		</Flex>
		</>
	);
}
