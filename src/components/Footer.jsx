const GITHUB_URL = 'https://github.com/awesomenull-dev/GoldenNugget'
const DISCORD_URL = 'https://discord.gg/RwbtH7pW5e'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={DISCORD_URL} target="_blank" rel="noreferrer">
            Discord
          </a>
          <a
            href="https://github.com/awesomenull-dev/GoldenNugget/blob/main/LICENSE"
            target="_blank"
            rel="noreferrer"
          >
            License
          </a>
        </div>
        <div className="footer-copy">
          Website created by the{' '}
          <a
            href="https://github.com/EzyLabsHQ"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--accent)' }}
          >
            EzyLabsHQ
          </a>{' '}
          team. GoldenNugget is not affiliated with Apple. Use at your own risk.
        </div>
      </div>
    </footer>
  )
}