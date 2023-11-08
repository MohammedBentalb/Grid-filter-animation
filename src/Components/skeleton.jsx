function Skeleton() {
  const num = 18;
  const skulls = Array.from({ length: num });
  return (
    <section className="container">
      {skulls.map((_, index) => (
        <div key={index}>
            <div className="skeleton" />
            <h1 className="skeleton-text"></h1>
        </div>
      ))}
    </section>
  );
}

export default Skeleton;
