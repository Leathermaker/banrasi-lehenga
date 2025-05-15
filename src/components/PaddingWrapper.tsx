import React from "react"
import { cn } from "../utils";


interface PaddingWrapperProps {
    children: React.ReactNode;
    className? : string;
}
const PaddingWrapper: React.FC<PaddingWrapperProps> = ({ children , className}) => {
    return (
        <div className={cn("px-4 md:px-24",className)}>
            {children}
        </div>
    )
}
export default PaddingWrapper