export type hdrFtrItem = {
    label: string;
    link?: string;
    target?: boolean; // blank by default
    onClick?: () => void;
};

export type hdrFtrProps = {
    cssClass?: string;
    items?: hdrFtrItem[];
};