'use client';

import React from 'react';
import { useCookieConsent } from '@/components/providers/CookieConsentProvider';
import { Button } from '@/components/ui/button';
import { Settings, Cookie } from 'lucide-react';

export function CookieBanner() {
  const {
    showBanner,
    isLoading,
    acceptAll,
    showSettingsModal,
  } = useCookieConsent();

  // Não renderizar se estiver carregando ou se não deve mostrar o banner
  if (isLoading || !showBanner) {
    return null;
  }

  return (
    <div className="cookie-banner-compact">
      <div className="cookie-banner-content-compact">
        {/* Ícone e texto */}
        <div className="cookie-banner-text">
          <Cookie className="w-5 h-5 text-blue-500" />
          <div>
            <p className="cookie-banner-title-compact">
              Usamos cookies para melhorar sua experiência
            </p>
          </div>
        </div>

        {/* Botões de ação */}
        <div className="cookie-banner-actions-compact">
          <Button
            variant="outline"
            size="sm"
            onClick={showSettingsModal}
            className="cookie-banner-btn-config"
          >
            <Settings className="w-3 h-3 mr-1" />
            Configurar
          </Button>
          
          <Button
            size="sm"
            onClick={acceptAll}
            className="cookie-banner-btn-accept-compact"
          >
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
}
