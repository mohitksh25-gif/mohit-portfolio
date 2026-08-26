'use client'

import { useState } from 'react'
import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

type AssetImageProps = {
  src?: string
  alt: string
  className?: string
  imgClassName?: string
  /** Text shown on the placeholder telling the user which file to add. */
  placeholderLabel?: string
  objectFit?: 'cover' | 'contain'
}

/**
 * Renders an image if `src` is provided and loads successfully.
 * Otherwise it shows a clean, labelled placeholder so real photos/scans
 * can be dropped in later without any layout breakage.
 */
export function AssetImage({
  src,
  alt,
  className,
  imgClassName,
  placeholderLabel,
  objectFit = 'cover',
}: AssetImageProps) {
  const [failed, setFailed] = useState(false)
  const showImage = src && !failed

  return (
    <div className={cn('relative overflow-hidden bg-muted', className)}>
      {showImage ? (
        <img
          src={src || '/placeholder.svg'}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={cn(
            'h-full w-full',
            objectFit === 'cover' ? 'object-cover' : 'object-contain',
            imgClassName,
          )}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
          <ImageIcon className="h-8 w-8 text-muted-foreground/60" aria-hidden="true" />
          <span className="text-xs font-medium text-muted-foreground">
            {placeholderLabel ?? 'Image coming soon'}
          </span>
        </div>
      )}
    </div>
  )
}
