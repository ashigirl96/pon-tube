import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { useSetReadyEvent } from '@/hooks/youtube_player/useSetReadyEvent'
// import dynamic from 'next/dynamic'
// const RecoilizeDebugger = dynamic(() => import('recoilize'), { ssr: false })
// const [root, setRoot] = useState<HTMLElement | null>(null)
// useEffect(() => {
//   if (typeof window.document !== 'undefined') {
//     setRoot(document.getElementById('__next'))
//   }
// }, [root])
{
  /*<RecoilizeDebugger root={root} />*/
}

function MyApp({ Component, pageProps, router }: AppProps) {
  const { readyEvent, setReadyEvent } = useSetReadyEvent()
  console.log(`readyEvent ${readyEvent}`)
  return (
    <RecoilRoot>
      <Component
        {...pageProps}
        readyEvent={readyEvent}
        setReadyEvent={setReadyEvent}
        router={router}
      />
    </RecoilRoot>
  )
}

export default MyApp
