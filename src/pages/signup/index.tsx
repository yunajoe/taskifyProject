/* 회원가입 페이지

TODO - 나중에 되면 비밀번호 찾기 같은 것도 만들어볼 수 있지 않을까 가능하다면 해볼것.
*/

import { useRouter } from 'next/router'
import { useEffect } from 'react'

import SignLayout from '@/components/ui/layout/SignLayout'
import SignupForm from '@/components/signForm/SignupForm'
import useAuthContext from '@/hooks/useAuth'

export default function SignUpPage() {
  const { token } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (token) {
      router.push('/dashboard')
    }
  }, [token, router])

  return (
    <SignLayout isSignin={false}>
      <SignupForm />
    </SignLayout>
  )
}
