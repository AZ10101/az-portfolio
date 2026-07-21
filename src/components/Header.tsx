import { profile } from '../data/profile'
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <h1 className="header__title">{profile.siteTitle}</h1>
      </div>
    </header>
  )
}
