import type React from "react"
import { JobItem } from "../JobItem/JobItem"
import type { Job } from "../../types/Job"
import { SliderContainer, SliderContent } from "./styles"


interface JobSliderProps {
  jobs: Job[]
}

export const JobSlider: React.FC<JobSliderProps> = ({ jobs }) => {
  return (
    <SliderContainer>
      <SliderContent>
        {jobs.map((job) => (
          <JobItem key={job.id} job={job} />
        ))}
      </SliderContent>
    </SliderContainer>
  )
}


