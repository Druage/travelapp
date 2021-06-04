import React from "react";
import useAuth0 from "@auth0/auth0-react/dist/use-auth0";

export function AuthGuard({children}: any) {
    const { isAuthenticated } = useAuth0();

    return (
       isAuthenticated && {...children}
    )
}
