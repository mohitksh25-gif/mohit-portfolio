'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut } from 'lucide-react'
import { cn } from '@/lib/utils'

export type LightboxImage = { src: string; alt: string; caption?: string }

type LightboxProps = {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}

export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const [zoomed, setZoomed] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const hasMultiple = images.length > 1

  const goPrev = useCallback(() => {
    setZoomed(false)
    onIndexChange((index - 1 + images.length) % images.length)
  }, [index, images.length, onIndexChange])

  const goNext = useCallback(() => {
    setZoomed(false)
    onIndexChange((index + 1) % images.length)
  }, [index, images.length, onIndexChange])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft' && hasMultiple) goPrev()
      else if (e.key === 'ArrowRight' && hasMultiple) goNext()
    }
    document.addEventListener('keydown', onKey)
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [onClose, goPrev, goNext, hasMultiple])

  const current = images[index]
  if (!current) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      className="fixed inset-0 z-50 flex flex-col bg-foreground/90 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4 p-4 text-background">
        <p className="min-w-0 flex-1 truncate text-sm font-medium">
          {current.caption ?? current.alt}
          {hasMultiple && (
            <span className="ml-2 text-background/60">
              {index + 1} / {images.length}
            </span>
          )}
        </p>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              setZoomed((z) => !z)
            }}
            aria-label={zoomed ? 'Zoom out' : 'Zoom in'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-background transition-colors hover:bg-background/15"
          >
            {zoomed ? (
              <ZoomOut className="h-5 w-5" />
            ) : (
              <ZoomIn className="h-5 w-5" />
            )}
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
            aria-label="Close"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-background transition-colors hover:bg-background/15"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Image stage */}
      <div
        className={cn(
          'relative flex flex-1 items-center justify-center px-4 pb-6',
          zoomed ? 'overflow-auto' : 'overflow-hidden',
        )}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null || !hasMultiple) return
          const dx = e.changedTouches[0].clientX - touchStartX.current
          if (dx > 50) goPrev()
          else if (dx < -50) goNext()
          touchStartX.current = null
        }}
      >
        {hasMultiple && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goPrev()
            }}
            aria-label="Previous image"
            className="absolute left-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/15 text-background transition-colors hover:bg-background/30 sm:left-4"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        <img
          src={current.src || '/placeholder.svg'}
          alt={current.alt}
          onClick={(e) => {
            e.stopPropagation()
            setZoomed((z) => !z)
          }}
          className={cn(
            'mx-auto rounded-lg shadow-2xl transition-transform duration-200',
            zoomed
              ? 'max-w-none cursor-zoom-out'
              : 'max-h-full max-w-full cursor-zoom-in object-contain',
          )}
          style={zoomed ? { width: 'min(1600px, 180%)' } : undefined}
        />

        {hasMultiple && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              goNext()
            }}
            aria-label="Next image"
            className="absolute right-2 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/15 text-background transition-colors hover:bg-background/30 sm:right-4"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Thumbnail strip */}
      {hasMultiple && (
        <div
          className="flex items-center justify-center gap-2 overflow-x-auto p-4"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => {
                setZoomed(false)
                onIndexChange(i)
              }}
              aria-label={`View image ${i + 1}`}
              aria-current={i === index}
              className={cn(
                'h-14 w-14 shrink-0 overflow-hidden rounded-md border-2 transition-colors',
                i === index
                  ? 'border-background'
                  : 'border-transparent opacity-60 hover:opacity-100',
              )}
            >
              <img
                src={img.src || '/placeholder.svg'}
                alt=""
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
