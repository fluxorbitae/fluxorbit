import { InlineCode, Icon } from "@once-ui-system/core";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://your-site.com";

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const heading = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const label = Geist({
  variable: "--font-label",
  subsets: ["latin"],
  display: "swap",
});

const code = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const fonts = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light - not needed when using ThemeProvider
  neutral: "gray", // sand | gray | slate
  brand: "blue", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "indigo", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const dataStyle = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false
  },
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: "2",
    color: "brand-on-background-weak",
    opacity: 40,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    thickness: 1,
    angle: 45,
    size: "8",
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    width: "2",
    height: "2",
  },
};

// This section will appear on the homepage once you sync the relatedProduct slugs with Fourthwall
const featuredProducts = [
  {
    promoImage: '/images/example-1.jpg',
    title: 'Magic Store is here!',
    description: 'Start selling premium quality merch through an easy-to-use store.',
    relatedProduct: 'related-product-slug-1'
  },
  {
    promoImage: '/images/example-2.jpg',
    title: 'Start selling without the hassle',
    description: 'Set up in minutes, start selling in hours.',
    relatedProduct: 'related-product-slug-2'
  },
  {
    promoImage: '/images/example-3.jpg',
    title: 'Once UI handles design, Fourthwall handles the rest',
    description: 'Enjoy the benefits of Once UI and the power of Fourthwall.',
    relatedProduct: 'related-product-slug-3'
  }
];

const banner = {
  display: true,
  content: <><Icon size="xs" onSolid="brand-strong" name="cart"/>Free delivery on orders above $75</>,
}

const mailchimp = {
  display: true,
  title: <>Sign up and enjoy <InlineCode>10%</InlineCode> off</>,
  description: <>Get notified about new product drops and offers</>,
  action: 'https://mailchimp.us.list-manage.com/subscribe/post',
}

const meta = {
  title: "Magic Store",
  description:
    "Start selling premium quality merch through an easy-to-use store.",
};

// default open graph data
const og = {
  title: meta.title,
  description: meta.description,
  type: "website",
  image: "/images/cover.jpg"
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "Magic Store",
  description: meta.description,
  email: "email@address.com",
};

// social links used for the sameAs property in schema
const sameAs = {
  twitter: "https://www.twitter.com",
  linkedin: "https://www.linkedin.com",
  discord: "https://discord.com",
};

// social links rendered in the footer
const social = [
  // Import new icons in /once-ui/icons.ts
  {
      name: 'GitHub',
      icon: 'github',
      link: 'https://github.com/once-ui-system',
  },
  {
      name: 'Threads',
      icon: 'threads',
      link: 'https://www.threads.com/@once-ui',
  },
  {
      name: 'Email',
      icon: 'email',
      link: 'mailto:support@once-ui.com',
  },
]

export { featuredProducts, baseURL, og, fonts, style, meta, schema, social, sameAs, effects, dataStyle, banner, mailchimp };
