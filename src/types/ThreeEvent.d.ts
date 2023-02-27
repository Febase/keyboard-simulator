export type ThreeEventType = {
  keyId?: string | null
}

interface ThreeCustomEvent {
  threekeyboardevent: CustomEvent<ThreeEventType>
}
declare global {
  interface Document {
    //adds definition to Document, but you can do the same with HTMLElement
    addEventListener<K extends keyof ThreeCustomEvent>(
      type: K,
      listener: (this: Document, ev: ThreeCustomEvent[K]) => void,
    ): void
    removeEventListener<K extends keyof ThreeCustomEvent>(
      type: K,
      listener: (this: Document, ev: ThreeCustomEvent[K]) => void,
    ): void
    dispatchEvent<K extends keyof ThreeCustomEvent>(
      ev: ThreeCustomEvent[K],
    ): void
  }
}
export {}
