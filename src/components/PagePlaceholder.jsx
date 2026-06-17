/* PagePlaceholder.jsx, общ placeholder за страници */

function PagePlaceholder({ eyebrow, title, description }) {
  return (
    <section className="container-narrow py-28 md:py-36 text-center animate-fade-in-up">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="mt-4 mb-5">{title}</h1>
      <span className="accent-rule" aria-hidden="true"></span>
      {description && (
        <p className="lede mt-6 max-w-xl mx-auto">{description}</p>
      )}
    </section>
  );
}

window.PagePlaceholder = PagePlaceholder;
