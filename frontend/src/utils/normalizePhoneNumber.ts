export const normalize = (value: string, previousValue: string) => {
  if (!value) return value;
  const currentValue = value.replace(/[^\d]/g, "");
  const cvLength = currentValue.length;

  if (!previousValue || value.length > previousValue.length) {
    if (cvLength < 4) return currentValue;
    if (cvLength < 6)
      return `${currentValue.slice(0, 3)} ${currentValue.slice(3)}`;
    return `${currentValue.slice(0, 3)} ${currentValue.slice(
      3,
      5
    )} ${currentValue.slice(5, 8)}`;
  }
  return value;
};
