function Winner({ place, name, year, info }) {
  let className;
  if (place === 1) {
    className = "bg-yellow-300";
  } else if (place === 2) {
    className = "bg-gray-300";
  } else if (place === 3) {
    className = "bg-orange-300";
  }

  className = `${className} mx-2 my-2 p-2 rounded-lg text-center text-black`;

  return (
    <div className={className}>
      {name}
      <br />
      {year}
      <br />
      {info.map((info, i) => {
        return <div key={i}>{info}</div>;
      })}
    </div>
  );
}

export default Winner;
