'use client';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styles from './AboutPage.module.css';
import Image from 'next/image';

export default function AboutPage() {
  const skills = [
    { name: "HTML", value: 95, color: "#3b82f6" },
    { name: "PHP", value: 90, color: "#ec4899" },
    { name: "CSS", value: 91, color: "#10b981" },
    { name: "JavaScript", value: 65, color: "#f97316" },
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
            { name: 'PHP', value: 90 },
            { name: 'My SQL', value: 87 },
            { name: 'CSS 3', value: 91 },
            { name: 'Java Script', value: 65 },
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
              img: '/user1.png',
            },
            {
              name: 'Mr Ankush Rathod',
              title: 'Java Developer',
              img: '/ankush_rathod.png',
            },
            {
              name: 'Tanshri Wanjari',
              title: 'Software Tester',
              img: '/user3.png',
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sollicitudin malesuada nisi, a varius sem.
              </p>
              <span className={styles.quote}>❝</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
