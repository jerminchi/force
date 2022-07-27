import { useDialog } from "Utils/Hooks/useDialog"
import { OnboardingModal } from "../Components/OnboardingModal"
import { OnboardingSteps } from "../Components/OnboardingSteps"
import { OnboardingProvider } from "./useOnboardingContext"

interface UseOnboarding {
  onClose(): void
}

export const useOnboarding = ({ onClose }: UseOnboarding) => {
  const { isVisible, showDialog, hideDialog, dialogComponent } = useDialog({
    Dialog: () => {
      return (
        <OnboardingProvider onClose={onClose}>
          <OnboardingModal onClose={hideDialog}>
            <OnboardingSteps />
          </OnboardingModal>
        </OnboardingProvider>
      )
    },
  })

  return {
    isVisible,
    showOnboarding: showDialog,
    hideOnboarding: hideDialog,
    onboardingComponent: dialogComponent,
  }
}
