"use client";

type Props = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export const TrackedLink = ({ href, children, className }: Props) => {
    const handleClick = (e: any) => {
        e.preventDefault();

        // @ts-ignore
        window.gtag?.("event", "conversion", {
            send_to: "AW-16743737334/fLwSCN-0r94ZEPbPhLA-",
        });

        setTimeout(() => {
            window.location.href = href;
        }, 150);
    };

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    );
};