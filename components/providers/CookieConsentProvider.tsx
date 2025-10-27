'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  CookiePreferences,
  CookieConsentState,
  DEFAULT_COOKIE_PREFERENCES,
  loadCookiePreferences,
  saveCookiePreferences,
  hasUserConsented,
  getCurrentPreferences,
  isClientSide,
  waitForClientHydration,
} from '@/lib/cookie-consent';

interface CookieConsentContextType {
  // Estado
  hasConsented: boolean;
  preferences: CookiePreferences;
  isLoading: boolean;
  showBanner: boolean;
  showSettings: boolean;
  
  // Ações
  acceptAll: () => void;
  rejectNonEssential: () => void;
  updatePreferences: (preferences: Partial<CookiePreferences>) => void;
  savePreferences: () => void;
  showSettingsModal: () => void;
  hideSettingsModal: () => void;
  hideBanner: () => void;
  
  // Utilitários
  isCategoryAccepted: (category: keyof CookiePreferences) => boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

interface CookieConsentProviderProps {
  children: ReactNode;
}

export function CookieConsentProvider({ children }: CookieConsentProviderProps) {
  const [hasConsented, setHasConsented] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_COOKIE_PREFERENCES);
  const [isLoading, setIsLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Carregar preferências do localStorage na inicialização
  useEffect(() => {
    const initializeConsent = async () => {
      await waitForClientHydration();
      
      if (isClientSide()) {
        // Aguardar o preloader terminar completamente
        const waitForPreloaderToFinish = () => {
          return new Promise<void>((resolve) => {
            const checkPreloader = () => {
              const preloader = document.getElementById('preloader');
              if (!preloader) {
                // Preloader não existe mais, pode mostrar o banner
                resolve();
              } else {
                // Preloader ainda existe, verificar novamente em 100ms
                setTimeout(checkPreloader, 100);
              }
            };
            
            // Começar a verificar após 500ms para dar tempo do preloader aparecer
            setTimeout(checkPreloader, 500);
          });
        };

        // Aguardar preloader terminar + delay adicional para melhor UX
        waitForPreloaderToFinish().then(() => {
          // Delay adicional de 1 segundo após preloader terminar
          setTimeout(() => {
            const consentState = loadCookiePreferences();
            
            if (consentState) {
              setHasConsented(consentState.hasConsented);
              setPreferences(consentState.preferences);
              setShowBanner(!consentState.hasConsented);
            } else {
              setShowBanner(true);
            }
            
            setIsLoading(false);
          }, 1000);
        });
      } else {
        setIsLoading(false);
      }
    };

    initializeConsent();
  }, []);

  // Função para aceitar todos os cookies
  const acceptAll = () => {
    const newPreferences: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    
    setPreferences(newPreferences);
    setHasConsented(true);
    setShowBanner(false);
    setShowSettings(false);
    saveCookiePreferences(newPreferences);
  };

  // Função para rejeitar cookies não essenciais
  const rejectNonEssential = () => {
    const newPreferences: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    
    setPreferences(newPreferences);
    setHasConsented(true);
    setShowBanner(false);
    setShowSettings(false);
    saveCookiePreferences(newPreferences);
  };

  // Função para atualizar preferências específicas
  const updatePreferences = (newPreferences: Partial<CookiePreferences>) => {
    setPreferences(prev => ({
      ...prev,
      ...newPreferences,
      essential: true, // Sempre manter essenciais como true
    }));
  };

  // Função para salvar as preferências atuais
  const savePreferences = () => {
    setHasConsented(true);
    setShowBanner(false);
    setShowSettings(false);
    saveCookiePreferences(preferences);
  };

  // Função para mostrar modal de configurações
  const showSettingsModal = () => {
    setShowSettings(true);
  };

  // Função para esconder modal de configurações
  const hideSettingsModal = () => {
    setShowSettings(false);
  };

  // Função para esconder banner
  const hideBanner = () => {
    setShowBanner(false);
  };

  // Função para verificar se uma categoria está aceita
  const isCategoryAccepted = (category: keyof CookiePreferences): boolean => {
    return preferences[category];
  };

  const contextValue: CookieConsentContextType = {
    // Estado
    hasConsented,
    preferences,
    isLoading,
    showBanner,
    showSettings,
    
    // Ações
    acceptAll,
    rejectNonEssential,
    updatePreferences,
    savePreferences,
    showSettingsModal,
    hideSettingsModal,
    hideBanner,
    
    // Utilitários
    isCategoryAccepted,
  };

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}
    </CookieConsentContext.Provider>
  );
}

// Hook para usar o contexto de cookies
export function useCookieConsent(): CookieConsentContextType {
  const context = useContext(CookieConsentContext);
  
  if (context === undefined) {
    throw new Error('useCookieConsent deve ser usado dentro de um CookieConsentProvider');
  }
  
  return context;
}

// Hook para verificar se uma categoria específica está aceita
export function useCookieCategory(category: keyof CookiePreferences): boolean {
  const { isCategoryAccepted } = useCookieConsent();
  return isCategoryAccepted(category);
}

// Hook para verificar se o usuário já deu consentimento
export function useHasConsented(): boolean {
  const { hasConsented } = useCookieConsent();
  return hasConsented;
}
