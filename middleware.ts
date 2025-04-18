import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "uk", "ru"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(uk|en|ru)/:path*"],
};
