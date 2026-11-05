import './project-visuals.css';

// Copy images/ to public/portfolio/. Adjust basePath for your framework.
export function ProjectVisual({ eyebrow, title, description, children, className = '' }) {
  return <section className={`project-visual ${className}`}>
    {(eyebrow || title || description) && <header className="project-visual__header">
      {eyebrow && <p className="project-visual__eyebrow">{eyebrow}</p>}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </header>}
    {children}
  </section>;
}

export function ChargingVisual({ basePath = '/portfolio', ...props }) {
  return <ProjectVisual {...props}>
    <div className="charging-grid">
      <figure><img src={`${basePath}/Voltra/charging-start.png`} alt="Charging display: starting a session" width="948" height="1592" loading="lazy" /><figcaption>Starting a session</figcaption></figure>
      <figure><img src={`${basePath}/Voltra/charging-active.png`} alt="Charging display: session in progress" width="956" height="1592" loading="lazy" /><figcaption>Charging in progress</figcaption></figure>
      <figure><img src={`${basePath}/Voltra/charging-complete.png`} alt="Charging display: completed session and summary" width="956" height="1592" loading="lazy" /><figcaption>Session complete</figcaption></figure>
    </div>
  </ProjectVisual>;
}

export function ElainVisual({ basePath = '/portfolio', ...props }) {
  return <ProjectVisual {...props}><img className="dashboard-image" src={`${basePath}/Elain/elain-dashboard.webp`} alt="Elain emissions reporting dashboard" width="1970" height="1217" loading="lazy" /></ProjectVisual>;
}

export function PersonaVisual({ basePath = '/portfolio', ...props }) {
  const personas = [['persona-carrier', 'Carrier'], ['persona-buyer', 'Transport buyer'], ['persona-decision-maker', 'Decision maker']];
  return <ProjectVisual {...props}><div className="persona-grid">{personas.map(([file, label]) => <figure key={file}><img src={`${basePath}/Elain/${file}.webp`} alt={`${label} persona`} loading="lazy" /><figcaption>{label}</figcaption></figure>)}</div></ProjectVisual>;
}

export function ProcessVisual({ basePath = '/portfolio', ...props }) {
  return <ProjectVisual {...props}><img className="process-image" src={`${basePath}/Elain/elain-delivery-process.svg`} alt="Elain product delivery workflow: frame the request, align and decide, research and define, design and review, agree and refine, develop and deliver. Research is optional and reviews iterate." width="1800" height="1350" loading="lazy" /></ProjectVisual>;
}

// Example:
// <ChargingVisual eyebrow="Charging / Interface design"
//   title="Clarity at every charging stage"
//   description="Session feedback for electric heavy-duty vehicles" />
// Omit title/description when your case-study page already provides them.
