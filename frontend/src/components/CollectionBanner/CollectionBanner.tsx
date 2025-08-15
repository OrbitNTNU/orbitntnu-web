import * as React from "react";

export interface BlueCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  ariaLabel?: string;
  x?: number;
  y?: number;
  splashProgress?: number;
}

export const CollectionBanner: React.FC<BlueCircleProps> = ({
                                                              size = 200,
                                                              ariaLabel = "Blue circle",
                                                              className = "",
                                                              style,
                                                              x = 0,
                                                              y = 0,
                                                              splashProgress = 0,
                                                              ...rest
                                                            }) => {
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const targetHeight = lerp(size, size * 0.6, splashProgress);
  const targetWidth = lerp(targetHeight, targetHeight / 2, splashProgress);
  const r = targetHeight / 2;
  const circleBR = "9999px";
  const halfLeftBR = `${0}px ${r}px ${r}px ${0}px / ${0}px ${r}px ${r}px ${0}px`;
  const borderRadius = splashProgress < 0.001 ? circleBR : halfLeftBR;
  const textOpacity = Math.max(0, 1 - splashProgress * 1.25);

  const spinnerSize = Math.max(targetWidth, targetHeight) ;

  return (
    <section
      role="img"
      aria-label={ariaLabel}
      className={`fixed top-0 left-0 z-[9999] overflow-hidden bg-blue-600 ${className}`}
      style={{
        width: `${targetWidth}px`,
        height: `${targetHeight}px`,
        borderRadius,
        transform: `translate(${x}px, ${y}px)`,
        willChange: "transform, width, height, border-radius",
        transition:
          "transform 300ms ease-out, width 300ms ease-out, height 300ms ease-out, border-radius 300ms ease-out",
        ...style,
      }}
      {...rest}
    >
      <svg
        width={spinnerSize}
        height={spinnerSize}
        viewBox="-90 -90 180 180"
        className="absolute inset-0 m-auto pointer-events-none"
        aria-hidden="true"
      >
        <g transform="rotate(-90)">
          <path d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70 Z" fill="#DDA63C">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 0 0"
              to="0 0 0"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </svg>

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        style={{ opacity: textOpacity, pointerEvents: textOpacity > 0.01 ? "auto" : "none" }}
        aria-hidden={textOpacity <= 0.01}
      >
        <p className="text-white font-semibold leading-tight break-words max-w-full text-3xl">
        </p>
        <a
          href="https://kreftforeningen.no/stafettforlivet/tilbud/kreftforeningens-stafett-for-livet-trondheim/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-flex items-center justify-center"
          tabIndex={textOpacity > 0.01 ? 0 : -1}
          aria-label="Innsamlingsaksjon"
        >
          <img
            src="https://kreftforeningen.no/content/uploads/2020/03/cropped-kf-propell-ikon-135x135.png"
            alt="Kreftforeningens Stafett for livet i Trondheim – les mer og meld deg på"
            className="block object-contain w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
               transition-transform duration-200 ease-out hover:scale-150"
            draggable={false}
          />
        </a>

      </div>
    </section>
  );
};
