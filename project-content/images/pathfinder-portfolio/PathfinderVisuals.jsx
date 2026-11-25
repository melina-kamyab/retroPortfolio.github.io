import './pathfinder-visuals.css';

// Copy images/ into public/portfolio/pathfinder/.
export function PathfinderVisual({ kind = 'hero', basePath = '/portfolio/pathfinder-portfolio/images', title, caption }) {
  const images = {
    hero: ['pathfinder - hero.webp', 'Pathfinder landing page hero with product message and calls to action'],
    steps: ['Pathfinder - How it works.webp', 'Three-step explanation of adding data, comparing alternatives, and exporting a plan'],
    customerCases: ['Pathfinder - Customer cases.webp', 'Pathfinder customer cases'],
    knowledgeHub: ['Pathfinder - Knowledge hub.webp', 'Pathfinder knowledge hub'],
  };
  const [file, alt] = images[kind] ?? images.hero;
  return <figure className="pathfinder-visual">
    {title && <h3>{title}</h3>}
    <img src={`${basePath}/${file}`} alt={alt} loading="lazy" />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}
// <PathfinderVisual kind="hero" caption="A focused introduction with two clear next steps." />
