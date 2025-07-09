import { v4 as uuidv4 } from 'uuid'

const UUID_KEY = 'vibedback_user_uuid'

export function getUserUUID(): string {
  if (typeof window === 'undefined') return uuidv4()
  
  let uuid = localStorage.getItem(UUID_KEY)
  if (!uuid) {
    uuid = uuidv4()
    localStorage.setItem(UUID_KEY, uuid)
  }
  return uuid
}

export function clearUserUUID(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(UUID_KEY)
  }
}