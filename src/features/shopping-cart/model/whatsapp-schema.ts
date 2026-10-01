import { z } from 'zod'

export const whatsappNumberSchema = z.string().trim().regex(/^\d+$/, 'Número de WhatsApp inválido')
