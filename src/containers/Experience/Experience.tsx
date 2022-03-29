import React, { FC } from "react";
import BlockTitleWithDescription from "../../components/BlockTitleWithDescription/BlockTitleWithDescription";
import { ExperienceStateType } from "../../types/state";
import "./Experience.scss";

type Props = {
  state: ExperienceStateType[];
  title: string;
  description: string;
};

const Experience: FC<Props> = ({ state, title, description }) => {
  return (
    <>
      <BlockTitleWithDescription title={title} description={description} />
      <div className="work-history">
        {state.map((job, i) => {
          return (
            <div className="work-history__single-job" key={i}>
              <div className="work-history__position-date">
                <span className="portfolio-text-medium">{job.position}</span>
                <div className="work-history__period">
                  <span>{job.period}</span>
                </div>
              </div>
              <div className="work-history__description">
                <p>{job.description}</p>
                {job.description2 && <p>{job.description2}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
