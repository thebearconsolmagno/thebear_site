export interface Domain {
  number: string;
  slug: string;
  title: string;
  summary: string;
  introduction: string;
  builds: string[];
  experience: { period: string; role: string; organisation: string; detail: string }[];
  practices: string[];
}

export const domains: Domain[] = [
  {
    number: '01', slug: 'software-engineering', title: 'Software engineering',
    summary: 'Backend systems, APIs, platforms and applications that stand up to real operational work.',
    introduction: 'Software is most valuable when it makes a complex operation clearer, faster and more dependable. I work across the full path from problem framing through implementation and long-term maintenance.',
    builds: ['Operational applications and backend services', 'APIs, data flows and system integrations', 'Tools that replace fragile manual workflows', 'Reporting, analytics and decision-support interfaces', 'Web, mobile, desktop and connected-device software'],
    practices: ['Clear service boundaries and contracts', 'Data-informed workflows and reporting', 'Testable, maintainable code over novelty', 'Performance appropriate to the operational context', 'Integration designed around real users and process owners'],
    experience: [
      { period: '2024', role: 'Senior Software Engineer / DevOps', organisation: 'SIRMEC', detail: 'Developed tools, automated workflows and analytical reporting for sales, packaging production and transportation operations.' },
      { period: '2023', role: 'DevOps Engineer / Senior Software Engineer', organisation: 'Vemar', detail: 'Built automation logic and interfaces across Python, Ruby and PHP services for connected residential and industrial environments.' },
      { period: '2004—2019', role: 'Senior Software & Game Developer / Full-Stack Engineer', organisation: 'NewLand Games', detail: 'Delivered multi-platform web, mobile, desktop and distributed software; built Python, Java and data-intensive systems alongside high-performance interactive products.' },
      { period: '2004—2019', role: 'Co-founder / Digital Transformation Initiative', organisation: 'Avanti il SUD', detail: 'Helped small businesses adopt e-commerce, workflow automation and digital operating models during a period of major disruption.' },
    ],
  },
  {
    number: '02', slug: 'system-architecture', title: 'System architecture',
    summary: 'Reliable, maintainable systems shaped around boundaries, failure modes and change.',
    introduction: 'Architecture is the set of decisions that lets a system evolve without becoming fragile. It is how interfaces, data, operations and security work together under real constraints.',
    builds: ['System boundaries and integration patterns', 'Reliable service and data architectures', 'Technical direction for evolving platforms', 'Interfaces between operational technology and software services', 'Architecture roadmaps that reduce accidental complexity'],
    practices: ['Design for failure and recovery', 'Make dependencies and ownership visible', 'Prefer evolvable boundaries over premature complexity', 'Build observability into critical flows', 'Treat security and operations as architectural inputs'],
    experience: [
      { period: '2024—2025', role: 'DevOps Engineer', organisation: 'Green Solutions / Gruppo VGS', detail: 'Connected monitoring, access-control, notification and infrastructure systems for tunnel and industrial environments.' },
      { period: '2024', role: 'Senior Software Engineer / DevOps', organisation: 'SIRMEC', detail: 'Integrated workflows between commercial, production and transport departments to replace inconsistent manual hand-offs.' },
      { period: '2023', role: 'DevOps Engineer / Senior Software Engineer', organisation: 'Vemar', detail: 'Designed integrations across MQTT, Z-Wave, REST APIs and heterogeneous device ecosystems.' },
      { period: '2004—2019', role: 'Senior Software & Game Developer / Full-Stack Engineer', organisation: 'NewLand Games', detail: 'Applied an architecture-first approach to scalable web services, data systems and multi-platform products.' },
    ],
  },
  {
    number: '03', slug: 'devops-automation', title: 'DevOps & automation',
    summary: 'Infrastructure, delivery pipelines, containers and repeatable operational workflows.',
    introduction: 'Delivery is part of engineering. I use automation to remove drift, reduce manual overhead and give teams repeatable paths from change to reliable operation.',
    builds: ['Linux-based application and server environments', 'Automation scripts and operational workflows', 'Monitoring, logging and alerting practices', 'Repeatable deployment and configuration paths', 'Process automation across teams and departments'],
    practices: ['Automate repeatable operations', 'Observe before optimizing', 'Keep delivery boring and reliable', 'Document operational hand-offs', 'Use version control and reproducible configuration'],
    experience: [
      { period: '2024—2025', role: 'DevOps Engineer', organisation: 'Green Solutions / Gruppo VGS', detail: 'Managed Linux infrastructure and server-side automation for safety, surveillance, access-control and emergency-notification systems.' },
      { period: '2024', role: 'Senior Software Engineer / DevOps', organisation: 'SIRMEC', detail: 'Automated internal processes and supported application operations across Linux and Windows environments.' },
      { period: '2023', role: 'DevOps Engineer / Senior Software Engineer', organisation: 'Vemar', detail: 'Created Bash and Python automation for a headless Linux IoT environment and its connected services.' },
      { period: '2004—2019', role: 'Senior Software & Game Developer / Full-Stack Engineer', organisation: 'NewLand Games', detail: 'Worked with CI/CD, version control and Linux environments to support reliable delivery of multi-platform software.' },
    ],
  },
  {
    number: '04', slug: 'cybersecurity', title: 'Cybersecurity',
    summary: 'Security controls and engineering practices considered from the first system decision.',
    introduction: 'Security is not a layer added at the edge of a solution. It is built into the way systems identify people, control access, handle data and respond when conditions change.',
    builds: ['Access-control and identity integrations', 'Security-aware system interfaces', 'Monitoring and incident notification paths', 'Authorized penetration testing and security assessments', 'Vulnerability discovery, remediation and verification', 'Secure deployment and configuration hardening'],
    practices: ['Security as an architectural concern', 'Authorized pentesting with clear scope and responsible reporting', 'Vulnerability management from discovery to remediation', 'Least privilege in operational flows', 'Secure defaults and configuration hardening', 'Traceable events, alerts and controls'],
    experience: [
      { period: '2024—2025', role: 'DevOps Engineer', organisation: 'Green Solutions / Gruppo VGS', detail: 'Worked with Hikvision surveillance, Blueup access control, worker tracking and automated emergency alerting for high-consequence industrial environments.' },
      { period: '2024', role: 'Senior Software Engineer / DevOps', organisation: 'SIRMEC', detail: 'Supported controlled application and infrastructure operations while integrating departmental systems and data flows.' },
      { period: '2023', role: 'DevOps Engineer / Senior Software Engineer', organisation: 'Vemar', detail: 'Integrated heterogeneous devices and remote services with an emphasis on controlled communication, Linux stability and operational visibility.' },
    ],
  },
  {
    number: '05', slug: 'industrial-systems', title: 'Industrial systems',
    summary: 'Automation, IoT, telemetry and integrations for environments where reliability matters.',
    introduction: 'Industrial systems connect software to physical operations. They demand careful integration, visibility and interfaces that work for people in the field as well as systems in the background.',
    builds: ['IoT and telemetry-connected environments', 'Safety, monitoring and automation systems', 'Industrial platform integrations', 'Worker-tracking and access-control workflows', 'Embedded and headless Linux control environments'],
    practices: ['Respect physical constraints and safety impact', 'Prioritise reliability and clarity for operators', 'Design fallbacks and notifications deliberately', 'Integrate standards and vendors without losing visibility', 'Use telemetry to improve operations over time'],
    experience: [
      { period: '2024—2025', role: 'DevOps Engineer', organisation: 'Green Solutions / Gruppo VGS', detail: 'Supported tunnel, mining and industrial safety systems for gas, fire, flood and worker-safety scenarios, including real-time alerts and tracking.' },
      { period: '2023', role: 'DevOps Engineer / Senior Software Engineer', organisation: 'Vemar', detail: 'Integrated MQTT, Z-Wave, Raspberry Pi, Arduino and ESP devices with building and home-automation ecosystems.' },
      { period: '2004—2019', role: 'Senior Software & Game Developer / Full-Stack Engineer', organisation: 'NewLand Games', detail: 'Worked with IoT setups and headless Linux systems, focusing on stability, performance and interoperability with legacy technologies.' },
    ],
  },
  {
    number: '06', slug: 'intelligent-systems', title: 'Intelligent systems',
    summary: 'AI-assisted engineering and automation designed to support better technical decisions.',
    introduction: 'Intelligent systems should be useful before they are impressive. I approach AI-assisted engineering as a way to make information, automation and technical decision-making more capable and more accessible.',
    builds: ['AI-assisted engineering workflows', 'Intelligent process automation', 'Decision-support systems grounded in operational data', 'Predictive maintenance and anomaly-aware automation', 'Analytical dashboards that expose bottlenecks and opportunities'],
    practices: ['Human judgement remains accountable', 'Ground automation in observable operational data', 'Use clear, testable system boundaries', 'Measure practical outcomes instead of novelty', 'Keep decision paths understandable to operators'],
    experience: [
      { period: '2024', role: 'Senior Software Engineer / DevOps', organisation: 'SIRMEC', detail: 'Built analytical reports and dashboards that helped teams identify operational bottlenecks and performance opportunities.' },
      { period: '2023', role: 'DevOps Engineer / Senior Software Engineer', organisation: 'Vemar', detail: 'Implemented predictive-maintenance logic and real-time IoT data handling across a multi-device automation environment.' },
      { period: '2004—2019', role: 'Co-founder / Digital Transformation Initiative', organisation: 'Avanti il SUD', detail: 'Applied practical automation and digital operating models to help local businesses make better decisions and sustain operations.' },
      { period: 'Current focus', role: 'Technical Architecture', organisation: 'The Bear Engineering Workspace', detail: 'Exploring AI-assisted development and automation patterns that retain engineering judgement and operational accountability.' },
    ],
  },
  {
    number: '07', slug: 'ai-engineering', title: 'AI engineering',
    summary: 'AI-enabled systems and workflows designed for useful, reliable engineering outcomes.',
    introduction: 'AI engineering connects models, data, tools and product constraints into systems that people can use and trust. The goal is not simply to add AI, but to make automation and decision support practical, observable and accountable.',
    builds: ['AI-assisted development and engineering workflows', 'Retrieval and knowledge-support systems', 'Intelligent automation for repetitive technical work', 'Human-in-the-loop decision-support interfaces', 'Evaluation, observability and guardrails for AI-enabled features'],
    practices: ['Start with a measurable operational problem', 'Keep humans accountable for consequential decisions', 'Evaluate quality, reliability and failure modes', 'Protect sensitive data and control access to context', 'Make AI outputs traceable, reviewable and easy to override'],
    experience: [
      { period: 'Current focus', role: 'AI Engineer / Technical Architect', organisation: 'The Bear Engineering Workspace', detail: 'Designing AI-assisted workflows that help engineering teams reason about systems, automate repeatable work and preserve accountability.' },
      { period: '2024', role: 'Senior Software Engineer / DevOps', organisation: 'SIRMEC', detail: 'Built data-driven reporting and dashboards that established the operational-data foundation for better decision support and automation.' },
      { period: '2023', role: 'DevOps Engineer / Senior Software Engineer', organisation: 'Vemar', detail: 'Implemented predictive-maintenance logic and real-time device data handling across an integrated automation environment.' },
      { period: '2004—2019', role: 'Senior Software & Game Developer / Full-Stack Engineer', organisation: 'NewLand Games', detail: 'Built data-oriented backend services and multi-platform applications, developing the systems engineering foundation used in current AI work.' },
    ],
  },
];
