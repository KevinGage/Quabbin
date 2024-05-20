import { getSortedFish } from "@/app/lib/data";
import AverageWeightPerYear from "@/app/Stats/AverageWeightPerYear";
import FishCountPerYear from "@/app/Stats/FishCountPerYear";
import TotalFishCounts from "@/app/Stats/TotalFishCounts";

export default async function Page() {
  const sortedFish = getSortedFish();

  // Just use Oz to make things easier for now
  const averageFishWeightPerYear = [...sortedFish]
    .sort((a, b) => {
      return a.Year - b.Year;
    })
    .reduce((a, c) => {
      if (c.Species === "") {
        return a;
      }
      const speciesIndex = a.findIndex((e) => e.id === c.Species);
      if (speciesIndex > -1) {
        const yearIndex = a[speciesIndex].data.findIndex((e) => e.x === c.Year);
        if (yearIndex > -1) {
          a[speciesIndex].data[yearIndex].totalOz += c.Oz;
          a[speciesIndex].data[yearIndex].Count += 1;
          a[speciesIndex].data[yearIndex].y =
            a[speciesIndex].data[yearIndex].totalOz /
            a[speciesIndex].data[yearIndex].Count;
        } else {
          const y = c.Oz;
          a[speciesIndex].data.push({
            x: c.Year,
            totalOz: c.Oz,
            Count: 1,
            y: y,
          });
        }
      } else {
        const y = c.Oz;
        a.push({
          id: c.Species,
          data: [
            {
              x: c.Year,
              totalOz: c.Oz,
              Count: 1,
              y: y,
            },
          ],
        });
      }
      return a;
    }, []);

  const fishCountPerYear = averageFishWeightPerYear.map((x) => {
    return {
      id: x.id,
      data: x.data.map((y) => {
        return {
          x: y.x,
          y: y.Count,
        };
      }),
    };
  });

  const totalFishCounts = fishCountPerYear.map((x) => {
    return {
      id: x.id,
      label: x.id,
      value: x.data.reduce((a, c) => {
        return (a += parseInt(c.y));
      }, 0),
    };
  });

  return (
    <section>
      <div className="bg-gray-50 h-96 text-black m-6">
        <AverageWeightPerYear data={averageFishWeightPerYear} />
      </div>
      <hr />
      <div className="bg-gray-50 h-96 text-black m-6">
        <FishCountPerYear data={fishCountPerYear} />
      </div>
      <hr />
      <div className="bg-gray-50 h-dvh text-black m-6 flex flex-col">
        <TotalFishCounts data={totalFishCounts} />
        <p className="bg-gray-50 text-center">
          Total Number Of Fish By Species
        </p>
      </div>
    </section>
  );
}
