// This is component Image with Lazy load
import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
  MouseEventHandler,
  KeyboardEventHandler,
  useMemo,
} from "react";
import Image from "next/image";

import useImageBroken from "../../hooks/useImageBroken";

export type ImageLazyProps = {
  imgUrl: string;
  width?: number | string;
  height?: number | string;
  radiusBorder?: number;
  className?: string;
  onClick?: MouseEventHandler<HTMLImageElement>;
  onKeyDown?: KeyboardEventHandler<HTMLImageElement>;
  onKeyPress?: () => void;
  style?: CSSProperties;
  alt?: string;
  id?: string;
  crossOrigin?: "anonymous" | "use-credentials" | "";
  loading?: "lazy" | "eager";
};

const ImageLazy = React.memo(function ImageLazy({
  alt,
  radiusBorder,
  onClick,
  style,
  height,
  onKeyPress,
  onKeyDown,
  id,
  crossOrigin,
  loading,
  imgUrl,
  width,
  className,
}: ImageLazyProps) {
  // check if image url work or not , it work  return true, else return false;
  const isUrl = useImageBroken(imgUrl);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imgLoadingRef = useRef<HTMLDivElement>(null);
  function validURL(str: string) {
    var regex =
      /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!regex.test(str)) {
      return false;
    } else {
      return true;
    }
  }
  const getHttps = () => {
    const isvalidUrl = validURL(imgUrl);
    if (isvalidUrl) {
      return imgUrl?.replace("http://", "https://");
    } else {
      return imgUrl;
    }
  };
  const isUrlValid = getHttps();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!shouldLoad && imgLoadingRef?.current) {
      // use IntersectionObserver API for lazy loading of images
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0) {
          setShouldLoad(true);
        }
      });
      observer.observe(imgLoadingRef?.current);
      return () => observer.disconnect();
    }
  }, [shouldLoad, imgLoadingRef]);


  return (
    <>
      {shouldLoad ? (
        <picture>
          <source
            srcSet={isUrl ? isUrlValid : "https://i.imgur.com/YwVJJKk.jpg"}
            type="image/webp"
          />
          <img
            src={isUrl ? isUrlValid : "https://i.imgur.com/YwVJJKk.jpg"}
            alt={alt}
            loading={loading}
            crossOrigin={crossOrigin}
            onClick={onClick}
            style={style}
            height={height}
            width={width}
            id={id}
            onKeyPress={onKeyPress}
            className={className}
          />
        </picture>
      ) : (
        <>
          <div
            id={id}
            className={className}
            style={{
              backgroundImage: "linear-gradient(#91C884, #CCD492,#7CB4E0)",
              borderRadius: "8px",
            }}
            ref={imgLoadingRef}
          >
            <p
              style={{
                paddingTop: "100px",
                color: "white",
                textAlign: "center",
              }}
            >
              Loading ...
            </p>
          </div>
        </>
      )}
    </>
  );
});

export default ImageLazy;
