import { profile } from '../data/profile'
import './Profile.css'

export function Profile() {
  return (
    <section className="profile" aria-labelledby="profile-heading">
      <div className="profile__inner">
        <h2 id="profile-heading" className="profile__heading">
          プロフィール
        </h2>
        <article className="profile-card">
          <p className="profile-card__name">
            <span className="profile-card__name-label">Name：</span>
            {profile.name}
          </p>
          <div className="profile-card__bio">
            {profile.bio.map((line) => (
              <p key={line} className="profile-card__bio-line">
                {line}
              </p>
            ))}
          </div>
          {profile.links.length > 0 && (
            <ul className="profile-card__links">
              {profile.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    className="profile-card__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </article>
      </div>
    </section>
  )
}
