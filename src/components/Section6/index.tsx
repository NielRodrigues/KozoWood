import React, { useEffect, useRef } from 'react'
import { ArticleLayout, Articles, Container } from './style'
import gsap, { Expo } from 'gsap';
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

function Section6({ SectionRef }: { SectionRef: React.RefObject<HTMLDivElement>}) {
  const TextRef = useRef<HTMLHeadingElement>(null)
  const ArticlesRef = useRef<HTMLDivElement>(null)
  const Article1Ref = useRef<HTMLDivElement>(null)
  const Article2Ref = useRef<HTMLDivElement>(null)
  const Article3Ref = useRef<HTMLDivElement>(null)
  const Article4Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(TextRef.current, {
      opacity: 0.1,
      y: '30'
    }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
          trigger: TextRef.current,
          start: "0% 90%",
          end: "250% 90%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: false,
      }, 
    })

    gsap.fromTo(Article2Ref.current, {
      opacity: 1,
      y: '150',
      transform: 'scale(90%)',
    }, {
      opacity: 1,
      y: 0,
      transform: 'scale(100%)',
      scrollTrigger: {
          trigger: ArticlesRef.current,
          start: "-20% 80%",
          end: "70% 80%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: false,
      }, 
    })

    gsap.fromTo(Article3Ref.current, {
      opacity: 1,
      y: '150',
      transform: 'scale(90%)',
    }, {
      opacity: 1,
      y: 0,
      transform: 'scale(100%)',
      scrollTrigger: {
          trigger: ArticlesRef.current,
          start: "-20% 80%",
          end: "70% 80%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: false,
      }, 
    })

    gsap.fromTo(Article1Ref.current, {
      opacity: 1,
      y: '200',
      transform: 'scale(90%)',
    }, {
      opacity: 1,
      y: 0,
      transform: 'scale(100%)',
      scrollTrigger: {
          trigger: ArticlesRef.current,
          start: "10% 80%",
          end: "90% 80%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: false,
      }, 
    })

    gsap.fromTo(Article4Ref.current, {
      opacity: 1,
      y: '200',
      transform: 'scale(90%)',
    }, {
      opacity: 1,
      y: 0,
      transform: 'scale(100%)',
      scrollTrigger: {
          trigger: ArticlesRef.current,
          start: "10% 80%",
          end: "90% 80%",
          scrub: true,
          toggleActions: "restart none none none",
          markers: false,
      }, 
    })
  }, [])

  return (
    <Container ref={SectionRef}>
      <h3 ref={TextRef}>More about us</h3>
      <Articles ref={ArticlesRef}>
        <ArticleLayout ref={Article1Ref}>
          <div style={{ height: '40vh' }} className="img">
            <img src="https://cdn.sanity.io/images/kdijhcxf/develop/40283a3f9cfd82d798644a194298b33fd5303649-1334x2000.jpg" alt="" />
            <div className="tag">
              <span>ARTICLE</span>
            </div>
          </div>
          <h3>Wood construction versus forest sustainability</h3>
          <span className="read">
            <svg data-v-4d231480="" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path data-v-4d231480="" d="M16.0628 20.8201C15.1832 20.8201 14.377 20.6107 13.644 20.1919C12.9319 19.773 12.3665 19.2076 11.9476 18.4955C11.5288 17.7625 11.3194 16.9563 11.3194 16.0767C11.3194 15.1971 11.5288 14.4013 11.9476 13.6893C12.3665 12.9563 12.9319 12.3804 13.644 11.9615C14.377 11.5427 15.1832 11.3333 16.0628 11.3333C16.9424 11.3333 17.7382 11.5427 18.4503 11.9615C19.1832 12.3804 19.7592 12.9563 20.178 13.6893C20.5969 14.4013 20.8063 15.1971 20.8063 16.0767C20.8063 16.9563 20.5969 17.7625 20.178 18.4955C19.7592 19.2076 19.1832 19.773 18.4503 20.1919C17.7382 20.6107 16.9424 20.8201 16.0628 20.8201ZM7.98953 24.9353L7.20419 24.15L11.2251 20.0976L12.0105 20.883L7.98953 24.9353ZM12.0105 27.3541L10.9738 26.9143L13.1414 21.6369L14.178 22.0767L12.0105 27.3541ZM5.22513 21.1657L4.78534 20.1604L10.0628 17.9301L10.4712 18.9667L5.22513 21.1657ZM4 16.5793V15.5741H9.81152V16.5793H4ZM15.4974 28.0452V22.328H16.6283V28.0452H15.4974ZM10.0628 14.2233L4.78534 11.9929L5.22513 10.9877L10.4712 13.1866L10.0628 14.2233ZM20.1152 27.3541L17.9476 22.0767L18.9843 21.6369L21.1518 26.9143L20.1152 27.3541ZM24.1361 24.9353L20.1152 20.883L20.9005 20.0976L24.9215 24.15L24.1361 24.9353ZM16.0942 18.9667C16.6387 18.9667 17.1309 18.8411 17.5707 18.5898C18.0105 18.3385 18.356 17.9929 18.6073 17.5531C18.8586 17.0924 18.9843 16.5898 18.9843 16.0453C18.9843 15.2285 18.7016 14.5479 18.1361 14.0034C17.5916 13.438 16.911 13.1552 16.0942 13.1552C15.5497 13.1552 15.0471 13.2809 14.5864 13.5322C14.1466 13.7835 13.801 14.1291 13.5497 14.5688C13.2984 15.0086 13.1728 15.5008 13.1728 16.0453C13.1728 16.883 13.445 17.5845 13.9895 18.15C14.555 18.6945 15.2565 18.9667 16.0942 18.9667ZM11.2251 12.0558L7.20419 8.00343L7.98953 7.21809L12.0105 11.2704L11.2251 12.0558ZM26.9005 21.1657L21.6545 18.9667L22.0628 17.9301L27.3403 20.1604L26.9005 21.1657ZM13.1414 10.5165L10.9738 5.23904L12.0105 4.79925L14.178 10.0767L13.1414 10.5165ZM22.3141 16.5793V15.5741H28V16.5793H22.3141ZM15.4974 9.82541V4.10815H16.6283V9.82541H15.4974ZM18.9843 10.5165L17.9476 10.0767L20.1152 4.79925L21.1518 5.23904L18.9843 10.5165ZM22.0628 14.2233L21.6545 13.1866L26.9005 10.9877L27.3403 11.9929L22.0628 14.2233ZM20.9005 12.0558L20.1152 11.2704L24.1361 7.21809L24.9215 8.00343L20.9005 12.0558Z" fill="black"></path></svg>
            READ
          </span>
        </ArticleLayout>

        <ArticleLayout ref={Article2Ref}>
          <div style={{ height: '55vh' }} className="img">
            <img src="https://cdn.sanity.io/images/kdijhcxf/develop/ee862c96081762f35ccafb43efa41c07ac98cf44-802x1200.jpg" alt="" />
            <div className="tag">
              <span>ARTICLE</span>
            </div>
          </div>
          <h3>Seismic Performance of Wood Buildings</h3>
          <span className="read">
            <svg data-v-4d231480="" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path data-v-4d231480="" d="M16.0628 20.8201C15.1832 20.8201 14.377 20.6107 13.644 20.1919C12.9319 19.773 12.3665 19.2076 11.9476 18.4955C11.5288 17.7625 11.3194 16.9563 11.3194 16.0767C11.3194 15.1971 11.5288 14.4013 11.9476 13.6893C12.3665 12.9563 12.9319 12.3804 13.644 11.9615C14.377 11.5427 15.1832 11.3333 16.0628 11.3333C16.9424 11.3333 17.7382 11.5427 18.4503 11.9615C19.1832 12.3804 19.7592 12.9563 20.178 13.6893C20.5969 14.4013 20.8063 15.1971 20.8063 16.0767C20.8063 16.9563 20.5969 17.7625 20.178 18.4955C19.7592 19.2076 19.1832 19.773 18.4503 20.1919C17.7382 20.6107 16.9424 20.8201 16.0628 20.8201ZM7.98953 24.9353L7.20419 24.15L11.2251 20.0976L12.0105 20.883L7.98953 24.9353ZM12.0105 27.3541L10.9738 26.9143L13.1414 21.6369L14.178 22.0767L12.0105 27.3541ZM5.22513 21.1657L4.78534 20.1604L10.0628 17.9301L10.4712 18.9667L5.22513 21.1657ZM4 16.5793V15.5741H9.81152V16.5793H4ZM15.4974 28.0452V22.328H16.6283V28.0452H15.4974ZM10.0628 14.2233L4.78534 11.9929L5.22513 10.9877L10.4712 13.1866L10.0628 14.2233ZM20.1152 27.3541L17.9476 22.0767L18.9843 21.6369L21.1518 26.9143L20.1152 27.3541ZM24.1361 24.9353L20.1152 20.883L20.9005 20.0976L24.9215 24.15L24.1361 24.9353ZM16.0942 18.9667C16.6387 18.9667 17.1309 18.8411 17.5707 18.5898C18.0105 18.3385 18.356 17.9929 18.6073 17.5531C18.8586 17.0924 18.9843 16.5898 18.9843 16.0453C18.9843 15.2285 18.7016 14.5479 18.1361 14.0034C17.5916 13.438 16.911 13.1552 16.0942 13.1552C15.5497 13.1552 15.0471 13.2809 14.5864 13.5322C14.1466 13.7835 13.801 14.1291 13.5497 14.5688C13.2984 15.0086 13.1728 15.5008 13.1728 16.0453C13.1728 16.883 13.445 17.5845 13.9895 18.15C14.555 18.6945 15.2565 18.9667 16.0942 18.9667ZM11.2251 12.0558L7.20419 8.00343L7.98953 7.21809L12.0105 11.2704L11.2251 12.0558ZM26.9005 21.1657L21.6545 18.9667L22.0628 17.9301L27.3403 20.1604L26.9005 21.1657ZM13.1414 10.5165L10.9738 5.23904L12.0105 4.79925L14.178 10.0767L13.1414 10.5165ZM22.3141 16.5793V15.5741H28V16.5793H22.3141ZM15.4974 9.82541V4.10815H16.6283V9.82541H15.4974ZM18.9843 10.5165L17.9476 10.0767L20.1152 4.79925L21.1518 5.23904L18.9843 10.5165ZM22.0628 14.2233L21.6545 13.1866L26.9005 10.9877L27.3403 11.9929L22.0628 14.2233ZM20.9005 12.0558L20.1152 11.2704L24.1361 7.21809L24.9215 8.00343L20.9005 12.0558Z" fill="black"></path></svg>
            READ
          </span>
        </ArticleLayout>

        <ArticleLayout ref={Article3Ref}>
          <div style={{ height: '46vh' }} className="img">
            <img src="https://cdn.sanity.io/images/kdijhcxf/develop/b25b57eb8f1b0b5c0756278fb3501dc5a075a6d2-720x960.jpg?rect=45,0,630,960&w=320&h=488&q=100&auto=format" alt="" />
            <div className="tag">
              <span>ARTICLE</span>
            </div>
          </div>
          <h3>Residencial Property in Comporta</h3>
          <span className="read">
            <svg data-v-4d231480="" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path data-v-4d231480="" d="M16.0628 20.8201C15.1832 20.8201 14.377 20.6107 13.644 20.1919C12.9319 19.773 12.3665 19.2076 11.9476 18.4955C11.5288 17.7625 11.3194 16.9563 11.3194 16.0767C11.3194 15.1971 11.5288 14.4013 11.9476 13.6893C12.3665 12.9563 12.9319 12.3804 13.644 11.9615C14.377 11.5427 15.1832 11.3333 16.0628 11.3333C16.9424 11.3333 17.7382 11.5427 18.4503 11.9615C19.1832 12.3804 19.7592 12.9563 20.178 13.6893C20.5969 14.4013 20.8063 15.1971 20.8063 16.0767C20.8063 16.9563 20.5969 17.7625 20.178 18.4955C19.7592 19.2076 19.1832 19.773 18.4503 20.1919C17.7382 20.6107 16.9424 20.8201 16.0628 20.8201ZM7.98953 24.9353L7.20419 24.15L11.2251 20.0976L12.0105 20.883L7.98953 24.9353ZM12.0105 27.3541L10.9738 26.9143L13.1414 21.6369L14.178 22.0767L12.0105 27.3541ZM5.22513 21.1657L4.78534 20.1604L10.0628 17.9301L10.4712 18.9667L5.22513 21.1657ZM4 16.5793V15.5741H9.81152V16.5793H4ZM15.4974 28.0452V22.328H16.6283V28.0452H15.4974ZM10.0628 14.2233L4.78534 11.9929L5.22513 10.9877L10.4712 13.1866L10.0628 14.2233ZM20.1152 27.3541L17.9476 22.0767L18.9843 21.6369L21.1518 26.9143L20.1152 27.3541ZM24.1361 24.9353L20.1152 20.883L20.9005 20.0976L24.9215 24.15L24.1361 24.9353ZM16.0942 18.9667C16.6387 18.9667 17.1309 18.8411 17.5707 18.5898C18.0105 18.3385 18.356 17.9929 18.6073 17.5531C18.8586 17.0924 18.9843 16.5898 18.9843 16.0453C18.9843 15.2285 18.7016 14.5479 18.1361 14.0034C17.5916 13.438 16.911 13.1552 16.0942 13.1552C15.5497 13.1552 15.0471 13.2809 14.5864 13.5322C14.1466 13.7835 13.801 14.1291 13.5497 14.5688C13.2984 15.0086 13.1728 15.5008 13.1728 16.0453C13.1728 16.883 13.445 17.5845 13.9895 18.15C14.555 18.6945 15.2565 18.9667 16.0942 18.9667ZM11.2251 12.0558L7.20419 8.00343L7.98953 7.21809L12.0105 11.2704L11.2251 12.0558ZM26.9005 21.1657L21.6545 18.9667L22.0628 17.9301L27.3403 20.1604L26.9005 21.1657ZM13.1414 10.5165L10.9738 5.23904L12.0105 4.79925L14.178 10.0767L13.1414 10.5165ZM22.3141 16.5793V15.5741H28V16.5793H22.3141ZM15.4974 9.82541V4.10815H16.6283V9.82541H15.4974ZM18.9843 10.5165L17.9476 10.0767L20.1152 4.79925L21.1518 5.23904L18.9843 10.5165ZM22.0628 14.2233L21.6545 13.1866L26.9005 10.9877L27.3403 11.9929L22.0628 14.2233ZM20.9005 12.0558L20.1152 11.2704L24.1361 7.21809L24.9215 8.00343L20.9005 12.0558Z" fill="black"></path></svg>
            READ
          </span>
        </ArticleLayout>

        <ArticleLayout ref={Article4Ref}>
          <div style={{ height: '45vh' }} className="img">
            <img src="https://cdn.sanity.io/images/kdijhcxf/develop/71045f0d11d2e80aac7f190d307efc9c17b12e54-2000x3000.jpg?rect=0,188,2000,2625&w=320&h=420&q=100&auto=format" alt="" />
            <div className="tag">
              <span>ARTICLE</span>
            </div>
          </div>
          <h3>Wood construction versus forest sustainability</h3>

          <span className="read">
            <svg data-v-4d231480="" width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className=""><path data-v-4d231480="" d="M16.0628 20.8201C15.1832 20.8201 14.377 20.6107 13.644 20.1919C12.9319 19.773 12.3665 19.2076 11.9476 18.4955C11.5288 17.7625 11.3194 16.9563 11.3194 16.0767C11.3194 15.1971 11.5288 14.4013 11.9476 13.6893C12.3665 12.9563 12.9319 12.3804 13.644 11.9615C14.377 11.5427 15.1832 11.3333 16.0628 11.3333C16.9424 11.3333 17.7382 11.5427 18.4503 11.9615C19.1832 12.3804 19.7592 12.9563 20.178 13.6893C20.5969 14.4013 20.8063 15.1971 20.8063 16.0767C20.8063 16.9563 20.5969 17.7625 20.178 18.4955C19.7592 19.2076 19.1832 19.773 18.4503 20.1919C17.7382 20.6107 16.9424 20.8201 16.0628 20.8201ZM7.98953 24.9353L7.20419 24.15L11.2251 20.0976L12.0105 20.883L7.98953 24.9353ZM12.0105 27.3541L10.9738 26.9143L13.1414 21.6369L14.178 22.0767L12.0105 27.3541ZM5.22513 21.1657L4.78534 20.1604L10.0628 17.9301L10.4712 18.9667L5.22513 21.1657ZM4 16.5793V15.5741H9.81152V16.5793H4ZM15.4974 28.0452V22.328H16.6283V28.0452H15.4974ZM10.0628 14.2233L4.78534 11.9929L5.22513 10.9877L10.4712 13.1866L10.0628 14.2233ZM20.1152 27.3541L17.9476 22.0767L18.9843 21.6369L21.1518 26.9143L20.1152 27.3541ZM24.1361 24.9353L20.1152 20.883L20.9005 20.0976L24.9215 24.15L24.1361 24.9353ZM16.0942 18.9667C16.6387 18.9667 17.1309 18.8411 17.5707 18.5898C18.0105 18.3385 18.356 17.9929 18.6073 17.5531C18.8586 17.0924 18.9843 16.5898 18.9843 16.0453C18.9843 15.2285 18.7016 14.5479 18.1361 14.0034C17.5916 13.438 16.911 13.1552 16.0942 13.1552C15.5497 13.1552 15.0471 13.2809 14.5864 13.5322C14.1466 13.7835 13.801 14.1291 13.5497 14.5688C13.2984 15.0086 13.1728 15.5008 13.1728 16.0453C13.1728 16.883 13.445 17.5845 13.9895 18.15C14.555 18.6945 15.2565 18.9667 16.0942 18.9667ZM11.2251 12.0558L7.20419 8.00343L7.98953 7.21809L12.0105 11.2704L11.2251 12.0558ZM26.9005 21.1657L21.6545 18.9667L22.0628 17.9301L27.3403 20.1604L26.9005 21.1657ZM13.1414 10.5165L10.9738 5.23904L12.0105 4.79925L14.178 10.0767L13.1414 10.5165ZM22.3141 16.5793V15.5741H28V16.5793H22.3141ZM15.4974 9.82541V4.10815H16.6283V9.82541H15.4974ZM18.9843 10.5165L17.9476 10.0767L20.1152 4.79925L21.1518 5.23904L18.9843 10.5165ZM22.0628 14.2233L21.6545 13.1866L26.9005 10.9877L27.3403 11.9929L22.0628 14.2233ZM20.9005 12.0558L20.1152 11.2704L24.1361 7.21809L24.9215 8.00343L20.9005 12.0558Z" fill="black"></path></svg>
            READ
          </span>
        </ArticleLayout>
      </Articles>
    </Container>
  )
}

export default Section6