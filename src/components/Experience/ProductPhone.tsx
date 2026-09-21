import React from 'react';
import { ExternalLink } from 'lucide-react';

function PlatformIcon({ isIos }: { isIos: boolean }) {
  if (isIos) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M17.05 12.54c-.02-2.4 1.96-3.57 2.05-3.63a4.4 4.4 0 0 0-3.48-1.88c-1.46-.15-2.88.88-3.62.88-.75 0-1.89-.87-3.11-.84a4.6 4.6 0 0 0-3.87 2.36c-1.68 2.91-.43 7.18 1.18 9.53.81 1.16 1.75 2.45 2.97 2.4 1.2-.05 1.65-.77 3.1-.77 1.43 0 1.86.77 3.11.74 1.29-.02 2.1-1.16 2.88-2.33a9.5 9.5 0 0 0 1.32-2.68 4.15 4.15 0 0 1-2.53-3.78ZM14.67 5.48A4.2 4.2 0 0 0 15.64 2a4.3 4.3 0 0 0-2.8 1.66 4 4 0 0 0-1 3.37 3.56 3.56 0 0 0 2.83-1.55Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="m7.2 5.1-1.1-1.9a.55.55 0 1 1 .95-.55l1.12 1.94A8.1 8.1 0 0 1 12 3.65c1.38 0 2.68.34 3.83.94l1.12-1.94a.55.55 0 1 1 .95.55l-1.1 1.9A7.55 7.55 0 0 1 20 11H4a7.55 7.55 0 0 1 3.2-5.9ZM8 8.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm8 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 12h16v7.25A1.75 1.75 0 0 1 18.25 21H17v1.25a.75.75 0 0 1-1.5 0V21h-7v1.25a.75.75 0 0 1-1.5 0V21H5.75A1.75 1.75 0 0 1 4 19.25V12Z" />
    </svg>
  );
}

type ProductPhoneProps = {
  product: { name: string; brandColor?: string };
  platform: string;
  href: string;
  logo: string;
  brandColor?: string;
};

export default function ProductPhone({
  product,
  platform,
  href,
  logo,
  brandColor,
}: ProductPhoneProps) {
  const isIos = platform === 'ios';
  const productColor = product.brandColor || brandColor || '#3ddc84';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${product.name} on ${isIos ? 'the App Store' : 'Google Play'}`}
      className="group/phone flex flex-col items-center gap-3 cursor-none"
    >
      <div
        className={`relative h-[202px] w-[104px] border border-white/20 bg-[#080a0c] p-[5px] shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition-[border-color,box-shadow] duration-300 group-hover/phone:border-androidGreen/50 group-hover/phone:shadow-[0_22px_55px_rgba(61,220,132,0.12)] ${
          isIos ? 'rounded-[30px]' : 'rounded-[10px]'
        }`}
      >
        <div
          className={`relative flex h-full flex-col items-center justify-center overflow-hidden ${
            isIos ? 'rounded-[25px]' : 'rounded-[5px]'
          }`}
          style={{
            background: `linear-gradient(160deg, ${productColor}66 0%, ${productColor}20 42%, #0d1012 78%)`,
          }}
        >
          {isIos ? (
            <div className="absolute left-1/2 top-2 h-3 w-10 -translate-x-1/2 rounded-full bg-black" />
          ) : (
            <div className="absolute left-1/2 top-2.5 h-2 w-2 -translate-x-1/2 rounded-full bg-black ring-1 ring-white/10" />
          )}

          <div
            className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl shadow-xl"
            style={{ backgroundColor: productColor }}
          >
            <img
              src={logo}
              alt={`${product.name} logo`}
              className="h-9 w-9 object-contain brightness-0 invert"
            />
          </div>
          <span className="relative z-10 mt-3 max-w-[78px] text-center text-[10px] font-semibold leading-tight text-white/90">
            {product.name}
          </span>

          <div className="absolute bottom-1 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full bg-white/25" />
        </div>
      </div>

      <span
        title={isIos ? 'Open in the App Store' : 'Open in Google Play'}
        className="flex items-center gap-1.5 text-white/45 transition-colors group-hover/phone:text-androidGreen"
      >
        <PlatformIcon isIos={isIos} />
        <ExternalLink className="h-3 w-3" />
      </span>
    </a>
  );
}
