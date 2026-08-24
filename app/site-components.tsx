import Link from "next/link";

export const links = {
  calendar: "https://calendar.app.google/7REHjA7DQgKz125U7",
  square: "https://square.link/u/K6jriBfx",
  intake: "https://forms.gle/VFpgxmQ2D4VJQq3Q9",
  agreement: "https://forms.gle/HovmKuZBTo696V9R7",
  zoom: "https://us06web.zoom.us/j/6715690584?pwd=aWVNZThmcjFPejlRZ0M4aGdhTndUQT09",
  googleMaps: "https://www.google.com/maps/dir/?api=1&destination=5440+Augusta+Road%2C+Lexington%2C+SC",
  appleMaps: "https://maps.apple.com/?daddr=5440+Augusta+Road%2C+Lexington%2C+SC",
};

const navItems = [["About","/about"],["Services","/services"],["How It Works","/approach"],["Locations","/locations"],["For Students","/student-hub"],["Pricing","/pricing"],["FAQ","/faq"]];

export function Brand(){return <Link href="/" className="brand" aria-label="Miss Arnold's Tutoring Table home"><span><strong>Miss Arnold’s</strong><small>Tutoring Table</small></span><svg viewBox="0 0 54 48" aria-hidden="true"><path d="M8 40c12-2 22-12 25-29M19 29c-7 0-11-4-12-9 7-1 12 2 12 9Zm9-9c0-7 4-12 10-14 2 7-1 12-10 14Zm1 13c7-2 13 0 16 5-6 4-12 2-16-5Z"/></svg></Link>}

function Navigation({mobile=false}:{mobile?:boolean}){return <nav className={mobile?"mobile-nav":"desktop-nav"} aria-label={mobile?"Mobile navigation":"Main navigation"}>{navItems.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}{mobile&&<Link href="/contact">Contact</Link>}{mobile&&<Link className="button primary" href="/preassessment">Book a Pre-Assessment</Link>}</nav>}

export function Header(){return <><div className="topbar"><span>Now enrolling for reading, math & GED support</span><span>•</span><span>$40 per hour</span></div><header className="site-header"><Brand/><Navigation/><Link className="contact-link" href="/contact">Contact</Link><Link className="button primary header-cta" href="/preassessment">Book a Pre-Assessment</Link><details className="mobile-menu"><summary aria-label="Open navigation"><span></span><span></span><span></span></summary><Navigation mobile/></details></header></>}

export function Footer(){return <footer><div className="footer-main"><Brand/><p>Personalized one-on-one tutoring for learners in Grades 2–7 and adults.</p></div><div><h2>Explore</h2><Link href="/services">Services</Link><Link href="/approach">How It Works</Link><Link href="/pricing">Pricing</Link><Link href="/faq">FAQ</Link></div><div><h2>Current Students</h2><Link href="/student-hub">Student Hub</Link><Link href="/schedule">Book or Reschedule</Link><Link href="/resources">Resources</Link><Link href="/payment">Make a Payment</Link></div><div><h2>Get Started</h2><Link href="/preassessment">Book a Pre-Assessment</Link><Link href="/locations">Locations</Link><Link href="/contact">Contact</Link></div><p className="copyright">© 2026 Miss Arnold’s Tutoring Table. Serving Lexington, West Columbia, and online.</p></footer>}

export function SitePage({children}:{children:React.ReactNode}){return <><Header/><main>{children}</main><Footer/></>}
export function PageHero({kicker,title,intro,tone="cream"}:{kicker:string,title:string,intro:string,tone?:"cream"|"green"|"coral"}){return <section className={`page-hero ${tone}`}><div><p className="eyebrow">{kicker}</p><h1>{title}</h1><p>{intro}</p></div><svg viewBox="0 0 120 120" aria-hidden="true"><path d="M25 98c31-19 47-45 52-78M50 66c-23-1-34-13-34-30 21-2 34 9 34 30Zm21-28c1-20 13-31 29-34 4 19-7 31-29 34Zm-4 41c20-7 36-2 45 12-16 12-33 7-45-12Z"/></svg></section>}

export function Icon({name}:{name:"book"|"math"|"cap"|"laptop"|"person"|"heart"|"calendar"|"home"|"pin"|"check"}){const paths:Record<string,React.ReactNode>={book:<><path d="M4 6c5-2 9 0 10 3v19c-2-3-6-4-10-2V6Zm24 0c-5-2-9 0-10 3v19c2-3 6-4 10-2V6Z"/><path d="M14 9h4"/></>,math:<><rect x="5" y="3" width="22" height="26" rx="2"/><path d="M9 8h14v5H9zm1 10h2m4 0h2m4 0h2m-14 5h2m4 0h2m4 0h2"/></>,cap:<><path d="m3 13 13-7 13 7-13 7L3 13Zm6 4v7c4 3 10 3 14 0v-7m6-4v9"/></>,laptop:<><rect x="5" y="5" width="22" height="16" rx="2"/><path d="M2 26h28"/></>,person:<><circle cx="16" cy="9" r="5"/><path d="M6 29c0-7 4-11 10-11s10 4 10 11"/></>,heart:<path d="M16 28S3 20 3 11c0-7 9-10 13-3 4-7 13-4 13 3 0 9-13 17-13 17Z"/>,calendar:<><rect x="4" y="7" width="24" height="21" rx="2"/><path d="M10 3v8m12-8v8M4 13h24m-18 5h4m4 0h4m-12 5h4m4 0h4"/></>,home:<><path d="m3 15 13-11 13 11v14H3V15Z"/><path d="M12 29V19h8v10"/></>,pin:<><path d="M16 30S6 21 6 12a10 10 0 0 1 20 0c0 9-10 18-10 18Z"/><circle cx="16" cy="12" r="3"/></>,check:<><circle cx="16" cy="16" r="13"/><path d="m10 16 4 4 8-9"/></>};return <span className="icon"><svg viewBox="0 0 32 32" aria-hidden="true">{paths[name]}</svg></span>}

export function ExternalButton({href,children,className="secondary"}:{href:string,children:React.ReactNode,className?:string}){return <a className={`button ${className}`} href={href} target="_blank" rel="noopener noreferrer">{children}</a>}
export function CTA(){return <section className="cta"><div><p className="eyebrow">Ready to begin?</p><h2>Let’s find the right starting point.</h2><p>Your first session is a pre-assessment, available in person or through Zoom.</p></div><Link className="button cream-button" href="/preassessment">Book a Pre-Assessment <span>→</span></Link></section>}
