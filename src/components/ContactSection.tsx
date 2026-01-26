import { Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Contatti
          </span>
          <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Lavoriamo insieme
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Hai un progetto in mente? Sono sempre interessato a nuove opportunità 
            e collaborazioni. Contattami!
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                <a href="mailto:hello@simo.dev" className="text-muted-foreground transition-colors hover:text-primary">
                  hello@simo.dev
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Location</h3>
                <p className="text-muted-foreground">Italia</p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              <p className="text-muted-foreground">
                💡 <strong className="text-foreground">Suggerimento:</strong> Includi più dettagli possibili 
                sul tuo progetto per una risposta più accurata!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block font-medium text-foreground">
                Nome
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Il tuo nome"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-medium text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="la-tua@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-medium text-foreground">
                Messaggio
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Raccontami del tuo progetto..."
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
            >
              <Send className="h-5 w-5" />
              Invia messaggio
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
