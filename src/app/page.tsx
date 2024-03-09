import CardBalance from "@/components/pages/home/card-balance";

export default function Home() {
  return (
    <div className="flex flex-row gap-3">
      <CardBalance />
      <CardBalance />
    </div>
  );
}
