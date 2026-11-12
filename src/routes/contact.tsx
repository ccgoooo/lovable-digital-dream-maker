import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { SiteLayout } from "@/components/SiteLayout";
import { seo } from "@/lib/site";
export const Route = createFileRoute("/contact")({
  head: () => seo("Contact", "Send a placeholder message to the fictional Qinghe Atelier.", "/contact"),
  component: Contact,
});
const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});
const field = "mt-1 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring";
function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) return setError(r.error.issues[0].message);
    // Demo only: input is validated and discarded. Nothing is stored or sent.
    setError(null);
    setSent(true);
  }
  return (
    <SiteLayout>
      <div className="mx-auto max-w-lg">
        <h1 className="font-display text-4xl">Contact</h1>
        <p className="mt-3 text-sm text-muted-foreground">Demo form — please use fake details. Nothing you enter is saved or sent.</p>
        {sent ? (
          <div role="status" className="mt-8 rounded-sm border border-border bg-secondary p-6">
            <h2 className="font-display text-2xl">Thank you!</h2>
            <p className="mt-2 text-sm text-muted-foreground">Your message was received (demo only).</p>
            <button onClick={() => setSent(false)} className="mt-4 text-sm text-primary underline">Send another</button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5">
            <label className="block text-sm">Name<input name="name" maxLength={100} className={field} /></label>
            <label className="block text-sm">Email<input name="email" type="email" maxLength={255} className={field} /></label>
            <label className="block text-sm">Message<textarea name="message" rows={5} maxLength={1000} className={field} /></label>
            {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
            <button type="submit" className="rounded-sm bg-primary px-5 py-3 text-sm text-primary-foreground hover:bg-primary/90">Send message</button>
          </form>
        )}
      </div>
    </SiteLayout>
  );
}
