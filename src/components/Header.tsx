import { profile } from '../data/profile'
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <p className="header__name">{profile.name}</p>
        <h1 className="header__catchphrase">{profile.catchphrase}</h1>
      </div>
    </header>
  )
}
