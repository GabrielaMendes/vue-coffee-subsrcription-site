import { useTitle } from "@vueuse/core";

export default function useAppTitle(title) {
  useTitle(title, { titleTemplate: "%s | Coffeeroasters" });
}
