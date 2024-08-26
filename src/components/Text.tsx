export const Text = ({
  title,
  colorTitle,
  description,
  normalText,
  titleSize = 'text-3xl md:text-5xl',
  titleFont = 'font-serif',
  colorTitleSize = 'text-lg',
  colorTitleFont = 'font-semibold',
  descriptionSize = 'md:text-lg lg:text-xl',
  descriptionFont = 'font-sans',
  normalTextSize = 'text-base',
  normalTextFont = 'font-sans',
  titlePosition = '',
  colorTitlePosition = '',
  descriptionPosition = '',
  normalTextPosition = '',
  titlePadding = '',
  colorTitlePadding = '',
  descriptionPadding = '',
  normalTextPadding = '',
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
}) => {
  return (
    <>
      {colorTitle && (
        <p className={`mt-4 tracking-wide bg-gradient-to-r from-[#6ee7b7] to-[#009999] bg-clip-text text-transparent ${colorTitleSize} ${colorTitleFont} ${colorTitlePosition} ${colorTitlePadding}`}>
          {colorTitle}
        </p>
      )}
      {title && (
        <h2 className={`mt-4 ${titleSize} ${titleFont} ${titlePosition} ${titlePadding}`}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`text-white/60 mt-4 ${descriptionSize} ${descriptionFont} ${descriptionPosition} ${descriptionPadding}`}>
          {description}
        </p>
      )}
      {normalText && (
        <p className={`mt-4 ${normalTextSize} ${normalTextFont} ${normalTextPosition} ${normalTextPadding}`}>
          {normalText}
        </p>
      )}
    </>
  );
};