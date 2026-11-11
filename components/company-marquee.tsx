import Image from "next/image";

const companyLogos = [
  { name: "Voltas", src: "/companies/VOLTAS.NS_BIG.png" },
  { name: "Samsung", src: "/companies/samsung.png" },
  { name: "LG", src: "/companies/lg.png" },
  { name: "Hitachi", src: "/companies/Hitachi-Logo-768x432.png" },
  { name: "Godrej", src: "/companies/Godrej_1897.svg" },
];

export function CompanyMarquee() {
  return (
    <section className="section-sm overflow-hidden bg-paper-2" aria-labelledby="company-marquee-title">
      <div className="container-x">
        <h2 id="company-marquee-title" className="display-3 max-w-[20ch]">
          Equipment brands available for your project.
        </h2>
        <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-ink-muted">
          Brand and model availability is confirmed against the approved HVAC
          specification before ordering.
        </p>
      </div>

      <div className="brand-marquee mt-9" role="group" aria-label="Available equipment brands">
        <div className="brand-marquee__track">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="brand-marquee__group"
              aria-hidden={copy === 1}
            >
              {companyLogos.map((company) => (
                <li key={company.name} className="brand-marquee__logo">
                  <Image
                    src={company.src}
                    alt={copy === 0 ? company.name : ""}
                    fill
                    sizes="(max-width: 640px) 8rem, 11rem"
                    className="brand-marquee__image"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
