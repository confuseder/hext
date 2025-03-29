"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { HTMLAttributes, ReactNode } from 'react';

gsap.registerPlugin(useGSAP);

export default function AnimationBox({
    children,
    ...props
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!contentRef.current) return;

        const elements = gsap.utils.toArray<HTMLElement>(contentRef.current.children);

        gsap.from(elements, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            ease: 'power3.out',
            stagger: 0.05,

        });
    }, { scope: contentRef, revertOnUpdate: true });


    return (
        <div {...props} ref={contentRef}>{children}</div>
    );
}
