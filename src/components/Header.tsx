import { profile } from '../data/profile'
import './Header.css'

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <p className="header__name">{profile.name}</p>
        <h1 className="header__catchphrase">
          {profile.catchphrase.split('\n').map((line, index, lines) => (
            <span key={index}>
              {line}
              {index < lines.length - 1 && (
                <br className="header__catchphrase-break" />
              )}
            </span>
          ))}
        </h1>
      </div>
    </header>
  )
}
