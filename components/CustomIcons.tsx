import React from 'react';
import {
    Globe,
    ShieldCheck,
    Cpu,
    ChatCircle,
    ChartBar,
    Code,
    Lifebuoy,
    Database,
    Stack,
    Phone,
    PuzzlePiece,
    HardDrives,
    Lock,
    Cloud,
    Cube,
    VideoCamera,
    Eye,
    FolderOpen
} from 'phosphor-react';

interface IconProps {
    className?: string;
}

// Soluções (6 ícones)
export const GlobeAltIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Globe className={className} weight="regular" />
);

export const ShieldCheckIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <ShieldCheck className={className} weight="regular" />
);

export const CpuChipIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Cpu className={className} weight="regular" />
);

export const ChatBubbleBottomCenterTextIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <ChatCircle className={className} weight="regular" />
);

export const ChartBarIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <ChartBar className={className} weight="regular" />
);

export const CodeBracketIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Code className={className} weight="regular" />
);

// Serviços (12 ícones)
export const LifebuoyIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Lifebuoy className={className} weight="regular" />
);

export const ServerStackIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Database className={className} weight="regular" />
);

export const RectangleStackIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Stack className={className} weight="regular" />
);

export const PhoneIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Phone className={className} weight="regular" />
);

export const PuzzlePieceIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <PuzzlePiece className={className} weight="regular" />
);

export const CircleStackIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <HardDrives className={className} weight="regular" />
);

export const LockClosedIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Lock className={className} weight="regular" />
);

export const CloudIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Cloud className={className} weight="regular" />
);

export const CubeTransparentIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Cube className={className} weight="regular" />
);

export const VideoCameraIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <VideoCamera className={className} weight="regular" />
);

export const EyeIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <Eye className={className} weight="regular" />
);

export const FolderOpenIcon = ({ className = "w-6 h-6" }: IconProps) => (
    <FolderOpen className={className} weight="regular" />
);

// Mapeamento de string para componente
export const iconMap: Record<string, React.ComponentType<IconProps>> = {
    // Soluções
    'GlobeAlt': GlobeAltIcon,
    'ShieldCheck': ShieldCheckIcon,
    'CpuChip': CpuChipIcon,
    'ChatBubbleBottomCenterText': ChatBubbleBottomCenterTextIcon,
    'ChartBar': ChartBarIcon,
    'CodeBracket': CodeBracketIcon,

    // Serviços
    'Lifebuoy': LifebuoyIcon,
    'ServerStack': ServerStackIcon,
    'RectangleStack': RectangleStackIcon,
    'Phone': PhoneIcon,
    'PuzzlePiece': PuzzlePieceIcon,
    'CircleStack': CircleStackIcon,
    'LockClosed': LockClosedIcon,
    'Cloud': CloudIcon,
    'CubeTransparent': CubeTransparentIcon,
    'VideoCamera': VideoCameraIcon,
    'Eye': EyeIcon,
    'FolderOpen': FolderOpenIcon,
};