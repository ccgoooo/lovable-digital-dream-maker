import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Placeholder } from "@/components/Placeholder";
import { seo } from "@/lib/site";
export const Route = createFileRoute("/products")({
  head: () => seo("Products", "Placeholder product collection from Qinghe Atelier.", "/products"),
  component: Products,
});
const items = ["Product One", "Product Two", "Product Three", "Product Four", "Product Five", "Product Six"];
function Products() {
  return (
    <SiteLayout>
      <h1 className="font-display text-4xl">Products</h1>
      <p className="mt-3 text-muted-foreground">Display only — nothing here is for sale.</p>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {items.map((name) => (
          <article key={name}>
            <Placeholder label={name} className="aspect-square" />
            <h2 className="mt-3 font-display text-xl">{name}</h2>
            <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet.</p>
          </article>
        ))}
      </div>
    </SiteLayout>
  );
}
