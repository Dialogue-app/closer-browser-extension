import { Theme } from "@radix-ui/themes"
import type { User } from "@supabase/supabase-js"
import radixUIText from "data-text:@radix-ui/themes/styles.css"
import tailwindcssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

import { useStorage } from "@plasmohq/storage/hook"

import Sidebar from "~components/Sidebar"
import Tooltip from "~components/Tooltip"
import { type OrganizationStorage } from "~options"

export const config: PlasmoCSConfig = {
  matches: [
    "https://www.plasmo.com/*",
    "https://desk.channel.io/*",
    "https://sell.smartstore.naver.com/*",
    "https://sell.smartstore.naver.com/#/home/about",
    "https://sell.smartstore.naver.com/#/talktalk/chat",
    "https://talk.sell.smartstore.naver.com/*"
  ],
  run_at: "document_start",
  all_frames: true
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent += radixUIText
  style.textContent += tailwindcssText
  return style
}

export default function Content() {
  const [isOpen, setIsOpen] = useState(false)
  const [user] = useStorage<User>("user")

  return (
    <Theme>
      <Sidebar isOpen={isOpen} auth={user} />
      <Tooltip clickHandler={() => setIsOpen(true)} />
    </Theme>
  )
}
