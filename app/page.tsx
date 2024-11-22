export default function Home() {
  return (
    <div className="bg-main shadow">
      {Array.from({ length: 50 }, (_, i) => (
        <div key={i}>test</div>
      ))}
    </div>
  );
}
