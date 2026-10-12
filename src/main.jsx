import { useCallback, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { site } from './content'
import './styles.css'

function useAmbientMusic() {
  const contextRef = useRef(null)
  const timerRef = useRef(null)

  const stop = useCallback(() => {
    window.clearInterval(timerRef.current)
    timerRef.current = null
    contextRef.current?.close()
    contextRef.current = null
  }, [])

  const start = useCallback(() => {
    if (contextRef.current) return
    const Context = window.AudioContext || window.webkitAudioContext
    if (!Context) return
    const ctx = new Context()
    contextRef.current = ctx
    const notes = [261.63, 329.63, 392, 523.25, 392, 329.63]
    let index = 0
    const playNote = () => {
      if (ctx.state === 'suspended') ctx.resume()
      const oscillator = ctx.createOscillator()
      const gain = ctx.createGain()
      oscillator.type = 'sine'
      oscillator.frequency.value = notes[index++ % notes.length]
      gain.gain.setValueAtTime(0.0001, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.035, ctx.currentTime + 0.06)
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.45)
      oscillator.connect(gain).connect(ctx.destination)
      oscillator.start()
      oscillator.stop(ctx.currentTime + 1.5)
    }
    playNote()
    timerRef.current = window.setInterval(playNote, 1150)
  }, [])

  useEffect(() => stop, [stop])
  return { start, stop }
}

function MissingMedia({ type }) {
  return <div className="missing-media">This {type} is waiting to be added.</div>
}

function Heart({ className = '' }) {
  return <span aria-hidden="true" className={`heart ${className}`}>♥</span>
}

