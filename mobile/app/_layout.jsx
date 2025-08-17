import { Stack } from "expo-router";
import SafeScreen from "../components/SafeScreen";
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'

export default function RootLayout() {
  return (
    <SafeScreen>
      <ClerkProvider>
        <Slot />
      </ClerkProvider>
    </SafeScreen>
  );
}
