'use client';

import React from 'react';
import { useCookieConsent } from '@/components/providers/CookieConsentProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  X, 
  Shield, 
  BarChart3, 
  Settings, 
  Cookie,
  CheckCircle,
  AlertCircle,
  Info
} from 'lucide-react';
import { COOKIE_CATEGORIES, CookiePreferences } from '@/lib/cookie-consent';

interface ToggleSwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

function ToggleSwitch({ checked, onChange, disabled = false }: ToggleSwitchProps) {
  return (
    <button
      type="button"
      className={`toggle-switch ${checked ? 'toggle-switch-active' : ''} ${disabled ? 'toggle-switch-disabled' : ''}`}
      onClick={() => !disabled && onChange(!checked)}
      disabled={disabled}
      aria-pressed={checked}
    >
      <div className="toggle-switch-thumb" />
    </button>
  );
}

export function CookieSettings() {
  const {
    showSettings,
    preferences,
    updatePreferences,
    savePreferences,
    hideSettingsModal,
    acceptAll,
    rejectNonEssential,
  } = useCookieConsent();

  if (!showSettings) {
    return null;
  }

  const handleCategoryChange = (category: keyof CookiePreferences, checked: boolean) => {
    updatePreferences({ [category]: checked });
  };

  const handleSave = () => {
    savePreferences();
  };

  const handleAcceptAll = () => {
    acceptAll();
  };

  const handleRejectNonEssential = () => {
    rejectNonEssential();
  };

  return (
    <div className="cookie-settings-overlay">
      <div className="cookie-settings-modal">
        <Card className="cookie-settings-card">
          <CardHeader className="cookie-settings-header">
            <div className="cookie-settings-title">
              <Cookie className="w-6 h-6" />
              <CardTitle>Configurações de Cookies</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={hideSettingsModal}
              className="cookie-settings-close"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>

          <CardContent className="cookie-settings-content">
            <div className="cookie-settings-description">
              <Info className="w-5 h-5 text-blue-500" />
              <p>
                Gerencie suas preferências de cookies. Os cookies essenciais são necessários 
                para o funcionamento básico do site e não podem ser desativados.
              </p>
            </div>

            {/* Categorias de cookies */}
            <div className="cookie-settings-categories">
              {/* Cookies Essenciais */}
              <Card className="cookie-category-card">
                <CardHeader className="cookie-category-header">
                  <div className="cookie-category-title">
                    <Shield className="w-5 h-5 text-green-500" />
                    <div>
                      <CardTitle className="text-base">{COOKIE_CATEGORIES.essential.name}</CardTitle>
                      <Badge variant="secondary" className="cookie-category-badge">
                        Necessário
                      </Badge>
                    </div>
                    <ToggleSwitch
                      checked={preferences.essential}
                      onChange={(checked) => handleCategoryChange('essential', checked)}
                      disabled={true}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="cookie-category-description">
                    {COOKIE_CATEGORIES.essential.description}
                  </CardDescription>
                  <div className="cookie-category-examples">
                    <p className="text-sm font-medium mb-2">Exemplos:</p>
                    <ul className="cookie-category-list">
                      {COOKIE_CATEGORIES.essential.examples.map((example, index) => (
                        <li key={index} className="cookie-category-item">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Cookies de Analytics */}
              <Card className="cookie-category-card">
                <CardHeader className="cookie-category-header">
                  <div className="cookie-category-title">
                    <BarChart3 className="w-5 h-5 text-blue-500" />
                    <div>
                      <CardTitle className="text-base">{COOKIE_CATEGORIES.analytics.name}</CardTitle>
                      <Badge variant="outline" className="cookie-category-badge">
                        Opcional
                      </Badge>
                    </div>
                    <ToggleSwitch
                      checked={preferences.analytics}
                      onChange={(checked) => handleCategoryChange('analytics', checked)}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="cookie-category-description">
                    {COOKIE_CATEGORIES.analytics.description}
                  </CardDescription>
                  <div className="cookie-category-examples">
                    <p className="text-sm font-medium mb-2">Exemplos:</p>
                    <ul className="cookie-category-list">
                      {COOKIE_CATEGORIES.analytics.examples.map((example, index) => (
                        <li key={index} className="cookie-category-item">
                          <CheckCircle className="w-3 h-3 text-blue-500" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Cookies de Marketing */}
              <Card className="cookie-category-card">
                <CardHeader className="cookie-category-header">
                  <div className="cookie-category-title">
                    <Settings className="w-5 h-5 text-purple-500" />
                    <div>
                      <CardTitle className="text-base">{COOKIE_CATEGORIES.marketing.name}</CardTitle>
                      <Badge variant="outline" className="cookie-category-badge">
                        Opcional
                      </Badge>
                    </div>
                    <ToggleSwitch
                      checked={preferences.marketing}
                      onChange={(checked) => handleCategoryChange('marketing', checked)}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="cookie-category-description">
                    {COOKIE_CATEGORIES.marketing.description}
                  </CardDescription>
                  <div className="cookie-category-examples">
                    <p className="text-sm font-medium mb-2">Exemplos:</p>
                    <ul className="cookie-category-list">
                      {COOKIE_CATEGORIES.marketing.examples.map((example, index) => (
                        <li key={index} className="cookie-category-item">
                          <CheckCircle className="w-3 h-3 text-purple-500" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Aviso de conformidade */}
            <div className="cookie-settings-compliance">
              <AlertCircle className="w-5 h-5 text-amber-500" />
              <div>
                <p className="text-sm font-medium">Conformidade com LGPD</p>
                <p className="text-xs text-muted-foreground">
                  Suas preferências são salvas localmente e respeitadas em todas as visitas. 
                  Você pode alterar essas configurações a qualquer momento.
                </p>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="cookie-settings-actions">
              <Button
                variant="outline"
                onClick={handleRejectNonEssential}
                className="cookie-settings-btn-reject"
              >
                Rejeitar Opcionais
              </Button>
              
              <Button
                onClick={handleSave}
                className="cookie-settings-btn-save"
              >
                Salvar Preferências
              </Button>
              
              <Button
                onClick={handleAcceptAll}
                className="cookie-settings-btn-accept-all"
              >
                Aceitar Tudo
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
