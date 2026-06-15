import { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  usePageMeta({
    title: "Contact | K. Chen Construction Management",
    description: "Get in touch with K. Chen Construction Management for your next residential or commercial project in Greater Vancouver.",
  });

  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const ref = useScrollReveal<HTMLElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent", description: "Thank you! We'll be in touch shortly." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <>
      {/* Light hero - no dark overlay */}
      <section className="section-padding pt-16 pb-8 bg-background">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground">Contact Us</h1>
        <p className="mt-2 text-muted-foreground">We'd love to hear about your project.</p>
      </section>

      <section ref={ref} className="section-padding pb-20 bg-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 reveal-up">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>
            <button
              type="submit"
              className="rounded bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Send Message
            </button>
          </form>

          {/* Info */}
          <div className="reveal-up space-y-8" style={{ transitionDelay: "150ms" }}>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Whether you're planning a new custom home, a commercial development, or a renovation,
                we'd love to discuss how K. Chen Construction Management can help bring your vision to life.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Office</p>
                  <p>Vancouver, British Columbia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Email</p>
                  <a href="mailto:kchen@kchencm.com" className="hover:text-primary transition-colors">kchen@kchencm.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Phone</p>
                  <a href="tel:+16046182449" className="hover:text-primary transition-colors">(604) 618-2449</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
