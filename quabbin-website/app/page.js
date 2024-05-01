import { getSortedFish } from "@/app/lib/data";
import Record from "@/app/components/Record";

export default function Home() {
  const sortedFish = getSortedFish();

  const getWeightRecords = (species) => {
    const filteredFish = sortedFish.filter((f) => {
      if (species) {
        return f.SpeciesCode.toLowerCase() === species;
      } else {
        return f;
      }
    });

    const biggest = filteredFish[0];

    const first = filteredFish
      .filter((ff) => {
        return ff.Weight === biggest.Weight;
      })
      .map((w) => {
        return {
          place: 1,
          name: w.Name,
          year: w.Year,
          info: [`Weight: ${w.Weight}`],
        };
      });

    const secondBiggest = filteredFish[first.length];

    const second = filteredFish
      .filter((ff) => {
        return ff.Weight === secondBiggest.Weight;
      })
      .map((w) => {
        return {
          place: 2,
          name: w.Name,
          year: w.Year,
          info: [`Weight: ${w.Weight}`],
        };
      });

    const thirdBiggest = filteredFish[first.length + second.length];

    const third = filteredFish
      .filter((ff) => {
        return ff.Weight === thirdBiggest.Weight;
      })
      .map((w) => {
        return {
          place: 3,
          name: w.Name,
          year: w.Year,
          info: [`Weight: ${w.Weight}`],
        };
      });

    return [...first, ...second, ...third];
  };

  const getLargestFish = () => {
    return {
      title: "Largest Fish",
      description: "Largest Fish Of Any Species By Weight",
      winners: getWeightRecords(),
    };
  };

  const getLargestLaker = () => {
    return {
      title: "Largest Laker",
      description: "Largest Lake Trout By Weight",
      winners: getWeightRecords("l"),
    };
  };

  const getLargestSalmon = () => {
    return {
      title: "Largest Salmon",
      description: "Largest Salmon By Weight",
      winners: getWeightRecords("s"),
    };
  };

  const getLargestSmallmouth = () => {
    return {
      title: "Largest Smallmouth",
      description: "Largest Smallmouth Bass By Weight",
      winners: getWeightRecords("sm"),
    };
  };

  const getLargestRainbow = () => {
    return {
      title: "Largest Rainbow",
      description: "Largest Rainbow Trout By Weight",
      winners: getWeightRecords("r"),
    };
  };

  const records = [];
  records.push(getLargestFish());
  records.push(getLargestLaker());
  records.push(getLargestSalmon());
  records.push(getLargestSmallmouth());
  records.push(getLargestRainbow());

  return (
    <main>
      {records.map((r, i) => (
        <Record
          key={i}
          title={r.title}
          description={r.description}
          winners={r.winners}
        />
      ))}
    </main>
  );
}
