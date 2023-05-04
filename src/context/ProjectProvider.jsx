import React, { createContext, useEffect, useState } from "react";

import { projectData } from "../data";

export const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState(projectData)

    return (
        <ProjectContext.Provider value={{ projects }}>
            {children}
        </ProjectContext.Provider>
    )
};

export default ProjectProvider