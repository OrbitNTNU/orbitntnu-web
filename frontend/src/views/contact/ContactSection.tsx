import React from "react";

interface ContactSectionProps {
  contentSectionTitle: string;
  contentSectionTitle2: string;
  contentSectionEmail: string;
}

export const ContactSection = ({
  contentSectionTitle,
  contentSectionTitle2,
  contentSectionEmail,
}) => (
  <section className="pt-24 pb-8 text-center">
    <h1 className="text-3xl md:text-4xl mb-2 mx-2">{contentSectionTitle}</h1>
    <h2 className="text-xl mb-4 mx-2">{contentSectionTitle2}</h2>
    <p className="text-xl text-blue-400">
      <a href={`mailto:${contentSectionEmail}`}>{contentSectionEmail}</a>
    </p>
  </section>
);
