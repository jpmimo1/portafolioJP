export const generateUrl = (text: string): string => {
  const url = text.toLowerCase().replaceAll(' ', '-');
  return url;
}
