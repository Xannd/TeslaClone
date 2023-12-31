import { Children, ReactNode, useEffect, useRef } from "react";
import useModel from "../useModel";

import { Container } from "./styles";

// EXTENDS OS ATRIBUTOS DE UMA DIV
interface ModelSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode;
}

function ModelSection({
  modelName,
  overlayNode,
  children,
  ...props
}: ModelSectionProps) {
  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    if (sectionRef.current) {
      registerModel({modelName,overlayNode,sectionRef,})
    }

  }, [modelName, overlayNode, registerModel]);

  return (
    <Container ref={sectionRef} {...props}>
      {children}
    </Container>
  );
}

export default ModelSection;
