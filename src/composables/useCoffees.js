import coffees from "@/data/coffees.json";
import benefits from "@/data/benefits.json";
import steps from "@/data/steps.json";
import headquarters from "@/data/headquarters.json"

export default function useCoffees() {
  return {
    coffees,
    benefits,
    steps,
    headquarters,
  };
};