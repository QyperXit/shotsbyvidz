import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ShotsByVidz",
  description: "Privacy Policy for ShotsByVidz. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
