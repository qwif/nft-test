import React from 'react'

export interface ImageProps extends React.ComponentProps<'img'> {
  src: string
  alt: string
  width?: number
  height?: number
  onLoad?(): void
}
