import { useMutation } from 'react-query'
import { z } from 'zod'
import { useAtom } from 'jotai'
import { tokenAtom } from '../../store/atoms/token'
import { apiResponseSchema } from './useLogin.schema'
import { type LoginData } from './useLogin.types'

async function fetchAuth (url, data) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return await response.json()
}

export function useAuth () {
  const [, setToken] = useAtom(tokenAtom)

  const loginMutation = useMutation(
    async ({ email, password }: LoginData) =>
      await fetchAuth('http://localhost:3333/login', { email, password }),
    {
      onSuccess: (data) => {
        const parsedData = apiResponseSchema.parse(data)
        setToken(`Bearer ${parsedData.token}`)
      }
    }
  )

  return {
    login: loginMutation.mutate,
    error: loginMutation.error,
    isLoading: loginMutation.isLoading
  }
}
