import ItemCardButtons from "./ItemCardButtons";

export default function SeasonalSection() {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <ItemCardButtons />
      <ItemCardButtons />
      <ItemCardButtons />
      <ItemCardButtons />
      <ItemCardButtons />
      <ItemCardButtons />
    </div>
  );
}
