import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | ShotsByVidz",
  description: "Terms of Service for ShotsByVidz. Read our terms regarding website use, intellectual property, and liability.",
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
