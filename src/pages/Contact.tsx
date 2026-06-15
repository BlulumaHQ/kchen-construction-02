import { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useT } from "@/i18n";

export default function Contact() {
  const t = useT();
  usePageMeta({ title: t("contact.metaTitle"), description: t("contact.metaDesc") });

  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const ref = useScrollReveal<HTMLElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t("contact.sent"), description: t("contact.sentDesc") });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const fieldCls = "w-full rounded border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/30";
  const labelCls = "block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1";

  return (
    <>
      <section className="section-padding pt-16 pb-8 bg-background">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground">{t("contact.pageTitle")}</h1>
        <p className="mt-2 text-muted-foreground">{t("contact.sub")}</p>
      </section>

      <section ref={ref} className="section-padding pb-20 bg-background">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-5 reveal-up">
            <div>
              <label className={labelCls}>{t("contact.name")}</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={fieldCls} />
            </div>
            <div>
              <label className={labelCls}>{t("contact.email")}</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={fieldCls} />
            </div>
            <div>
              <label className={labelCls}>{t("contact.phone")}</label>
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={fieldCls} />
            </div>
            <div>
              <label className={labelCls}>{t("contact.message")}</label>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${fieldCls} resize-none`} />
            </div>
            <button type="submit" className="rounded bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              {t("contact.send")}
            </button>
          </form>

          <div className="reveal-up space-y-8" style={{ transitionDelay: "150ms" }}>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t("contact.infoTitle")}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t("contact.infoBody")}</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">{t("contact.officeLabel")}</p>
                  <p>{t("contact.officeAddr")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">{t("contact.emailLabel")}</p>
                  <a href="mailto:kchen@kchencm.com" className="hover:text-primary transition-colors">kchen@kchencm.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">{t("contact.phoneLabel")}</p>
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
