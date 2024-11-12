import Link from "next/link";
import RingList from "@/components/RingList";

export default function Home() {
  return (
    <div className="min-h-screen  p-6">
    <h1 className="text-3xl font-bold text-center mb-8">Os Anéis de Poder</h1>
    <Link href="/rings/create" className="border block text-center text-blue-500 underline mb-6">
      Criar Novo Anel
    </Link>
    <RingList />
  </div>
  );
}
