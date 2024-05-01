import data from "@/app/lib/data.json";
import { stringToOunces } from "@/app/lib/conversions";

export function getSortedFish() {
  return data.fishermen
    .flatMap((fm) => {
      return fm.Fish.map((f, i) => {
        const speciesName = data.species.find((s) => s.code === f.Species).name;
        return {
          ...f,
          Id: fm.Name + i,
          Name: fm.Name,
          SpeciesCode: f.Species,
          Species: speciesName,
          Oz: stringToOunces(f.Weight),
        };
      });
    })
    .sort((a, b) => {
      return b.Oz - a.Oz;
    });
}
