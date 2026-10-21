import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextRequest, NextResponse } from "next/server";

const intlMiddleware = createMiddleware(routing);

// On liste les routes qui nécessitent d'être connecté
const protectedRoutes = ["/dashboard", "/edit-profile"];

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // On vérifie si l'URL actuelle (sans la locale) correspond à une route protégée
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.includes(route)
  );

  // On vérifie si le cookie de session NextAuth existe
  const sessionCookie =
    request.cookies.get("authjs.session-token") ||
    request.cookies.get("__Secure-authjs.session-token");

  if (isProtectedRoute && !sessionCookie) {
    // Si la route est protégée et qu'il n'y a pas de session, on redirige vers /login
    // On garde la langue dans l'URL (ex: /fr/dashboard -> /fr/login)
    const locale = pathname.split("/")[1] || routing.defaultLocale;
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  }

  // Si tout est bon, on laisse next-intl gérer le reste
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};