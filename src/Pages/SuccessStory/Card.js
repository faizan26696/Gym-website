import React from "react";
import Styles from "./Card.module.css";
import { FiPlay } from "react-icons/fi";
import mary from "../../component/images/img1.png";
import Background from "../../component/backround/Background";
import success from "../../component/images/succes.jpg";
import { useRecoilValue } from "recoil";
import { isRefresh } from "../../Recoil";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function Card() {
  const nav = useNavigate();
  const Login = useRecoilValue(isRefresh);

  useEffect(() => {
    if (!Login) {
      nav("/");
    }
  });

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
      id: "2",

      before: "Before",
      after: "After",
      name: "Marry",
      description: "lost 31 lbs.* & 55 lbs.*",
      story: "Marry's story",
    },
    {
      id: "3",
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
  ];
  return (
    <>
      <Background
        url={success}
        heading="Success Story"
        desc="Stories From Ours Members You can be also One of them."
      />
      <div className={Styles.main}>
        <div className={Styles.content}>
          <h1>REAL PEOPLE . REAL SUCCESS STORY</h1>
          <p className={Styles.para}>
            Powered by a transformative bussiness model,propretary
            technology,tried and tested methodology,and tested methodology ,and
            some of the best fitness industry brains in the world .we,ve
            rewritten the rules and changed the game
          </p>
        </div>
        <div className={Styles.mainBody}>
          {Data.map((item) => {
            return (
              <div key={item} className={Styles.container}>
                <div className={Styles.image}>
                  <img src={mary} alt="mary" />
                  <div className={Styles.button}>
                    <div className={Styles.before}>{item.before}</div>
                    <div className={Styles.after}>{item.after}</div>
                  </div>
                  <div className={Styles.desc}>
                    <div className={Styles.card_title}>
                      <h3>{item.name}</h3>
                      <div className={Styles.description}>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                  <button className={Styles.story}>
                    {item.story}
                    <span>
                      <FiPlay />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
