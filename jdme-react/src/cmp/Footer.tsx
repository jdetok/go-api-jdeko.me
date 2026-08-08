import type { hdrFtrProps } from "../types";

export default function Footer({ cssClass, items }: hdrFtrProps) {
    return (
        <div className={cssClass}>
            {items?.map((item, i) => (
                <div key={`${cssClass}-${i}`}>
                    {item.onClick ? (
                        <button onClick={item.onClick}>{item.label}</button>
                    ) : item.link ? (
                        <a target={item.target ? '' : '_blank'} href={item.link}>{item.label}</a>
                    ) : (
                        <span>{item.label}</span>
                    )}
                </div>
            ))}
        </div>
    )
}