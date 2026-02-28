export const brandName = "Power Up";
export const trainerName = "Oktaj Shabani";
export const city = "Prizren";
export const gymName = "Lets Go Gym";
export const address = "Lets Go Gym, Abi Qarshia, Prizren";
export const whatsappDisplay = "+383 45 802 788";
export const whatsappDigits = "38345802788";
export const instagramUrl = "https://www.instagram.com/oktajshabani";
// Abi Qarshia, Prizren – Lets Go Gym location
export const mapEmbedUrl =
  "https://www.google.com/maps?q=Abi+Qarshia,+Prizren,+Kosovo&output=embed";

export const whatsappBaseUrl = `https://wa.me/${whatsappDigits}`;

export function getWhatsAppUrl(message?: string): string {
  if (message) {
    return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  }
  return whatsappBaseUrl;
}
