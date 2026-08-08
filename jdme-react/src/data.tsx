import type { hdrFtrItem } from "./types";

export const baseUrl = 'https://jdeko.me'

export const headerItems: hdrFtrItem[] = [
    { label: 'jdeko.me', link: baseUrl },
    { label: 'about', link: `${baseUrl}/about` },
    { label: 'source code', link: 'https://github.com/jdetok/jdme' },
    { label: 'supporting tech', link: `${baseUrl}/tech` },
    { label: 'professional resume', link: `${baseUrl}/resume/cv` },
    { label: 'linkedin', link: 'https://www.linkedin.com/in/justin-dekock-257879185' },
];


export const footerItems: hdrFtrItem[] = [
    { label: 'jdeko.me', link: baseUrl },
    { label: 'created & maintained by Justin DeKock' },
    { label: 'contact me', link: 'mailto:jdekock17@gmail.com' },
    { label: 'source code', link: 'https://github.com/jdetok/jdme' },
    { label: 'scroll to top', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' })},
];