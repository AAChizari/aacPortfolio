export const Text = ({
  title,
  colorTitle,
  description,
  normalText,
  titleSize = "text-3xl md:text-5xl",
  titleFont = "font-serif",
  colorTitleSize = "text-lg",
  colorTitleFont = "font-semibold",
  descriptionSize = "md:text-lg lg:text-xl",
  descriptionFont = "font-sans",
  normalTextSize = "text-base",
  normalTextFont = "font-sans",
  titlePosition = "",
  colorTitlePosition = "",
  descriptionPosition = "",
  normalTextPosition = "",
  titlePadding = "",
  colorTitlePadding = "",
  descriptionPadding = "",
  normalTextPadding = "",
  titleMarginTop = "mt-4",
  titleMarginBottom = "",
  colorTitleMarginTop = "mt-4",
  colorTitleMarginBottom = "",
  descriptionMarginTop = "mt-4",
  descriptionMarginBottom = "",
  normalTextMarginTop = "mt-4",
  normalTextMarginBottom = "",
  titleExtra = "",
  colorTitleExtra = "",
  descriptionExtra = "",
  normalTextExtra = "",
}: {
  title?: string;
  colorTitle?: string;
  description?: string;
  normalText?: string;
  titleSize?: string;
  titleFont?: string;
  colorTitleSize?: string;
  colorTitleFont?: string;
  descriptionSize?: string;
  descriptionFont?: string;
  normalTextSize?: string;
  normalTextFont?: string;
  titlePosition?: string;
  colorTitlePosition?: string;
  descriptionPosition?: string;
  normalTextPosition?: string;
  titlePadding?: string;
  colorTitlePadding?: string;
  descriptionPadding?: string;
  normalTextPadding?: string;
  titleMarginTop?: string;
  titleMarginBottom?: string;
  colorTitleMarginTop?: string;
  colorTitleMarginBottom?: string;
  descriptionMarginTop?: string;
  descriptionMarginBottom?: string;
  normalTextMarginTop?: string;
  normalTextMarginBottom?: string;
  titleExtra?: string;
  colorTitleExtra?: string;
  descriptionExtra?: string;
  normalTextExtra?: string;
}) => {
  return (
    <>
      {colorTitle && (
        <p
          className={`tracking-wide bg-gradient-to-r from-[#6ee7b7] to-[#009999] bg-clip-text text-transparent ${colorTitleSize} ${colorTitleFont} ${colorTitlePosition} ${colorTitlePadding} ${colorTitleMarginTop} ${colorTitleMarginBottom} ${colorTitleExtra}`}
        >
          {colorTitle}
        </p>
      )}
      {title && (
        <h2
          className={`${titleSize} ${titleFont} ${titlePosition} ${titlePadding} ${titleMarginTop} ${titleMarginBottom} ${titleExtra}`}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          className={`text-white/60 ${descriptionPosition} ${descriptionSize} ${descriptionFont} ${descriptionPadding} ${descriptionMarginTop} ${descriptionMarginBottom} ${descriptionExtra}`}
        >
          {description}
        </p>
      )}
      {normalText && (
        <p
          className={`${normalTextSize} ${normalTextFont} ${normalTextPosition} ${normalTextPadding} ${normalTextMarginTop} ${normalTextMarginBottom} ${normalTextExtra}`}
        >
          {normalText}
        </p>
      )}
    </>
  );
};