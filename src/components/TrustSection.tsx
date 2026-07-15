import { Shield, Wifi, Users, ServerCog } from "lucide-react";
import Link from "next/link";
import MotionReveal from "./MotionReveal";

const trustItems = [
  {
    icon: Shield,
    title: "30-Day Money-Back — The Premium IPTV UK Standard",
    description:
      "Not satisfied? Support returns every penny within 30 days, same-day. No forms, no retention calls, no fine print — the premium IPTV refund policy the industry should adopt but rarely does.",
  },
  {
    icon: Wifi,
    title: "99.9% Uptime — Premium IPTV On Verified UK Servers",
    description:
      "A live status page tracks premium IPTV server performance minute by minute. If uptime dips below 99.9% in any calendar month, service credits apply automatically — transparent infrastructure separates the serious from the unreliable.",
  },
  {
    icon: Users,
    title: "Five Simultaneous Streams On Every Premium IPTV Plan",
    description:
      "One premium IPTV subscription covers up to five screens at once — parents, kids and grandparents streaming in parallel without anyone fighting for the remote. Every tier carries the same five-screen cap regardless of term length.",
  },
  {
    icon: ServerCog,
    title: "24/7 UK Support — Premium IPTV Backed By A British Team",
    description:
      "Live chat, WhatsApp and email are answered around the clock. Published response times let anyone verify the premium IPTV support claim before subscribing — the service model the industry should adopt.",
  },
];

export default function TrustSection() {
  return (
    <section className="relative py-11 lg:py-16">
      <div className="absolute inset-0 section-gradient-2" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionReveal y={20} className="text-center mb-16">
          <span className="inline-block rounded-full bg-emerald-50 border border-emerald-200 px-4 py-1.5 text-sm font-medium text-emerald-700 mb-4">
            Four Hard Promises
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Premium IPTV UK Promise &mdash; Four{" "}
            <span className="gradient-text">Guarantees Other Providers Skip</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-muted">
            Claims are cheap. Every premium IPTV UK commitment below is published, measured and backed by a full{" "}
            <Link href="/refund" className="text-violet-600 hover:text-violet-700 underline-offset-2 hover:underline">
              same-day refund
            </Link>{" "}that subscribers can verify before paying.
          </p>
        </MotionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <MotionReveal
              key={item.title}
              y={20}
              delay={i * 0.1}
              className="group text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-cyan-50 transition-all group-hover:border-emerald-200 group-hover:bg-emerald-100 group-hover:shadow-lg group-hover:shadow-emerald-100/50">
                <item.icon className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
