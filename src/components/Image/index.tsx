import React from 'react'
import cn from 'classnames'

import { useOnScreen } from 'lib/helpers/hooks'
import { ImageProps } from './Image.props'

import styles from './Image.module.scss'

const Image: React.FC<ImageProps> = ({ src, alt, width, height, onLoad = () => {}, className }) => {
  const [isLoaded, setIsLoaded] = React.useState(false)

  const imageWrapperRef = React.useRef<HTMLDivElement | null>(null)
  const imageRef = React.useRef<HTMLImageElement | null>(null)

  const isVisible = useOnScreen(imageWrapperRef)

  React.useEffect(() => {
    if (isLoaded) {
      return
    }

    if (imageRef.current)
      imageRef.current.onload = () => {
        onLoad()
        setIsLoaded(true)
      }
  }, [isLoaded, isVisible, onLoad])

  return (
    <>
      <div className={cn(styles.root, { [styles.loaded]: isLoaded })} ref={imageWrapperRef}>
        {(isVisible || isLoaded) && (
          <img
            className={styles.image}
            ref={imageRef}
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
        )}
      </div>
    </>
  )
}

export default Image
