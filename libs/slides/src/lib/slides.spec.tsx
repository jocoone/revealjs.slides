import { render } from "@testing-library/react";

import Slides from "./slides";

describe("Slides", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Slides />);
    expect(baseElement).toBeTruthy();
  });
});
