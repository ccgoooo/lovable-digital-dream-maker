import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Placeholder } from "@/components/Placeholder";
import { seo } from "@/lib/site";
export const Route = createFileRoute("/about")({
  head: () => seo("About", "The story behind Qinghe Atelier, a fictional small studio.", "/about"),
  component: About,
});
function About() {
  return (
    <SiteLayout>
      <h1 className="font-display text-4xl">About the atelier</h1>
      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <Placeholder label="Studio image" className="aspect-square" />
        <div className="space-y-4 text-muted-foreground">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <p>Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.</p>
        </div>
      </div>
    </SiteLayout>
  );
}
