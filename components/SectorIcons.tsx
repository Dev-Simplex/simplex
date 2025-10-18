'use client';

import React from 'react';

interface SectorIconProps {
  name: string;
  className?: string;
}

export function SectorIcon({ name, className = "w-10 h-10" }: SectorIconProps) {
  const iconProps = {
    className,
    stroke: "#1F2937",
    strokeWidth: 1.5,
    fill: "none"
  };

  switch (name) {
    // Simplex Dev
    case 'documentacao':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
          <path d="M9 14l2 2 4-4"/>
        </svg>
      );
    case 'mapa-processos':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="3" width="7" height="7" rx="1"/>
          <rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/>
          <rect x="14" y="14" width="7" height="7" rx="1"/>
          <line x1="10" y1="6.5" x2="14" y2="6.5"/>
          <line x1="10.5" y1="10" x2="10.5" y2="14"/>
          <line x1="14" y1="17.5" x2="10" y2="17.5"/>
          <line x1="13.5" y1="14" x2="13.5" y2="10"/>
        </svg>
      );
    case 'prototipagem':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <circle cx="12" cy="12" r="3"/>
          <circle cx="12" cy="12" r="1"/>
          <path d="M12 9v6m3-3H9"/>
        </svg>
      );
    case 'arquitetura':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6"/>
          <path d="M21 12h-6m-6 0H3"/>
          <circle cx="12" cy="3" r="2"/>
          <circle cx="12" cy="21" r="2"/>
        </svg>
      );
    case 'criacao':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
      );
    case 'versionamento':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="4" rx="1"/>
          <rect x="3" y="10" width="18" height="4" rx="1"/>
          <rect x="3" y="16" width="18" height="4" rx="1"/>
        </svg>
      );

    // Simplex TI
    case 'outsourcing':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="12" rx="2"/>
          <path d="M9 8h6"/>
          <path d="M9 12h4"/>
          <circle cx="15" cy="16" r="2"/>
        </svg>
      );
    case 'service-desk':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      );
    case 'cabeamento-estruturado':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="8" width="18" height="8" rx="2"/>
          <path d="M7 12h10"/>
          <circle cx="6" cy="12" r="1"/>
          <circle cx="18" cy="12" r="1"/>
          <path d="M9 6v2"/>
          <path d="M15 6v2"/>
        </svg>
      );
    case 'fibra-optica':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M2 12h20"/>
          <path d="M6 8l2 4"/>
          <path d="M18 8l-2 4"/>
          <path d="M10 8l2 4"/>
          <path d="M14 8l-2 4"/>
          <circle cx="2" cy="12" r="2"/>
          <circle cx="22" cy="12" r="2"/>
        </svg>
      );
    case 'cftv':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="6" width="18" height="12" rx="2"/>
          <circle cx="12" cy="12" r="3"/>
          <path d="M7 3v3"/>
          <path d="M17 3v3"/>
          <path d="M7 21v-3"/>
          <path d="M17 21v-3"/>
        </svg>
      );
    case 'wifi':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
          <line x1="12" y1="20" x2="12.01" y2="20"/>
        </svg>
      );
    case 'datacenter':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2"/>
          <path d="M7 8h10"/>
          <path d="M7 12h10"/>
          <path d="M7 16h4"/>
          <path d="M3 20h18"/>
        </svg>
      );
    case 'firewall-antivirus':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      );
    case 'cloud-backup':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
          <path d="M8 14l4 4 4-4"/>
          <path d="M12 18V10"/>
        </svg>
      );
    case 'controle-acesso':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
          <path d="M12 6c-3.31 0-6 2.69-6 6 0 1.66.68 3.16 1.78 4.25"/>
          <path d="M12 18c3.31 0 6-2.69 6-6 0-1.66-.68-3.16-1.78-4.25"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      );

    // Simplex IP
    case 'qualidade-hd':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2"/>
          <path d="M7 8h4v8H7z"/>
          <path d="M13 8h4v8h-4z"/>
          <path d="M9 6v2"/>
          <path d="M15 6v2"/>
        </svg>
      );
    case 'gravacoes':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="2" y="6" width="20" height="12" rx="2"/>
          <path d="M6 4v16"/>
          <path d="M18 4v16"/>
          <circle cx="12" cy="12" r="3"/>
        </svg>
      );
    case 'integracoes':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2"/>
          <path d="M9 8h6"/>
          <path d="M9 12h6"/>
          <path d="M9 16h4"/>
        </svg>
      );
    case 'menu-digital':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <line x1="3" y1="6" x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      );
    case 'voicebot':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          <line x1="12" y1="19" x2="12" y2="22"/>
          <line x1="8" y1="22" x2="16" y2="22"/>
          <path d="M12 15v4"/>
        </svg>
      );
    case 'realtime':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6"/>
          <path d="M21 12h-6m-6 0H3"/>
          <circle cx="12" cy="3" r="2"/>
          <circle cx="12" cy="21" r="2"/>
          <circle cx="3" cy="12" r="2"/>
          <circle cx="21" cy="12" r="2"/>
        </svg>
      );

    // Simplex Eagle
    case 'lte-4g':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
          <rect x="3" y="18" width="4" height="4" rx="1"/>
          <text x="5" y="20.5" fontSize="2" fill="#1F2937">4G</text>
        </svg>
      );
    case 'lora-wan':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="8" width="18" height="8" rx="2"/>
          <path d="M7 12h10"/>
          <circle cx="6" cy="12" r="1"/>
          <circle cx="18" cy="12" r="1"/>
          <path d="M9 6v2"/>
          <path d="M15 6v2"/>
          <path d="M12 16v2"/>
        </svg>
      );
    case 'zabbix':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2"/>
          <path d="M7 8h10"/>
          <path d="M7 12h10"/>
          <path d="M7 16h4"/>
          <text x="12" y="14" fontSize="4" fill="#1F2937" textAnchor="middle">Z</text>
        </svg>
      );
    case 'grafana':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6"/>
          <path d="M21 12h-6m-6 0H3"/>
          <circle cx="12" cy="3" r="2"/>
          <circle cx="12" cy="21" r="2"/>
          <path d="M8.5 8.5l3 3"/>
          <path d="M15.5 15.5l-3-3"/>
        </svg>
      );
    case 'glpi':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
          <path d="M8 8h8v8H8z"/>
          <path d="M10 10h4v4h-4z"/>
          <text x="12" y="13" fontSize="2" fill="#1F2937" textAnchor="middle">G</text>
        </svg>
      );
    case 'n8n-nodered':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="2"/>
          <circle cx="18" cy="6" r="2"/>
          <circle cx="6" cy="18" r="2"/>
          <circle cx="18" cy="18" r="2"/>
          <path d="M8 6h8"/>
          <path d="M8 18h8"/>
          <path d="M6 8v8"/>
          <path d="M18 8v8"/>
          <path d="M8 8l8 8"/>
          <path d="M16 8l-8 8"/>
        </svg>
      );
    case 'ia':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <circle cx="6" cy="6" r="1"/>
          <circle cx="18" cy="6" r="1"/>
          <circle cx="6" cy="18" r="1"/>
          <circle cx="18" cy="18" r="1"/>
          <path d="M7 7l10 10"/>
          <path d="M17 7L7 17"/>
        </svg>
      );
    case 'multichannel':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <circle cx="9" cy="10" r="1"/>
          <circle cx="15" cy="10" r="1"/>
          <path d="M12 14v2"/>
        </svg>
      );

    // Simplex IA
    case 'sdr-ativo':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M3 3v18h18"/>
          <path d="M18.7 17l-5.1-5.2-2.8 3-1.4-1.4"/>
          <path d="M3 12h14"/>
        </svg>
      );
    case 'sdr-passivo':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      );
    case 'follow-up':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M21 12a9 9 0 11-6.219-8.56"/>
          <path d="M12 3v9l4 4"/>
        </svg>
      );
    case 'voice':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          <line x1="12" y1="19" x2="12" y2="22"/>
          <line x1="8" y1="22" x2="16" y2="22"/>
        </svg>
      );
    case 'automacao-processos':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="12" rx="2"/>
          <path d="M7 8h10"/>
          <path d="M7 12h10"/>
          <path d="M7 16h4"/>
          <circle cx="17" cy="8" r="2"/>
          <path d="M15 8h4"/>
        </svg>
      );
    case 'otimizacao-rotinas':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      );
    case 'eliminacao-etapas':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="4" width="6" height="16" rx="1"/>
          <rect x="9" y="6" width="6" height="14" rx="1"/>
          <rect x="15" y="8" width="6" height="12" rx="1"/>
        </svg>
      );
    case 'otimizacao-tempo':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M12 6v6l4 2"/>
          <path d="M12 2a10 10 0 1 1 0 20"/>
        </svg>
      );
    case 'automacao-posts':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="16" rx="2"/>
          <circle cx="8" cy="8" r="2"/>
          <path d="M21 15l-3-3-3 2-4-4-4 4"/>
        </svg>
      );
    case 'metricas-campanhas':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M3 3v18h18"/>
          <path d="M18.7 17l-5.1-5.2-2.8 3-1.4-1.4"/>
          <path d="M3 12h14"/>
        </svg>
      );
    case 'seo-copy':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
          <path d="M16 13H8"/>
          <path d="M16 17H8"/>
          <path d="M10 9H8"/>
        </svg>
      );
    case 'geracao-videos':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <polygon points="23 7 16 12 23 17 23 7"/>
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
      );

    // SPX Chat
    case 'multi-atendimento':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <circle cx="9" cy="10" r="1"/>
          <circle cx="15" cy="10" r="1"/>
          <circle cx="12" cy="16" r="1"/>
        </svg>
      );
    case 'fluxos-automacao':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          <path d="M8 12l2 2 4-4"/>
        </svg>
      );
    case 'gestao-times':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      );
    case 'chatbot':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          <circle cx="9" cy="10" r="1"/>
          <circle cx="15" cy="10" r="1"/>
          <rect x="8" y="14" width="8" height="2" rx="1"/>
        </svg>
      );
    case 'atendimento-ia':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="3"/>
          <circle cx="6" cy="6" r="1"/>
          <circle cx="18" cy="6" r="1"/>
          <circle cx="6" cy="18" r="1"/>
          <circle cx="18" cy="18" r="1"/>
          <path d="M7 7l10 10"/>
          <path d="M17 7L7 17"/>
          <path d="M12 1v2"/>
          <path d="M12 21v2"/>
          <path d="M1 12h2"/>
          <path d="M21 12h2"/>
        </svg>
      );

    default:
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8.5 8.5L15.5 15.5"/>
          <path d="M15.5 8.5L8.5 15.5"/>
        </svg>
      );
  }
}
