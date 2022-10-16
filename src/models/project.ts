export type Project = {
    id: number;
    title: string;
    description: string;
    techniques: string[];
    pageHref: string;
    codeHref: string;
    transition: {
        x: number;
        y: number;
    };
}