import React from "react";
import TeX from "@matejmazur/react-katex";
import { MDXProvider } from "@mdx-js/react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const components = {
  div: (props) => {
    if (props?.className?.includes("math-display")) {
      import("katex/dist/katex.min.css");
      return <TeX block math={props.children} />;
    }
    return <div {...props} />;
  },
  span: (props) => {
    if (props?.className?.includes("math-inline")) {
      import("katex/dist/katex.min.css");
      return <TeX math={props.children} />;
    }
    return <span {...props} />;
  },
};

export default function Layout({ children }) {
  return (
    <div style={pageStyles}>
      <MDXProvider components={components}>{children}</MDXProvider>
    </div>
  );
}
