/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TMDB_APIKEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}