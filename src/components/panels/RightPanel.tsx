import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokaiSublime } from "react-syntax-highlighter/dist/esm/styles/hljs";


const RightPanel: React.FC = () => {
	const pythonCode = `from typing import Dict, List

class Dev:
	def __init__(self):
		self.name: str = "Ritchy B."
		self.job: str = "Cloud Developer"
		self.email: str = "contact@portefine.fr"
		self.location: str = "Paris - France"

		self.experiences: Dict[str, Any] = {
			"2023": {
				"role": "Cloud Consultant @ Devoteam Revolve",
				"client": "Veolia Water Technologies"
			},
			# Reverse osmosis Data distribution management,
			# Infrastructure Optimization and Management on AWS, Python.
			"2021-2023": "CloudOps @ Jabmo",
			# IP-based Identification,
			# Backend development, API creation, Infrastructure Management on AWS, Python & React Admin.
			"2018-2021": "CloudOps @ Lineup 7"
			# Optimize client prospecting solutions,
			# Backend development, CI/CD pipeline implementation, Python & JavaScript.
		}

		self.studies: Dict[str, str] = {
			"2017": "3W Academy",
			"2016": "Self-taught",
			"2015": "42"
		}

		self.realisations: List[str] = []

		self.coding_knowledge: List[str] = [
			"Amazon Web Services",
			"Python",
			"Git",
			"Terraform",
			"Event-driven Architecture",
			"SOLID design principles",
			"Javascript",
			"SQL"
		]
		self.coding_framework: List[str] = ["Django", "Flask", "FastAPI", "Pygame"]

		self.softwares: List[str] = ["VSCode", "Unix", "Linux", "MacOS"]

		self.links: Dict[str, str] = {
			"website": "seriously ? you are already there.",
			"github": "github.com/0x726974636879",
			"linkedin": "linkedin.com/in/ritchyb",
			"freelance": "malt.fr/ritchyblezin"
		}
`;

  return (
    <section className="flex flex-2 justify-center items-center min-w-[50vw]">
			<SyntaxHighlighter
				style={monokaiSublime}
				showLineNumbers
				language="python"
				wrapLines
				className="overflow-x-auto break-words text-[0.8em] max-h-[100vh]"
			>
				{pythonCode}
			</SyntaxHighlighter>
    </section>
  );
}

export default RightPanel;
