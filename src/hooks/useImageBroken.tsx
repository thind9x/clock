/* 
hook để kiểm tra hình ảnh bị lỗi đường dẫn
*/

import { useEffect, useState } from "react";
const useImageBroken = (url: string) => {
  const [isHaveImg, setImg] = useState(true);
  useEffect(() => {
    const s = document.createElement("IMG") as HTMLImageElement;
    s.src = url;
    // eslint-disable-next-line func-names
    s.onerror = function () {
      setImg(false);
    };
    // eslint-disable-next-line func-names
    s.onload = function () {
      setImg(true);
    };
  }, [url]);

  return isHaveImg;
};

export default useImageBroken;
