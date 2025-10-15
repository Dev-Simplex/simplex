import { QrCode } from 'lucide-react';

export function QRPreview() {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-card rounded-lg border-2 border-dashed border-border">
      <div className="w-48 h-48 bg-gradient-to-br from-brand-50 to-brand-300/20 rounded-lg flex items-center justify-center mb-4">
        <QrCode className="w-32 h-32 text-brand-700" />
      </div>
      <p className="text-sm text-muted-foreground text-center max-w-xs">
        Escaneie o QR Code no Dashboard para autenticar sua instância WhatsApp
      </p>
    </div>
  );
}
