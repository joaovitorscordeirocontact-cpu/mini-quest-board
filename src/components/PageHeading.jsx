import "./PageHeading.css";

export function PageHeading({ page }) {
  return (
    <div className="Heading-block">
      <p className="page-name-heading">{page.name}</p>
      <p className="info-paragraph">{page.paragraph}</p>
    </div>
  );
}