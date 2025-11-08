import createMiddleware from "next-intl/middleware";
export default createMiddleware({ locales: ["en","tr","ar"], defaultLocale: "en" });
export const config = { matcher: ["/", "/(en|tr|ar)/:path*"] };
