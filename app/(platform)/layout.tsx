import { ClerkProvider } from "@clerk/nextjs"

const PlatformLaout=({ children }:{ children : React.ReactNode })=>{
    return (
        <ClerkProvider>
            {children}
        </ClerkProvider>
    )
}

export default PlatformLaout;
