import React from "react";
import { FiPlay } from "react-icons/fi";
import mary from "../../../component/images/img1.png";
import cli from "./client.module.css";
import {Link} from 'react-router-dom'

export default function Clientstories() {
  const Data = [
    {
      id: "1",
      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
    {
      id: "1",
      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
    {
      id: "1",
      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
    {
      id: "1",

      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
    {
      id: "1",
      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
    {
      id: "1",
      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
    {
      id: "1",
      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
    {
      id: "1",
      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    }
  ];
  return (
    <div className={cli.maincontainer}> 
      <div className={cli.stories}>
        <h1>Our Client success stories</h1>
        <p>What others think of our service</p>
      </div>
      <div className={cli.mainBody}>
        {Data.map((item,index) => {
          return (
            <div key={index} className={cli.container}>
              <div className={cli.image}>
                <img src={mary} alt="mary" />
                <div className={cli.button}>
                  <div className={cli.before}>{item.before}</div>
                  <div className={cli.after}>{item.after}</div>
                </div>
                <div className={cli.desc}>
                  <div className={cli.card_title}>
                    <h3>{item.name}</h3>
                    <div className={cli.description}>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
                <Link to='/success'> <button className={cli.story}>
                  {item.story}
                  <span>
                    <FiPlay />
                  </span>
                </button></Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
