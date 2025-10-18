'use client';

import { useEffect } from 'react';

export function ChatwootWidget() {
  useEffect(() => {
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
  }, []);

  return null;
}

