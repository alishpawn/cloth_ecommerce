import type { Metadata } from "next";
import CollectionPage from "@/components/Collection";

export const metadata: Metadata = {
  title: "Butta Store | Collection",
  description: "Curating modern, timeless fashion for the bold and the sophisticated.",
};

export default function Page() {
  return <CollectionPage />;
}
