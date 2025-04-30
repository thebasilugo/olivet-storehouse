import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Define paths that should be protected (require authentication)
  const protectedPaths = [
    "/account",
    "/account/orders",
    "/account/profile",
    "/account/addresses",
    "/account/payment",
    "/account/wishlist",
    "/account/settings",
  ]

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some(
    (protectedPath) => path === protectedPath || path.startsWith(`${protectedPath}/`),
  )

  // Mock authentication check - in a real app, this would check for a valid session
  const isAuthenticated = request.cookies.has("auth_token")

  // If the path is protected and the user is not authenticated, redirect to login
  if (isProtectedPath && !isAuthenticated) {
    const loginUrl = new URL("/account/login", request.url)
    loginUrl.searchParams.set("from", path)
    return NextResponse.redirect(loginUrl)
  }

  // Add security headers to all responses
  const response = NextResponse.next()

  // Security headers
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  // Content Security Policy - adjust as needed for your application
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com;",
  )

  return response
}

// Only run middleware on specific paths
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
}

