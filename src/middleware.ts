import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Check if user is authenticated
  // In a real app, this would check for a session cookie
  // For this demo, we'll just redirect to login if the path isn't allowed
  
  const path = request.nextUrl.pathname;
  
  // Allow access to login page and static files
  if (
    path === '/login' || 
    path.startsWith('/api/') || 
    path.startsWith('/_next/') || 
    path.includes('favicon.ico')
  ) {
    return NextResponse.next();
  }
  
  // For demo purposes, we'll allow all paths
  // In a real app, you would check for authentication here
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all routes except login, api, and static files
    "/((?!login|api|_next/static|_next/image|favicon.ico).*)",
  ],
};
