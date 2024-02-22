import tailwindcssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useState } from "react"

import Sidebar from "~components/Sidebar"
import Tooltip from "~components/Tooltip"

export const config: PlasmoCSConfig = {
  matches: [
    "https://www.plasmo.com/*",
    "https://desk.channel.io/*",
    "https://sell.smartstore.naver.com/*"
  ],
  run_at: "document_start"
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent += tailwindcssText
  return style
}

export default function Content() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Sidebar isOpen={isOpen} />
      <Tooltip clickHandler={() => setIsOpen(true)} />
    </>
  )
}