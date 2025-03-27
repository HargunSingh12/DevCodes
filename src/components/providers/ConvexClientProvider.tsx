"use client";
import { ClerkProvider,useAuth } from "@clerk/nextjs"
import { ConvexClient } from "convex/browser"
import { ConvexProviderWithClerk } from "convex/react-clerk"

const convex = new ConvexClient(process.env.NEXT_PUBLIC_CONVEX_URL!)
function ConvexClientProvider({children}:{children:React.ReactNode}) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            {children}
            </ConvexProviderWithClerk>
    </ClerkProvider>
    
    
  )
}

export default ConvexClientProvider
