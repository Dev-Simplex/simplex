export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface CookieConsentState {
  hasConsented: boolean;
  preferences: CookiePreferences;
  timestamp: number;
}

export const DEFAULT_COOKIE_PREFERENCES: CookiePreferences = {
  essential: true, // Sempre true, não pode ser desativado
  analytics: false,
  marketing: false,
};

export const COOKIE_CONSENT_KEY = 'simplex-cookie-consent';

// Categorias de cookies com descrições
export const COOKIE_CATEGORIES = {
  essential: {
    name: 'Cookies Essenciais',
    description: 'Necessários para o funcionamento básico do site, incluindo navegação, segurança e preferências de tema.',
    required: true,
    examples: ['Sessão do usuário', 'Preferências de tema', 'Configurações de idioma']
  },
  analytics: {
    name: 'Cookies de Analytics',
    description: 'Nos ajudam a entender como os visitantes interagem com o site, coletando informações de forma anônima.',
    required: false,
    examples: ['Google Analytics', 'Métricas de performance', 'Estatísticas de uso']
  },
  marketing: {
    name: 'Cookies de Marketing',
    description: 'Utilizados para personalizar anúncios e melhorar sua experiência com nosso atendimento.',
    required: false,
    examples: ['Chatwoot', 'Pixels de rastreamento', 'Redes sociais']
  }
};

/**
 * Salva as preferências de cookies no localStorage
 */
export function saveCookiePreferences(preferences: CookiePreferences): void {
  const consentState: CookieConsentState = {
    hasConsented: true,
    preferences,
    timestamp: Date.now(),
  };
  
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentState));
  } catch (error) {
    console.warn('Erro ao salvar preferências de cookies:', error);
  }
}

/**
 * Carrega as preferências de cookies do localStorage
 */
export function loadCookiePreferences(): CookieConsentState | null {
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;
    
    const parsed = JSON.parse(stored) as CookieConsentState;
    
    // Validar se a estrutura está correta
    if (
      typeof parsed.hasConsented === 'boolean' &&
      typeof parsed.preferences === 'object' &&
      typeof parsed.preferences.essential === 'boolean' &&
      typeof parsed.preferences.analytics === 'boolean' &&
      typeof parsed.preferences.marketing === 'boolean' &&
      typeof parsed.timestamp === 'number'
    ) {
      return parsed;
    }
    
    return null;
  } catch (error) {
    console.warn('Erro ao carregar preferências de cookies:', error);
    return null;
  }
}

/**
 * Remove as preferências de cookies (para logout ou reset)
 */
export function clearCookiePreferences(): void {
  try {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
  } catch (error) {
    console.warn('Erro ao limpar preferências de cookies:', error);
  }
}

/**
 * Verifica se o usuário já deu consentimento
 */
export function hasUserConsented(): boolean {
  const consentState = loadCookiePreferences();
  return consentState?.hasConsented ?? false;
}

/**
 * Obtém as preferências atuais do usuário
 */
export function getCurrentPreferences(): CookiePreferences {
  const consentState = loadCookiePreferences();
  return consentState?.preferences ?? DEFAULT_COOKIE_PREFERENCES;
}

/**
 * Verifica se uma categoria específica de cookies está aceita
 */
export function isCategoryAccepted(category: keyof CookiePreferences): boolean {
  const preferences = getCurrentPreferences();
  return preferences[category];
}

/**
 * Aceita todos os cookies
 */
export function acceptAllCookies(): void {
  saveCookiePreferences({
    essential: true,
    analytics: true,
    marketing: true,
  });
}

/**
 * Rejeita todos os cookies não essenciais
 */
export function rejectNonEssentialCookies(): void {
  saveCookiePreferences({
    essential: true,
    analytics: false,
    marketing: false,
  });
}

/**
 * Verifica se é necessário mostrar o banner de cookies
 */
export function shouldShowCookieBanner(): boolean {
  return !hasUserConsented();
}

/**
 * Utilitário para verificar se estamos no lado do cliente
 */
export function isClientSide(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Hook para aguardar hidratação do cliente
 */
export function waitForClientHydration(): Promise<void> {
  return new Promise((resolve) => {
    if (isClientSide()) {
      resolve();
    } else {
      // Aguarda um tick para garantir que estamos no cliente
      setTimeout(resolve, 0);
    }
  });
}
