'use client';

import { useEffect } from 'react';
import { useModal } from '@/components/providers/ModalProvider';
import { useCookieCategory } from '@/components/providers/CookieConsentProvider';

export function ChatwootWidget() {
  const { isModalOpen } = useModal();
  const marketingCookiesAccepted = useCookieCategory('marketing');

  useEffect(() => {
    // Só carrega o Chatwoot se os cookies de marketing estiverem aceitos
    if (!marketingCookiesAccepted) {
      return;
    }

    // Configurações do Chatwoot
    (window as any).chatwootSettings = {
      position: 'right',
      type: 'expanded_bubble',
      launcherTitle: 'Fale conosco no chat'
    };

    // Carregar script do Chatwoot
    const BASE_URL = 'https://chat.simplexsolucoes.com.br';
    const script = document.createElement('script');
    script.src = BASE_URL + '/packs/js/sdk.js';
    script.async = true;

    script.onload = () => {
      if ((window as any).chatwootSDK) {
        (window as any).chatwootSDK.run({
          websiteToken: 'AF6ykqodXTGYJvbfiZMgaEEv',
          baseUrl: BASE_URL
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup ao desmontar
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [marketingCookiesAccepted]);

  // Esconder/Mostrar widget baseado no estado do modal
  useEffect(() => {
    // Adiciona/remove classe no body para controlar via CSS
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Também tenta esconder diretamente via JavaScript
    const hideShowChatwoot = () => {
      // Tentar múltiplos seletores possíveis do Chatwoot
      const selectors = [
        '.woot-widget-holder',
        '.woot-widget-bubble',
        '.woot--bubble-holder',
        '#chatwoot_live_chat_widget',
        '[data-chatwoot-widget]'
      ];

      let chatwootRoot: Element | null = null;

      for (const selector of selectors) {
        chatwootRoot = document.querySelector(selector);
        if (chatwootRoot) {
          if (isModalOpen) {
            (chatwootRoot as HTMLElement).style.display = 'none';
          } else {
            (chatwootRoot as HTMLElement).style.display = '';
          }
          break;
        }
      }

      // Se não encontrou, tenta novamente
      if (!chatwootRoot) {
        setTimeout(hideShowChatwoot, 100);
      }
    };

    // Aguarda um pouco para garantir que o Chatwoot carregou
    const timer = setTimeout(hideShowChatwoot, 300);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  return null;
}

