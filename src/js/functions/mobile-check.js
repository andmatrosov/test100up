import vars from "../_vars";

export const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    vars.htmlEl.classList.add("page--android");
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    vars.htmlEl.classList.add("page--ios");
    return "iOS";
  }

  return "unknown";
};

/**
 * @desc Функция рассчитывает исходное соотношение сторон и возвращает объект с новыми шириной и высотой
 * @params initWidth, initHeight, width — type number
 * @return object { width, height }
 */

const resizeImage = (initWidth, initHeight, width) => {
  if (
    typeof initWidth !== "number" ||
    typeof initHeight !== "number" ||
    typeof width !== "number"
  ) {
    console.warn('Arguments type error. Expected type "number"');
    return;
  }

  const aspectRatio = (initHeight / initWidth).toFixed(3);
  console.log(aspectRatio);

  return { width: width, height: Math.round(width * aspectRatio) };
};

console.log(resizeImage(424, 303, 273));
