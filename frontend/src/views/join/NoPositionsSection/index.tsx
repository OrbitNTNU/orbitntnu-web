import React from "react";

interface NoPositionsSectionProps {
  noPositionsText: string;
}

export const NoPositionsSection = ({
  noPositionsText,
}: NoPositionsSectionProps) => (
  <h2 className="text-2xl mt-16 text-center">{noPositionsText}</h2>
);
