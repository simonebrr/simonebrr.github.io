import { Github, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const res = await fetch('https://formspree.io/f/meegkzly', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
      e.currentTarget.reset();
    }
  };

  return (
    <main className="py-12">
      {/* Hero */}
      <section className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Let's talk about your <span className="text-gradient">project</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Have an idea you want to bring to life? I'm here to help. Fill out the
            form or contact me directly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">
                Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                    <a
                      href="mailto:sbrunelli01@gmail.com"
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      sbrunelli01@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">
                      Location
                    </h3>
                    <p className="text-muted-foreground">Italy</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-foreground">Social</h2>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Purp7ePi3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Tip / Success Box */}
            <div className="rounded-2xl border border-border bg-muted/30 p-6">
              {submitted ? (
                <p className="font-semibold text-green-600">
                  Message sent successfully.
                </p>
              ) : (
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Tip:</strong> Include as
                  many details as possible.
                </p>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 lg:col-span-3">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-medium text-foreground"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-medium text-foreground"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block font-medium text-foreground"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="What would you like to discuss?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block font-medium text-foreground"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Tell me about your project, your goals and your needs..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
              {loading ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
