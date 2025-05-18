
import type React from "react"
import { useRef } from "react"
import { EmpleoItem } from "../EmpleoItem/EmpleoItem"
import { Scrollbar, ScrollbarContainer, SliderContainer, SliderContent } from "./styles"
import { Empleo } from "../../types/empleo"

interface EmpleoSliderProps {
  empleos: Empleo[]
}

export const EmpleoSlider: React.FC<EmpleoSliderProps> = ({ empleos }) => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const scrollbarRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleScroll = () => {
    if (!sliderRef.current || !scrollbarRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    const scrollPercentage = (scrollLeft / (scrollWidth - clientWidth)) * 100
    const scrollbarWidth = (clientWidth / scrollWidth) * 100

    scrollbarRef.current.style.width = `${scrollbarWidth}%`
    scrollbarRef.current.style.left = `${(scrollPercentage * (100 - scrollbarWidth)) / 100}%`
  }

  const handleScrollbarMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    isDragging.current = true

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !sliderRef.current || !scrollbarRef.current) return

      const sliderRect = sliderRef.current.getBoundingClientRect()
      const scrollbarRect = scrollbarRef.current.getBoundingClientRect()

      const scrollbarContainerWidth = sliderRect.width
      const scrollbarWidth = scrollbarRect.width

      const maxScrollbarPosition = scrollbarContainerWidth - scrollbarWidth
      const relativeX = e.clientX - sliderRect.left

      let newPosition = relativeX - scrollbarWidth / 2
      newPosition = Math.max(0, Math.min(newPosition, maxScrollbarPosition))

      const scrollPercentage = newPosition / maxScrollbarPosition
      const newScrollLeft = scrollPercentage * (sliderRef.current.scrollWidth - sliderRef.current.clientWidth)

      sliderRef.current.scrollLeft = newScrollLeft
    }

    const handleMouseUp = () => {
      isDragging.current = false
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <SliderContainer>
      <SliderContent ref={sliderRef} onScroll={handleScroll}>
        {empleos.map((empleo) => (
          <EmpleoItem key={empleo.id} empleo={empleo} />
        ))}
      </SliderContent>
      <ScrollbarContainer>
        <Scrollbar ref={scrollbarRef} width={30} position={0} onMouseDown={handleScrollbarMouseDown} />
      </ScrollbarContainer>
    </SliderContainer>
  )
}
