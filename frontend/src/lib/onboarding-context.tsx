"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useOnboardingStore, type OnboardingStatus, type UserFormData } from "./onboarding-store"
import {register} from "@/auth/allAuth.tsx";
import {formSchema} from "@/types/forms.ts";
import {z} from "zod";

interface OnboardingContextType {
  currentStep: number
  status: OnboardingStatus
  formData: UserFormData
  errorMessage: string | null
  setStep: (step: number) => void
  setStatus: (status: OnboardingStatus) => void
  setFormData: (data: Partial<UserFormData>) => void
  setErrorMessage: (message: string | null) => void
  resetOnboarding: () => void
  submitForm: (data:z.infer<typeof formSchema>) => Promise<void>
  checkProcessingStatus: () => Promise<void>
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined)

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const {
    currentStep,
    status,
    formData,
    errorMessage,
    setStep,
    setStatus,
    setFormData,
    setErrorMessage,
    resetOnboarding,
  } = useOnboardingStore()

  // Submit form data to API
  const submitForm = async (data?: z.infer<typeof formSchema>) => {
    try {
      setStatus("submitting")

      const submissionData = data || formData

      // Simulate API call
      await register(submissionData)

      // Simulate successful submission
      setStatus("processing")
      setStep(1) // Move to processing page
    } catch (error) {
      setStatus("error")
      setErrorMessage("Failed to submit your registration. Please try again.")
    }
  }

  // Check processing status from API
  const checkProcessingStatus = async () => {
    try {
      // Call the actual backend API to check status
      const response = await fetch('/_allauth/onboard/check-status/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.overall_status === "completed") {
        setStatus("completed");
        setStep(2); // Move to dashboard
      } else if (data.overall_status === "failed") {
        setStatus("error");
        setErrorMessage("Processing failed. Please try again.");
      } else {
        // Still processing
        setStatus("processing");
      }
    } catch (error) {
      console.error('Error checking processing status:', error);
      setStatus("error");
      setErrorMessage(`Failed to check processing status. Please try again later.`);
    }
  }

  return (
    <OnboardingContext.Provider
      value={{
        currentStep,
        status,
        formData,
        errorMessage,
        setStep,
        setStatus,
        setFormData,
        setErrorMessage,
        resetOnboarding,
        submitForm,
        checkProcessingStatus,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  )
}

export function useOnboarding() {
  const context = useContext(OnboardingContext)
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider")
  }
  return context
}

