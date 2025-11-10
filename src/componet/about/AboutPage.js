'use client';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styles from './AboutPage.module.css';
import Image from 'next/image';
import Ankush from '../../../public/ankush_rathod.png';
import Rohan from '../../../public/PravinLogo_5.png';
import Tanshri from '../../../public/PravinLogo_5.png';
export default function AboutPage() {
  const skills = [
    { name: "HTML", value: 95, color: "#3b82f6" },
    { name: "Java", value: 80, color: "#ec4899" },
    { name: "mySql", value: 91, color: "#10b981" },//css
    { name: "JavaScript", value: 65, color: "#f97316" },
    // { name: "Next.js", value: 91, color: "#f207f6ff" },
    // { name: "node.js", value: 40, color: "#b98310ff" },
  ];

  return (
    <div className={styles.aboutSection}>
      <section className={styles.skillsSection}>
        <h4 className={styles.sectionSubtitle}>My Skills</h4>
        <h2 className={styles.sectionTitle}>My Strong Skills</h2>
        <div className={styles.skillBoxes}>
          {skills.map((skill) => (
            <div className={styles.skillBox} key={skill.name}>
              <div className={styles.circleWrapper}>
                <CircularProgressbar
                  value={skill.value}
                  className={styles.circle}
                  text={`${skill.value}%`}
                  styles={buildStyles({
                    textColor: "#374151",
                    backgroundColor: "red",
                    pathColor: skill.color,
                    trailColor: "#e5e7eb",
                  })}
                />
              </div>
              <div className={styles.skillName}>{skill.name}</div>
            </div>
          ))}
        </div>

        <div className={styles.bars}>
          {[
            { name: 'HTML 5', value: 95 },
            { name: 'java', value: 80 },
            { name: 'My SQL', value: 87 },
            { name: 'CSS 3', value: 91 },
            { name: 'Java Script', value: 65 },
            { name: 'Next.js', value: 80 },
            { name: 'React.js', value: 50 },
            { name: 'Node.js', value: 75 },
            { name: 'springBoot', value: 80 },
            { name: 'API integration', value: 65 },
          ].map((skill) => (
            <div key={skill.name} className={styles.barContainer}>
              <span className={styles.label}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillValue}>{skill.value}%</span>
              </span>
              <div className={styles.bar}>
                <div
                  className={styles.fill}
                  style={{ width: `${skill.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <h4 className={styles.sectionSubtitle}>Testimonial</h4>
        <h2 className={styles.sectionTitle}>
          Some Positive Feedback That Encourage Me
        </h2>

        <div className={styles.testimonialCards}>
          {[
            {
              name: 'Mr Rohan Bhandopia',
              title: 'Cybersecurity Analyst',
              img: Rohan,
              discription: 'Pravin’s innovative mindset and strong problem-solving skills make him stand out. His dedication towards secure and efficient solutions reflects in every project he takes on',
            },
            {
              name: 'Mr Ankush Rathod',
              title: 'Java Developer',
              img: Ankush,
              discription: 'Pravin’s attention to detail and commitment to quality is exceptional. His work reflects precision, reliability, and a passion for delivering the best user experience.',
            },
            {
              name: 'Tanshri Wanjari',
              title: 'Software Tester',
              img: Tanshri,
              discription: 'Working with Pravin has been an inspiring experience. His deep technical knowledge, combined with creativity, ensures the development of robust and scalable applications.'
            },
          ].map((user) => (
            <div className={styles.card} key={user.name}>
              <Image
                src={user.img}
                width={60}
                height={60}
                alt={user.name}
                className={styles.avatar}
              />
              <h4 style={{color:'#0f034f55', fontSize:'900'}}>{user.name}</h4>
              <p className={styles.title}>{user.title}</p>
              <p className={styles.description}>
                {user.discription}
              </p>
              <span className={styles.quote}>❝</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
