import './header.css';

function Header({ activePage, onNavigate }) {
  const links = [
    'Home',
    'Solutions',
    'Sound Studio',
    'Relaxation Library',
    'Wellness Insights',
    'Science Behind'
  ];

  return (
    <header className="main-header">
      <div className="header-logo" onClick={() => onNavigate('Home')}>
        <span className="logo-icon">N</span>
        <span>Neuromind</span>
      </div>

      <nav className="header-navigation">
        {links.map((link) => (
          <button
            key={link}
            className={`nav-link ${activePage === link ? 'active' : ''}`}
            onClick={() => onNavigate(link)}
          >
            {link}
          </button>
        ))}
      </nav>

      <button className="header-signup">
        Sign Up
      </button>
    </header>
  );
}

export default Header;