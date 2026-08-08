import type { hdrFtrProps } from "../types";

export default function Header({ cssClass, items }: hdrFtrProps) {
    return (
        <div className={cssClass}>
            {items?.map((item, i) => (
                <div>
                    {item.link ? (
                        <a target="_blank" key={`hdr-${i}`} href={item.link}>{item.label}</a>
                    ) : (
                        <span key={`hdr-${i}`}>{item.label}</span>
                    )}
                </div>
            ))}
        </div>
    )
}