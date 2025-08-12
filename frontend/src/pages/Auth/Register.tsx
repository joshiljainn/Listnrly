import { GalleryVerticalEnd } from "lucide-react"

import {OnboardForm} from "@/pages/Onboarding/registration-form.tsx";

export default function Register() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-2 bg-muted p-6 md:p-10">
      <div className="flex w-full flex-col ">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Listnrly
        </a>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Listnrly
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Create your account to get started
          </p>
        </div>
        <OnboardForm />
      </div>
    </div>
  )
}
