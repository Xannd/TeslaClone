import DefaultOverlayContent from "../DefaultOverlayContent";
import { ModelsWrapper, ModelSection } from "../Model";
import UniqueOverlay from "../UniqueOverlay";
import { Container, Spacer } from "./styles";

function Page() {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Name Example1",
            "Name Example2",
            "Name Example3",
            "Name Example4",
            "Name Example5",
            "Name Example6",
            "Text example",
          ].map( modelName => (
            <ModelSection
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Tesla Model"
                />
              }
            />
          ))}
        </div>
        <Spacer/>
        <UniqueOverlay/>
      </ModelsWrapper>
    </Container>
  );
}

export default Page;
