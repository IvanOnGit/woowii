import type React from "react"
import type { Job } from "../../types/Job"
import { JobDescription, JobItemContainer, JobLocation, JobMode, JobTime, JobTimeContainer, JobTitle } from "./styles"

interface JobItemProps {
  job: Job
}

export const JobItem: React.FC<JobItemProps> = ({ job }) => {
  return (
    <JobItemContainer>
      <JobTitle>{job.oferta}</JobTitle>
      <JobLocation>
        {job.lugar}/{job.pais}
      </JobLocation>
      <JobMode>{job.modo}</JobMode>
      <JobDescription>{job.descripcion}</JobDescription>
      <JobTimeContainer>
        <JobTime>{job.tiempò}</JobTime>
      </JobTimeContainer>
    </JobItemContainer>
  )
}


