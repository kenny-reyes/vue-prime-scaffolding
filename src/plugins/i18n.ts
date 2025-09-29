import { createI18n } from 'vue-i18n'
import enUs from '@/locales/messages/en-US.json'
import esEs from '@/locales/messages/es-ES.json'
import enUsFormat from '@/locales/dateTimeFormats/en-US.json'
import esEsFormat from '@/locales/dateTimeFormats/es-ES.json'

const defaultLanguage = import.meta.env.VITE_DEFAULT_LANGUAGE as string
type MessageSchema = typeof esEs

const getVueI18n = (language: string) => {
  console.log(language)
  const dateTimeFormats = {
    'es-ES': esEsFormat as Record<string, Intl.DateTimeFormatOptions>,
    'en-US': enUsFormat as Record<string, Intl.DateTimeFormatOptions>
  } as Record<string, Record<string, Intl.DateTimeFormatOptions>>

  return createI18n<[MessageSchema], string>({
    locale: language,
    globalInjection: true,
    legacy: false,
    fallbackLocale: 'en-US',
    messages: {
      'es-ES': {
        ...esEs
      },
      'en-US': {
        ...enUs
      }
    },
    datetimeFormats: dateTimeFormats
  })
}

export default getVueI18n(defaultLanguage)
