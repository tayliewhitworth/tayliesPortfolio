import React, { useState } from "react";
import "./components.css";

const courseCertificates = [
  {
    id: 1,
    name: "Building Interactive Websites",
    source: "CodeCademy",
    link: 'https://www.codecademy.com/profiles/tayliewhitworth/certificates/36ae898a1d1c8524815305b2d1d2ebab',
    color: "var(--orange-3)",
  },
  {
    id: 2,
    name: "Learn Python 3",
    source: "CodeCademy",
    link: 'https://www.codecademy.com/profiles/tayliewhitworth/certificates/6c152bd262967f8c941c9707ed636bda',
    color: 'var(--purple-3)'
  },
  {
    id: 3,
    name: "Learn React Native",
    source: "CodeCademy",
    link: 'https://www.codecademy.com/profiles/tayliewhitworth/certificates/458aef4eef5f5130685423fc15e6493d',
    color: 'var(--pink-3)'
  },
  {
    id: 4,
    name: "Learn JavaScript",
    source: "CodeCademy",
    link: 'https://www.codecademy.com/profiles/tayliewhitworth/certificates/705dcb15de0da4dd9d9fc4f3274b430e',
    color: 'var(--blue-3)'
  },
  {
    id: 5,
    name: "Learn SQL",
    source: "CodeCademy",
    link: 'https://www.codecademy.com/profiles/tayliewhitworth/certificates/042a4e5884e3eb6ea1f2a12be6abb851',
    color: 'var(--indigo-3)'
  },
  {
    id: 6,
    name: "Backend Development",
    source: "CodeCademy",
    link: 'https://www.codecademy.com/profiles/tayliewhitworth/certificates/a4bf0eb6e057427e88f1de8328545166',
    color: 'var(--green-3)'
  },
];


const Accomplishments = () => {
  const [hovered, setHovered] = useState(null)
  return (
    <div className="card-body">
      {courseCertificates.map((cert) => {
      
        return (
          <div key={cert.id} className="card"  style={{ outlineColor: cert.color}}>
            <div 
              className="card-background" 
              style={{
                backgroundColor: hovered === cert.id ? cert.color : 'transparent',
              }}
              onMouseEnter={() => setHovered(cert.id)}
              onMouseLeave={() => setHovered(null)}
              >
              <div>
                <p>0{cert.id}</p>
                <p>{cert.name}</p>
              </div>
              <p className="source">{cert.source} - <a className="source-link" href={cert.link} target='_blank'>Link</a></p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Accomplishments;
