import React from 'react';
import styles from './styles/LeftPanel.module.css';

const LeftPanel: React.FC = () => {
  return (
    <section className="flex-1 flex flex-col items-center justify-center w-1/2">
      <div>
        <h1>Hello i'm Ritchy</h1>
        <p>a developer</p>
        <p>i'm currently learning</p>
        <div className="learning-icon"></div>
        <p>My certifications</p>
        <div className={`${styles.certifications} flex`}>
          <img src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png" alt="Badge AWS Certified Solutions Architect - Associate" title="Badge AWS Certified Solutions Architect - Associate"></img>
          <img src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8b883c265ec72a17c0.png" alt="AWS Certified Developer - Associate badge" title="Badge AWS Certified Developer - Associate"></img>
          <img src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-SysOps-Administrator-Associate_badge.c3586b02748654fb588633314dd66a1d6841893b.png" alt="Badge pour AWS Certified SysOps Administrator - Associate" title="Badge AWS Certified SysOps - Associate"></img>
          <img src="https://d1.awsstatic.com/certification/badges/AWS-Certified-Cloud-Practitioner_badge_150x150.17da917fbddc5383838d9f8209d2030c8d99f31e.png" alt="Badge AWS Certified Cloud Practitioner" title="Badge AWS Certified Cloud Practitioner"></img>
          <img src="https://www.datocms-assets.com/2885/1645553469-hcta0-badge.png" alt="Badge HashiCorp Certified Terraform - Associate"></img>
        </div>
        <h2>Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
    </section>
  );
}

export default LeftPanel;
