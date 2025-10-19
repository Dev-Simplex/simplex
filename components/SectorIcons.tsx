'use client';

import React from 'react';
import Image from 'next/image';
import {
  FileText,
  Workflow,
  Boxes,
  Network,
  Code,
  GitBranch,
  Users,
  Headphones,
  Cable,
  Zap,
  Camera,
  Wifi,
  Server,
  Shield,
  CloudDownload,
  Lock,
  Video,
  Disc,
  Plug,
  Menu,
  Mic,
  Radio,
  Signal,
  Antenna,
  Brain,
  MessagesSquare,
  TrendingUp,
  Target,
  RefreshCw,
  Phone,
  Settings,
  Clock,
  Minimize2,
  Calendar,
  BarChart3,
  FileEdit,
  Film,
  MessageSquare,
  Users2,
  Bot,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

interface SectorIconProps {
  name: string;
  className?: string;
}

export function SectorIcon({ name, className = "w-10 h-10" }: SectorIconProps) {
  const iconProps = {
    className: `${className} text-gray-700 dark:text-gray-300`,
    strokeWidth: 2,
  };

  // Logos oficiais (para ferramentas que têm marca registrada)
  const officialLogos: Record<string, string> = {
    'zabbix': '/images/partners/zabbix.svg',
    'grafana': '/images/partners/grafana.svg',
    'glpi': '/images/partners/glpi.svg',
  };

  // Se for um logo oficial, renderizar imagem
  if (officialLogos[name]) {
    return (
      <div className={className}>
        <Image
          src={officialLogos[name]}
          alt={name}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    );
  }

  // Ícones Lucide mapeados
  switch (name) {
    // Simplex Dev
    case 'documentacao':
      return <FileText {...iconProps} />;
    case 'mapa-processos':
      return <Workflow {...iconProps} />;
    case 'prototipagem':
      return <Boxes {...iconProps} />;
    case 'arquitetura':
      return <Network {...iconProps} />;
    case 'criacao':
      return <Code {...iconProps} />;
    case 'versionamento':
      return <GitBranch {...iconProps} />;

    // Simplex TI
    case 'outsourcing':
      return <Users {...iconProps} />;
    case 'service-desk':
      return <Headphones {...iconProps} />;
    case 'cabeamento-estruturado':
      return <Cable {...iconProps} />;
    case 'fibra-optica':
      return <Zap {...iconProps} />;
    case 'cftv':
      return <Camera {...iconProps} />;
    case 'wifi':
      return <Wifi {...iconProps} />;
    case 'datacenter':
      return <Server {...iconProps} />;
    case 'firewall-antivirus':
      return <Shield {...iconProps} />;
    case 'cloud-backup':
      return <CloudDownload {...iconProps} />;
    case 'controle-acesso':
      return <Lock {...iconProps} />;

    // Simplex IP
    case 'qualidade-hd':
      return <Video {...iconProps} />;
    case 'gravacoes':
      return <Disc {...iconProps} />;
    case 'integracoes':
      return <Plug {...iconProps} />;
    case 'menu-digital':
      return <Menu {...iconProps} />;
    case 'voicebot':
      return <Mic {...iconProps} />;
    case 'realtime':
      return <Radio {...iconProps} />;

    // Simplex Eagle
    case 'lte-4g':
      return <Signal {...iconProps} />;
    case 'lora-wan':
      return <Antenna {...iconProps} />;
    case 'n8n-nodered':
      return <Workflow {...iconProps} />;
    case 'ia':
      return <Brain {...iconProps} />;
    case 'multichannel':
      return <MessagesSquare {...iconProps} />;

    // Simplex IA
    case 'sdr-ativo':
      return <TrendingUp {...iconProps} />;
    case 'sdr-passivo':
      return <Target {...iconProps} />;
    case 'follow-up':
      return <RefreshCw {...iconProps} />;
    case 'voice':
      return <Phone {...iconProps} />;
    case 'automacao-processos':
      return <Settings {...iconProps} />;
    case 'otimizacao-rotinas':
      return <Zap {...iconProps} />;
    case 'eliminacao-etapas':
      return <Minimize2 {...iconProps} />;
    case 'otimizacao-tempo':
      return <Clock {...iconProps} />;
    case 'automacao-posts':
      return <Calendar {...iconProps} />;
    case 'metricas-campanhas':
      return <BarChart3 {...iconProps} />;
    case 'seo-copy':
      return <FileEdit {...iconProps} />;
    case 'geracao-videos':
      return <Film {...iconProps} />;

    // SPX Chat
    case 'multi-atendimento':
      return <MessageSquare {...iconProps} />;
    case 'fluxos-automacao':
      return <GitBranch {...iconProps} />;
    case 'gestao-times':
      return <Users2 {...iconProps} />;
    case 'chatbot':
      return <Bot {...iconProps} />;
    case 'atendimento-ia':
      return <Sparkles {...iconProps} />;

    // Default fallback
    default:
      return <HelpCircle {...iconProps} />;
  }
}
