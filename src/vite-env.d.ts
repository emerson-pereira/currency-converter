/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_UPHOLD_SDK_URL: string;
  readonly VITE_UPHOLD_SDK_CLIENT_ID: string;
  readonly VITE_UPHOLD_SDK_CLIENT_SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
