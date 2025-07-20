"use client"
import { useCodeEditorStore } from "@/store/useCodeEditorStore";
import { useRef, useState } from "react"

function LanguageSelector({hasAccess}:{hasAcess:boolean}) {

  const {isOpen ,setIsOpen} = useState(false);
  const {language, setLanguage} = useCodeEditorStore();
  const dropdownRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      LanguageSelect
    </div>
  )
}

export default LanguageSelector
