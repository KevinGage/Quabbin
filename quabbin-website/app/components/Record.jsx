import Winner from "@/app/components/Winner";

export default function Record({ title, description, winners }) {
  return (
    <section>
      <div className="py-10">
        <div className="flex justify-center">
          <h1>{title}</h1>
        </div>
        <div className="flex justify-center">
          <h4>{description}</h4>
        </div>
        <div className="flex flex-wrap justify-center">
          {winners.map((w, i) => {
            return (
              <Winner
                key={i}
                place={w.place}
                name={w.name}
                year={w.year}
                info={w.info}
              />
            );
          })}
        </div>
      </div>
      <hr />
    </section>
  );
}
