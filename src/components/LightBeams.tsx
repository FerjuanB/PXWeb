"use client"

import { useEffect, useState } from "react"
import styles from "./LightBeams.module.css"

type LightBeamsProps = {
  phrase?: string
  className?: string
}

export default function LightBeams({ phrase = "PROJECT X INNOVATION", className }: LightBeamsProps) {
  const [showPhrase, setShowPhrase] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowPhrase(true), 2400)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`${styles.root} ${className ?? ''}`.trim()} role="img" aria-label="Project X Innovation light beams animation">
      <div className={styles.stage}>
        <div className={styles.square}>
          {/* Beams + halos, one per corner, opening from center */}
          <div className={`${styles.beam} ${styles.toTopLeft} ${styles.beam1}`}></div>
          <div className={`${styles.halo} ${styles.halo1}`}></div>

          <div className={`${styles.beam} ${styles.toTopRight} ${styles.beam2}`}></div>
          <div className={`${styles.halo} ${styles.halo2}`}></div>

          <div className={`${styles.beam} ${styles.toBottomRight} ${styles.beam3}`}></div>
          <div className={`${styles.halo} ${styles.halo3}`}></div>

          <div className={`${styles.beam} ${styles.toBottomLeft} ${styles.beam4}`}></div>
          <div className={`${styles.halo} ${styles.halo4}`}></div>
        </div>
      </div>
      {/* Phrase under the beams */}
      <div className={`${styles.phrase} ${showPhrase ? styles.phraseVisible : ''} `}>
        {phrase}
      </div>
    </div>
  )
}


