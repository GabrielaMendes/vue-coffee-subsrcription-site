const initial = {
  opacity: 0,
  y: 100,
};

const visibleOnce = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 400,
    type: "keyframes",
    ease: "linear",
  },
};

export default function useSlideUp() {
  return { initial, visibleOnce };
}