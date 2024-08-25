export const SectionHeader = ({
  title,
  colorTitle,
  description,
  titleSize = 'text-3xl md:text-5xl',
  titleFont = 'font-serif',
  colorTitleSize = 'text-lg',
  colorTitleFont = 'font-semibold',
  descriptionSize = 'md:text-lg lg:text-xl',
  descriptionFont = 'font-sans',
}: {
  title?: string;
  colorTitle?: string;
  description?: string;
  titleSize?: string;
  titleFont?: string;
  colorTitleSize?: string;
  colorTitleFont?: string;
  descriptionSize?: string;
  descriptionFont?: string;
}) => {
  return (
    <>
      {colorTitle && (
          <p className={`mt-4 tracking-wide bg-gradient-to-r from-[#6ee7b7] to-[#009999] bg-clip-text text-transparent ${colorTitleSize} ${colorTitleFont}`}>
            {colorTitle}
          </p>
      )}
      {title && (
        <h2 className={`mt-4 ${titleSize} ${titleFont}`}>
          {title}
        </h2>
      )}
      {description && (
        <p className={`text-white/60 mt-4 ${descriptionSize} ${descriptionFont}`}>
          {description}
        </p>
      )}
    </>
  );
};