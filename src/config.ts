/**
 * Dados de contato da Sonzai.
 * >>> TROQUE AQUI antes de publicar <<<
 */
export const WHATSAPP_NUMBER = "5511991413075"; // somente dígitos, com DDI + DDD
export const CONTACT_EMAIL = "contato@sonzai.com.br";
export const INSTAGRAM_URL = "https://instagram.com/sonzai";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
