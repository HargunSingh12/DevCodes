import { CodeEditorState } from "@/types";
import { Monaco } from "@monaco-editor/react";
import { create } from "zustand";

const getInitialState = () => {

    // window will be undefined on server side
    if (typeof window === "undefined") {
        return {
            language: "javascript",
            fontSize: 16,
            theme: "vs-dark"
        }
    }
    const savedLanguage = localStorage.getItem("editor-language") || "javascript"
    const savedTheme = localStorage.getItem("editor-theme") || "vs-dark"
    const savedfontSize = localStorage.getItem("editor-font-size") || "16"

    return {
        language: savedLanguage,
        fontSize: Number(savedfontSize),
        theme: savedTheme
    }
}
export const useCodeEditorStore = create<CodeEditorState>((set, get) => {
    const initialState = getInitialState()
    return {
        ...initialState,
        output: "",
        isRunning: false,
        error: null,
        editor: null,
        executionResult: null,
        getCode: () => get().editor?.getValue() || "",
        setEditor: (editor: Monaco) => {
            const savedCode = localStorage.getItem(`editor-code-${get().language}`)
            if (savedCode) editor.setValue(savedCode);
            set({ editor })
        },
        setTheme:(theme:string)=>{
            localStorage.setItem("editor-theme",theme)
            set({theme})
        },
            setFontSize: (fontSize: number) => {
      localStorage.setItem("editor-font-size", fontSize.toString());
      set({ fontSize });
    },

    setLanguage: (language: string) => {
      // Save current language code before switching
      const currentCode = get().editor?.getValue();
      if (currentCode) {
        localStorage.setItem(`editor-code-${get().language}`, currentCode);
      }

      localStorage.setItem("editor-language", language);

      set({
        language,
        output: "",
        error: null,
      });
    },

    }
})