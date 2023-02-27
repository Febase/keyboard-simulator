# Team 1 : 키보드 시뮬레이터

김병헌 이본행 임혜림 (가나다 순)

데모: [https://febase4-3d-team1.pages.dev/](https://febase4-3d-team1.pages.dev/)

중간발표 자료: [노션](https://leebh.notion.site/team1-65d4c4cf81b840c7a1bb0a9d2edee915)

---



# 구현 내용


https://user-images.githubusercontent.com/9066602/221558192-b59fa237-1a46-4345-8d2f-9e9e388810be.MP4


구현 항목은 크게 세가지입니다.
1. 텍스트 입력 패널
2. 텍스트 이벤트 발생 로직
3. 이벤트에 따라 키보드 애니메이션


## 텍스트 이벤트 발생 로직
![image](https://user-images.githubusercontent.com/9066602/221560184-9de445d2-5142-490c-bb8c-a3582801e8b0.png)

https://github.com/Febase/febase4-3d-team1/pull/9

## 이벤트에 따라 키보드 애니메이션
`Document`에 이벤트를 발생시켜서 ThreeJS에서 그걸 읽으려고 했습니다.

```ts
export type ThreeEventType = {
  keyId?: string
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

```

덕분에 아래처럼 호출해서 쓸 수 있습니다.

```ts
document.addEventListener('keydown', (evt) => {
  const event = genCustomKeyEventFromCharacter(evt.key)
  document.dispatchEvent(event)
})
```

https://github.com/Febase/febase4-3d-team1/pull/6



## 키보드 입력 실행
`usePlayText` 훅을 만들어서 사용했습니다.
```ts
    const textArray = text.split('')
    const id = setInterval(() => {
      const keyId = textArray[index].toLowerCase()
      const event = new CustomEvent('threekeyboardevent', {
        detail: {
          keyId,
        },
      })
      document.dispatchEvent(event)
```

https://github.com/Febase/febase4-3d-team1/pull/8 


