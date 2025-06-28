import { clsx } from 'clsx'

function cn(...inputs: (string | undefined | null | false)[]): string {
  return clsx(...inputs)
}
