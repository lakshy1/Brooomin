type SectionHeadingProps = {
  tag: string;
  heading: string;
  subtext?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  tag,
  heading,
  subtext,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`${alignClass} max-w-3xl`}>
      <span className="section-tag">{tag}</span>
      <h2 className="heading-tone font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
      {subtext ? (
        <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg">
          {subtext}
        </p>
      ) : null}
    </div>
  );
}
