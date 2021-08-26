import React from "react";
import UniversalComponent from "../UniversalComponent";

export default function App() {
  return (
    <div style={styles.container}>
      <p style={styles.text}>This is a Next.js web page.</p>
      <UniversalComponent />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginBottom: 16,
    fontSize: 16,
  },
};
