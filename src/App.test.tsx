import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the Catbird Games logo', () => {
    render(<App />)
    expect(screen.getByAltText('Catbird Games')).toBeInTheDocument()
  })

  it('renders the studio hero heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the Real Fake Birds feature section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /real fake birds/i })).toBeInTheDocument()
  })

  it('renders Play Real Fake Birds CTAs linking to the live site', () => {
    render(<App />)
    const playLinks = screen.getAllByRole('link', { name: /play/i })
    expect(playLinks.length).toBeGreaterThan(0)
    playLinks.forEach(link => {
      expect(link).toHaveAttribute('href', 'https://www.realfakebirds.app')
    })
  })

  it('renders a contact email link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /contact/i })).toHaveAttribute(
      'href',
      'mailto:campbell.ryan.r@gmail.com'
    )
  })
})

