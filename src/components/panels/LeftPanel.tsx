import styles from "./styles/LeftPanel.module.css";
import photo from "../../assets/photo.png";


const LeftPanel: React.FC = () => {

  return (
    <header className={`${styles.leftPanel} flex-1 overflow-y-auto text-center text-[3vw] xl:text-[1vw] h-screen text-black`}>
      <div className="flex flex-col items-center h-screen overflow-y-auto justify-center p-10">
        <img className="max-w-[40%] xl:max-w-[20%] rounded-t-full shadow-2xl" src={photo} title="First, solve the problem. Then, write the code." alt="Me"></img>
        <h1 className="mt-6">⌘ Hello i'm Ritchy</h1>
        <p>a Cloud Developer</p>
        <p className="mt-6">My certifications</p>
        <div className="flex justify-evenly w-full flex-wrap">
          <img className="w-[20%]" src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Associate_badge.3419559c682629072f1eb968d59dea0741772c0f.png" alt="Badge AWS Certified Solutions Architect - Associate" title="Badge AWS Certified Solutions Architect - Associate"></img>
          <img className="w-[20%]" src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Developer-Associate_badge.5c083fa855fe82c1cf2d0c8b883c265ec72a17c0.png" alt="AWS Certified Developer - Associate badge" title="Badge AWS Certified Developer - Associate"></img>
          <img className="w-[20%]" src="https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-SysOps-Administrator-Associate_badge.c3586b02748654fb588633314dd66a1d6841893b.png" alt="Badge pour AWS Certified SysOps Administrator - Associate" title="Badge AWS Certified SysOps - Associate"></img>
          <img className="w-[20%]" src="https://d1.awsstatic.com/certification/badges/AWS-Certified-Cloud-Practitioner_badge_150x150.17da917fbddc5383838d9f8209d2030c8d99f31e.png" alt="Badge AWS Certified Cloud Practitioner" title="Badge AWS Certified Cloud Practitioner"></img>
          <img className="w-[20%]" src="https://www.datocms-assets.com/2885/1645553469-hcta0-badge.png" alt="Badge HashiCorp Certified Terraform - Associate"></img>
        </div>
        <p className="mt-6">i'm currently learning</p>
        <div className="flex w-full justify-center">
          <img className="m-6 w-[10%]" src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="Typescript" title="Typescript"></img>
          <img className="m-6 w-[10%]" src="https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg" alt="Kubernetes" title="Kubernetes"></img>
        </div>
        <h2 className="mt-6">Let's work together...</h2>
        <a className="animate-bounce mt-6 text-yellow-600" href="https://www.linkedin.com/in/ritchyb/">How do you take your coffee?</a>
      </div>
    </header>
  );
}

export default LeftPanel;
