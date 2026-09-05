export default function Picture({ src, alt, eager = false, aspectRatio = '4/3', className = '', imgClassName = '', ...props }) {
  const base = src.replace(/\.(jpe?g|png)$/i, '')
  return (
    <picture className={className}>
      <source srcSet={`${base}.avif`} type="image/avif" />
      <source srcSet={`${base}.webp`} type="image/webp" />
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className={imgClassName}
        style={{ aspectRatio, objectFit: 'cover', width: '100%', height: '100%', display: 'block' }}
        {...props}
      />
    </picture>
  )
}
