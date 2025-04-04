import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
  supporterOnly?: boolean;
}

export function ProtectedRoute({ children, supporterOnly = false }: ProtectedRouteProps) {
  const { data: session, status } = useSession();
  
  if (status === "loading") {
    // You could render a loading spinner here
    return <div>Loading...</div>;
  }
  
  if (status === "unauthenticated") {
    redirect("/login");
    return null;
  }
  
  // Check if this is a supporter-only route
  if (supporterOnly && !session?.user?.isSupporter) {
    redirect("/");
    return null;
  }
  
  // Check if this is a user-only route
  if (!supporterOnly && session?.user?.isSupporter) {
    redirect("/supporter");
    return null;
  }
  
  return <>{children}</>;
}
