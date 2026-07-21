import { profile } from '../data/profile'
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__title">
          <img
            src={profile.siteLogo}
            alt={profile.siteTitle}
            className="header__logo"
            width={480}
            height={160}
          />
        </h1>
      </div>
    </header>
  )
}
