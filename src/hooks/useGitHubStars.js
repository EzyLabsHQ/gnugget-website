import { useEffect, useState } from 'react'

const API_URL = 'https://api.github.com/repos/awesomenull-dev/GoldenNugget'
const POLL_MS = 5 * 60 * 1000

export function useGitHubStars() {
  const [stars, setStars] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function fetchStars() {
      try {
        const res = await fetch(API_URL, {
          headers: { Accept: 'application/vnd.github+json' },
        })
        if (!res.ok) throw new Error(`GitHub API ${res.status}`)
        const data = await res.json()
        if (!cancelled) {
          setStars(data.stargazers_count)
          setLoading(false)
        }
      } catch {
        if (!cancelled) setLoading(false)
      }
    }

    fetchStars()
    const id = setInterval(fetchStars, POLL_MS)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  return { stars, loading }
}

export function formatStars(n) {
  if (n == null) return '—'
  if (n >= 1000) {
    const k = n / 1000
    return `${k.toFixed(k >= 10 ? 0 : 1)}k`
  }
  return String(n)
}