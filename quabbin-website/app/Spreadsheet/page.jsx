import { getSortedFish } from "@/app/lib/data";
import DataTable from "@/app/Spreadsheet/DataTable";

export default async function Page() {
  const sortedFish = getSortedFish();

  return (
    <section>
      <DataTable data={sortedFish} />
    </section>
  );
}
