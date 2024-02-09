import React, { useEffect, useState } from 'react';
import styles from './styles/LeftPanel.module.css';
import photo from '../../assets/photo.png';

const LeftPanel: React.FC = () => {
  const colors = ['#ffffff', '#0a0a0a', '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#9b59b6', '#34495e', '#7A0707'];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const backgroundColor = colors[colorIndex];

  return (
    <section
      className={`${styles.leftPanel} flex-1 flex flex-col items-center`}
      style={{ backgroundColor }}
    >
      <div className="flex-1 flex flex-col items-center justify-center">
        <img className="max-w-[60%]" src={photo} title="First, solve the problem. Then, write the code."></img>
        <h1 className="text-[2rem]">Hello i'm Ritchy</h1>
        <p>a developer</p>
        <p className="mt-6 text-[2rem]">i'm currently learning</p>
        <div className={`${styles.learningIcon} flex w-full justify-evenly`}>
          <img className="m-6" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript" title="Typescript"></img>
          <img className="m-6" src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" title="Kubernetes"></img>
        </div>
        <p>My certifications</p>
        <div className={`${styles.certifications} flex justify-evenly w-full`}>
          <img src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png" alt="Badge AWS Certified Solutions Architect - Associate" title="Badge AWS Certified Solutions Architect - Associate"></img>
          <img src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8b883c265ec72a17c0.png" alt="AWS Certified Developer - Associate badge" title="Badge AWS Certified Developer - Associate"></img>
          <img src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-SysOps-Administrator-Associate_badge.c3586b02748654fb588633314dd66a1d6841893b.png" alt="Badge pour AWS Certified SysOps Administrator - Associate" title="Badge AWS Certified SysOps - Associate"></img>
          <img src="https://d1.awsstatic.com/certification/badges/AWS-Certified-Cloud-Practitioner_badge_150x150.17da917fbddc5383838d9f8209d2030c8d99f31e.png" alt="Badge AWS Certified Cloud Practitioner" title="Badge AWS Certified Cloud Practitioner"></img>
          <img src="https://www.datocms-assets.com/2885/1645553469-hcta0-badge.png" alt="Badge HashiCorp Certified Terraform - Associate"></img>
        </div>
        <h2 className="text-[2rem]">Let's work together...</h2>
        <a href="">How do you take your coffee?</a>
      </div>

    </section>
  );
}

export default LeftPanel;
