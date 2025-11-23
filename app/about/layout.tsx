import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Shaun",
  description: "Meet Shaun, a CAA-certified drone pilot and photographer specializing in capturing the magic of weddings and events.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
