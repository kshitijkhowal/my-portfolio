import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function ProductPhone({ product, platform, href, logo, brandColor }) {
  const isIos = platform === 'ios';
  const productColor = brandColor || '#3ddc84';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${product.name} on ${isIos ? 'the App Store' : 'Google Play'}`}
      className="group/phone flex flex-col items-center gap-3 cursor-none"
    >
      <div
        className={`relative h-[202px] w-[104px] border border-white/20 bg-[#080a0c] p-[5px] shadow-[0_18px_45px_rgba(0,0,0,0.45)] transition-all duration-300 group-hover/phone:-translate-y-2 group-hover/phone:border-androidGreen/50 group-hover/phone:shadow-[0_22px_55px_rgba(61,220,132,0.12)] ${
          isIos ? 'rounded-[28px]' : 'rounded-[20px]'
        }`}
      >
        <div
          className={`relative flex h-full flex-col items-center justify-center overflow-hidden ${
            isIos ? 'rounded-[23px]' : 'rounded-[15px]'
          }`}
          style={{
            background: `linear-gradient(160deg, ${productColor}66 0%, ${productColor}20 42%, #0d1012 78%)`,
          }}
        >
          {isIos ? (
            <div className="absolute left-1/2 top-2 h-4 w-12 -translate-x-1/2 rounded-full bg-black" />
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

          <div className="absolute bottom-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-white/25" />
        </div>
      </div>

      <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-white/45 transition-colors group-hover/phone:text-androidGreen">
        {isIos ? 'iOS' : 'Android'}
        <ExternalLink className="h-3 w-3" />
      </span>
    </a>
  );
}