function App() {
  const [opened, setOpened] = useState(false)
  const [opening, setOpening] = useState(false)
  const [musicOn, setMusicOn] = useState(false)
  const [selected, setSelected] = useState(null)
  const [finalOpen, setFinalOpen] = useState(false)
  const audio = useAmbientMusic()

  const openSurprise = () => {
    setOpening(true)
    audio.start()
    setMusicOn(true)
    window.setTimeout(() => setOpened(true), 860)
  }

  const toggleMusic = () => {
    if (musicOn) audio.stop()
    else audio.start()
    setMusicOn(value => !value)
  }

  const closeLightbox = useCallback(() => setSelected(null), [])
  const changePhoto = useCallback((amount) => {
    setSelected(index => (index + amount + site.memories.length) % site.memories.length)
  }, [])

  useEffect(() => {
    const onKey = event => {
      if (selected === null) return
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowLeft') changePhoto(-1)
      if (event.key === 'ArrowRight') changePhoto(1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, closeLightbox, changePhoto])

  return (
    <main style={{ '--rose': site.colors.rose, '--blush': site.colors.blush, '--ink': site.colors.ink }}>
      <div className={`opening ${opened ? 'opening--gone' : ''}`} aria-hidden={opened}>
        <div className="opening__wash" />
        <Heart className="float float--one" /><Heart className="float float--two" /><Heart className="float float--three" />
        <section className="opening__content">
          <p className="eyebrow">A small surprise, made with love</p>
          <div className={`envelope ${opening ? 'envelope--open' : ''}`}>
            <div className="envelope__letter"><Heart /> <span>for you</span></div>
            <div className="envelope__flap" />
            <div className="envelope__front" />
          </div>
          <h1>{site.opening.greeting}</h1>
          <p className="opening__message">{site.opening.message}</p>
          <button className="button button--primary" onClick={openSurprise}>Open Your Surprise <span aria-hidden="true">💌</span></button>
        </section>
      </div>

      {opened && <>
        <button className="music-button" onClick={toggleMusic} aria-pressed={musicOn} aria-label={musicOn ? 'Turn ambient music off' : 'Turn ambient music on'}>
          <span>{musicOn ? '♫' : '♩'}</span> {musicOn ? 'Music on' : 'Music off'}
        </button>

        <section className="hero section" id="top">
          <div className="hero__copy reveal">
            <p className="eyebrow">{site.anniversary}</p>
            <h1>{site.hero.title}</h1>
            <p>{site.hero.subtitle}</p>
            <a className="text-link" href="#memories">Start remembering <span>↓</span></a>
          </div>
          <div className="hero__photo reveal reveal--late">
            <div className="photo-frame photo-frame--hero">
              <img src={site.hero.image} alt="A favourite memory of us" onError={e => e.currentTarget.replaceWith(Object.assign(document.createElement('div'), { className: 'missing-media', textContent: 'Choose a featured photo in content.js' }))} />
            </div>
            <span className="hero__note">made for {site.herName} <Heart /></span>
          </div>
        </section>

        <section className="section section--memories" id="memories">
          <div className="section-heading reveal">
            <p className="eyebrow">Pages from our story</p>
            <h2>Little moments,<br /><em>kept forever.</em></h2>
            <p>Every frame below holds a feeling I never want to lose.</p>
          </div>
          <div className="memory-grid">
            {site.memories.map((memory, index) => <MemoryCard key={memory.src} memory={memory} index={index} onSelect={() => setSelected(index)} />)}
          </div>
        </section>

        <section className="section section--videos" id="videos">
          <div className="section-heading reveal">
            <p className="eyebrow">Press play on us</p>
            <h2>Moments I Want to<br /><em>Keep Forever</em> <span aria-hidden="true">🎬</span></h2>
          </div>
          <div className="video-grid">
            {site.videos.map((video, index) => <VideoCard key={video.src} video={video} index={index} />)}
          </div>
        </section>

        <section className="section section--timeline" id="timeline">
          <div className="section-heading reveal">
            <p className="eyebrow">How we got here</p>
            <h2>Our Story, One<br /><em>Memory at a Time</em></h2>
          </div>
          <ol className="timeline">
            {site.timeline.map((item, index) => <li className="timeline__item reveal" key={item.title}>
              <div className="timeline__dot"><Heart /></div>
              <p className="timeline__date">{item.date}</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>)}
          </ol>
        </section>

        <section className="letter-wrap" id="letter">
          <div className="letter section reveal">
            <p className="eyebrow">From my heart, to yours</p>
            <h2>A Letter From<br /><em>My Heart</em> <span aria-hidden="true">💌</span></h2>
            <div className="letter__body">{site.letter.split('\n\n').map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
            <p className="letter__sign">Always yours,<br />{site.yourName} <Heart /></p>
          </div>
        </section>

        <section className={`finale ${finalOpen ? 'finale--open' : ''}`} id="finale">
          <div className="finale__glow" />
          <Heart className="finale__heart" />
          <p className="eyebrow">For all the days ahead</p>
          <h2>One last thing,<br /><em>my love...</em></h2>
          {!finalOpen ? <button className="button button--light" onClick={() => setFinalOpen(true)}>Click Me, Baby <Heart /></button> : <div className="finale__message"><p>{site.finalMessage}</p><span>∞</span></div>}
        </section>
        <footer>Made with all my love, for {site.herName} <Heart /></footer>
      </>}

      {selected !== null && <Lightbox index={selected} onClose={closeLightbox} onChange={changePhoto} />}
    </main>
  )
}

function MemoryCard({ memory, index, onSelect }) {
  const [missing, setMissing] = useState(false)
  return <button className={`memory-card memory-card--${(index % 5) + 1} reveal`} onClick={onSelect} aria-label={`Open photo: ${memory.caption}`}>
    <div className="memory-card__image">
      {missing ? <MissingMedia type="photo" /> : <img src={memory.src} alt={memory.caption} loading="lazy" onError={() => setMissing(true)} />}
    </div>
    <span className="memory-card__caption">{memory.caption}</span>
    <span className="memory-card__date">{memory.date}</span>
  </button>
}

function VideoCard({ video, index }) {
  const [missing, setMissing] = useState(false)
  const mimeType = video.src.toLowerCase().endsWith('.mov') ? 'video/quicktime' : 'video/mp4'
  return <article className="video-card reveal">
    <div className="video-card__media">
      {missing ? <MissingMedia type="video" /> : <video controls preload="metadata" playsInline onLoadedMetadata={event => { event.currentTarget.currentTime = 0.01 }} onError={() => setMissing(true)} aria-label={`Memory video ${index + 1}`}><source src={video.src} type={mimeType} />Your browser does not support this video.</video>}
    </div>
    <p><span>{String(index + 1).padStart(2, '0')}</span>{video.caption}</p>
  </article>
}

function Lightbox({ index, onClose, onChange }) {
  const memory = site.memories[index]
  return <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
    <button className="lightbox__close" onClick={onClose} aria-label="Close photo viewer">×</button>
    <button className="lightbox__arrow lightbox__arrow--left" onClick={event => { event.stopPropagation(); onChange(-1) }} aria-label="Previous photo">←</button>
    <figure onClick={event => event.stopPropagation()}>
      <img src={memory.src} alt={memory.caption} />
      <figcaption><span>{memory.date}</span>{memory.caption}</figcaption>
    </figure>
    <button className="lightbox__arrow lightbox__arrow--right" onClick={event => { event.stopPropagation(); onChange(1) }} aria-label="Next photo">→</button>
  </div>
}

createRoot(document.getElementById('root')).render(<App />)
