import { CodeEditorState } from "@/types";
import { create } from "zustand";

const getInitialState = ()=>{

    // window will be undefined on server side
    if(typeof window === "undefined"){

    }
}
export const useCodeEditorStore = create<CodeEditorState>((set,get)=>{
    const initialState = getInitialState()
    return {

    }
})