import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to book your wedding videography, event coverage, or commercial project.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
