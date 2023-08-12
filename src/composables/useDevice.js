import { computed } from "vue";
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

export default function useDevice() {
  const breakpoints = useBreakpoints(breakpointsTailwind);

  const smAndLarger = breakpoints.greaterOrEqual("sm");
  const lgAndLarger = breakpoints.greaterOrEqual("lg");

  const device = computed(() => {
    if (lgAndLarger.value) {
      return "desktop";
    }

    if (smAndLarger.value) {
      return "tablet";
    }

    return "mobile";
  });

  return { device };
};
