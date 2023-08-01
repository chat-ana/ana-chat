import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [dom_v, dom_s] = useState<boolean>(false);
  let message = useRef<HTMLInputElement>(null);
  useEffect( () => {
    document.addEventListener("mousemove", (e) => {
      dom_s(e.offsetX <= 15)
    })
  })
  return (
    <div id="main">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0" />

      <nav className={String(dom_v)}>
        <ServerBtn url="logo.svg" select={true}/>
        
        <hr/>
        <ServerBtn url="/server/ea.png"/>
        <ServerBtn url="/server/ea.png"/>
        <ServerBtn url="/server/ea.png"/>
        <ServerBtn url="/server/ea.png"/>
        <ServerBtn url="/server/ea.png"/>
      </nav>

      <main>
        <section>메세지4</section>
        <section>메세지3</section>
        <section>메세지2</section>
        <section>메세지1</section>
      </main>
        
<form id='messageSender' onSubmit={e => {e.preventDefault}}>
    <input type="text" ref={message} placeholder='메세지를 입력해주세요' />
    <img src="icon/send_w.svg" onClick={() => {
      if (message.current?.value){
        console.log(message.current?.value)
      }
    }}/>
</form>
    </div>
  )
}

function ServerBtn(props: {url: string, select?: boolean}){
  // console.log(props.select)
  return (
    <a className={`serverBtn ${props.select}`}>
      <img src={props.url}/>
    </a>
  )
}