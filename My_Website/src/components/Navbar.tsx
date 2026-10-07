const NAV = ["Home", "About", "Skills", "Projects", "Services", "Contact"];

export default function Navbar() {
  return (
    <nav>
      <div className="wrap">
        <a href="#home" className="logo">&lt;Chandana<span> /&gt;</span></a>
        <ul>
          {NAV.map((n, i) => (
            <li key={n} className={i === 0 ? "on" : ""}>
              <a href={`#${n.toLowerCase()}`}>{n}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}