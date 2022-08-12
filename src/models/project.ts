export type Project = {
    id: number;
    title: string;
    description: string;
    pageHref: string;
    codeHref: string;
    transition: {
        delay: number;
        duration: number;
        easing: string;
        opacity: number;
        x: number;
        y: number;
    };
}