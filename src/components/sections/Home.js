import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Header from '../elements/Header'
import Jumbotron from '../elements/Jumbotron'
import ScrollIndicator from '../elements/ScrollIndicator'

const StyledHome = styled.section`
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`

const Home = () => {
  const homeRef = useRef()
  const headerStyles = useObserver(homeRef)
  return (
    <StyledHome ref={homeRef}>
      <Header headerStyles={headerStyles} />
      <Jumbotron />
      <ScrollIndicator />
    </StyledHome>
  )
}

// when the scrollY position reaches the and of the Home section we wan't the header to be positioned fixed, so we animete to the view
const useObserver = ref => {
  const [headerStyles, setHeaderStyles] = useState('')
  useEffect(() => {
    let options = {
      rootMargin: '-170px',
    }
    // IntersectionObserver to watch the Home section if it is Intersecting with the viewport and we act accordingly
    let observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          setHeaderStyles('fixed')
          setTimeout(() => {
            setHeaderStyles('fixed fadein')
          }, 50)
        } else {
          setHeaderStyles('')
        }
      })
    }, options)
    observer.observe(ref.current)
    return () => observer.unobserve(ref.current)
  }, [])
  return headerStyles
}

export default Home
