import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section-wrap">
      <p className="eyebrow">404 / Let’s find the right route</p>
      <h1 className="section-heading">This page is off the map.</h1>
      <p className="lead">
        The address may have changed. Explore our survey services or get in
        touch and we’ll point you in the right direction.
      </p>
      <div className="hero-actions" style={{ marginTop: 30 }}>
        <Link href="/" className="button button-dark">
          Back to the homepage
        </Link>
        <Link href="/services" className="button button-outline">
          Explore services
        </Link>
      </div>
    </section>
  );
}
