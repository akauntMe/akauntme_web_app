'use client'
import { useRouter } from 'next/navigation'
import { Input, InputError, Checkbox } from '@/components/basics'
import { LogoIcon } from '@/components/icons'
import Link from 'next/link'
import * as yup from 'yup'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
})
const Login = () => {
  const router = useRouter()
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [error, setError] = useState<string>('')
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await schema.validate(loginData, { abortEarly: false })
      setErrors({})
      console.log('Login Data:', loginData)
      router.push('/')
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors: { [key: string]: string } = {}
        err.inner.forEach((error) => {
          if (error.path) newErrors[error.path] = error.message
        })
        setErrors(newErrors)
      }
    }
  }
  return (
    <div className="flex justify-center flex-col items-center gap-y-10">
      <div className="flex justify-center flex-col items-center gap-y-5">
        <LogoIcon className="fill-akauntme size-10" type="alone" />
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-akauntme">
            Sign In to Akauntme
          </h1>
          <p className="mt-2 md:mt-5 font-base italic text-indigo-500">
            Your Smart Accounting Padi...{' '}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-y-4 md:gap-x-4 w-9/12 md:w-auto">
        <a className="w-full md:w-auto inline-flex justify-center p-2 rounded-lg gap-x-2 border border-gray-500/30 cursor-pointer hover:shadow-md shadow-akauntme/50 transition-all">
          <div>
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fbc02d"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#e53935"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4caf50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1565c0"
                d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
          </div>
          <h2 className="font-semibold">Sign in with Google</h2>
        </a>
        <a className="w-full md:w-auto inline-flex justify-center p-2 rounded-lg gap-x-2 border border-gray-500/30 cursor-pointer hover:shadow-md shadow-akauntme/50 transition-all">
          <div>
            <svg
              className="size-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path d="M36.232,23.985c0-5.865,4.766-8.51,4.966-8.636c-2.596-3.993-6.79-4.467-8.362-4.468c-3.643,0-6.863,2.022-8.585,2.022c-1.797,0-4.418-2.121-7.363-2.022c-3.843,0.075-7.363,2.346-9.334,5.691c-1.397,2.396-1.947,5.217-1.896,8.087c0.002,0.113,0.017,0.228,0.02,0.341H36.32C36.279,24.671,36.243,24.337,36.232,23.985z" />
              <path d="M30.565,7.063C32.261,5.191,33.21,2.621,33.06,0c-2.346,0-5.066,1.372-6.788,3.394c-1.348,1.672-2.795,4.293-2.271,6.913C26.422,10.607,29.043,9.085,30.565,7.063z" />
              <path d="M17.511,45c2.771,0,3.794-1.848,7.413-1.848c3.37,0,4.418,1.848,7.338,1.848c3.07,0,5.092-2.795,6.913-5.567c2.295-3.218,3.07-6.288,3.169-6.414c-0.094,0-5.287-2.112-6.026-8.019H5.678c0.157,5.311,2.228,10.79,4.671,14.309C12.27,42.055,14.441,45,17.511,45z" />
            </svg>
          </div>
          <h2 className="font-semibold">Sign in with Apple</h2>
        </a>
      </div>

      <div className="flex justify-between items-center relative min-w-[250px] sm:min-w-[300px] lg:min-w-[380px] gap-x-20">
        <div className="before:content-[''] before:left-0 before:absolute before:w-3/12 lg:before:w-4/12 before:h-[0.5px] before:bg-neutral-300"></div>
        <h2>Or with email</h2>
        <div className="before:content-[''] before:right-0 before:absolute before:w-3/12 lg:before:w-4/12 before:h-[0.5px] before:bg-neutral-300"></div>
      </div>

      {/* onSubmit={submit} */}

      <form
        className="w-full justify-center flex flex-col items-center gap-y-5"
        onSubmit={handleLogin}
        onClick={() => setErrors({})}
      >
        <div className="w-9/12 md:w-8/12 flex flex-col gap-1 justify-center">
          <Input
            id="email"
            type="email"
            className="py-3 rounded-lg w-full"
            placeholder="Enter your email address"
            value={loginData.email}
            onChange={(e: any) =>
              setLoginData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          <p className="text-red-500 text-sm">{errors.email}</p>
        </div>

        <div className="w-9/12 md:w-8/12 flex flex-col gap-1 justify-center">
          <Input
            id="password"
            type="password"
            className="py-3 rounded-lg w-full"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={(e: any) =>
              setLoginData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
          <p className="text-red-500 text-sm">{errors.password}</p>
        </div>

        <div className="flex justify-between w-9/12 md:w-6/12 items-center">
          <div className="flex items-center gap-x-2 text-indigo-600 font-semibold">
            {/* <Input type="checkbox" className=""
                                        name="remember"
                                        id="remember_me"
                                        onChange={event =>
                                            setShouldRemember(event.target.checked)
                                        }
                                    /> 
                                    Remember me

                                    */}

            <label className="flex items-center">
              <Checkbox name="remember" />
              <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">
                Remember me
              </span>
            </label>
          </div>

          {/* {canResetPassword && (
                                    // href={route('password.request')}

                                    <Link
                                        href="#"
                                        className="text-akauntme hover:underline">
                                        Forget password?
                                    </Link>

                                )} */}
        </div>

        <button
          type="submit"
          className="flex justify-center bg-gradient-to-bl from-akauntme to-violet-600 font-semibold lg:text-xl py-3 rounded-lg shadow-lg shadow-akauntme/70 transition-all hover:scale-95 w-9/12 md:w-6/12 text-center text-white"
        >
          Sign In
        </button>
      </form>

      <div>
        Don&apos;t have an account?{' '}
        <Link href="/register" className="text-akauntme font-semibold">
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Login
