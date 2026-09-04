/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BOOKING_WIDGET_ID?: string
  readonly VITE_PODIUM_TOKEN?: string
  readonly VITE_GTAG_ID?: string
  readonly VITE_PHONE_CONVERSION_LABEL?: string
  readonly VITE_FORM_ENDPOINT?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
