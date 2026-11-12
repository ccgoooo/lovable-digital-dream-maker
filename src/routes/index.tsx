import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Placeholder } from "@/components/Placeholder";
import { seo } from "@/lib/site";
export const Route = createFileRoute("/")({
  head: () => seo("Home", "Qinghe Atelier — a fictional small studio of quiet, handmade goods.", "/"),
  component: Home,
});
function Home() {
  return (
    <SiteLayout>
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Est. placeholder year</p>
          <h1 className="mt-4 font-display text-5xl leading-tight text-foreground">Quiet objects, made slowly.</h1>
          <p className="mt-5 text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
          <Link to="/products" className="mt-8 inline-block rounded-sm bg-primary px-5 py-3 text-sm text-primary-foreground hover:bg-primary/90">View products</Link>
        </div>
        <Placeholder label="Hero image" className="aspect-[4/5]" />
      </section>
    </SiteLayout>
  );
}
