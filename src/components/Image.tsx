
export type ImageProps = {
  key?: string | number;
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: 'eager' | 'lazy' | undefined;
  title?: string;
};

export function Image({ key, className, src, alt, width, height, loading, title }: ImageProps) {

  const fullSource : string = `${import.meta.env.BASE_URL}${src}`;

  return (
    <img
      key={key}
      className={className}
      src={fullSource}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      title={title}
    />
  );
}
