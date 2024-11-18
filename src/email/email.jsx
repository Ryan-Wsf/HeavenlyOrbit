import { Html, Button } from "@react-email/components";

const Email = () => {
  return (
    <Html lang="en" dir="ltr">
      <Button href="https://example.com" style={{ color: "#61dafb" }}>
        Click me
      </Button>
    </Html>
  );
};

export default Email;