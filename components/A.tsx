import Link from "next/link";
import { ReactNode } from "react";
interface Atype {
  text?: string;
  href: string;
  locale?: string;
  className?: string;
  children?: ReactNode;
}

export default function A({ text, href, className, locale, children }: Atype) {
  return (
    <Link href={href} locale={locale} passHref>
      {children ? (
        <a className={`flex justify-center items-center w-fit ${className}`}>
          {children}
        </a>
      ) : (
        <a className={`flex justify-center items-center w-fit ${className}`}>
          {text}
        </a>
      )}
    </Link>
  );
}
