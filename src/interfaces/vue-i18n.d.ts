import { DefineLocaleMessage } from "vue-i18n";
import basicTranslations from "@/locales/ru.json";

export type LocaleMessages = typeof basicTranslations;

declare module "vue-i18n" {
  export type DefineLocaleMessage = LocaleMessages;
}
