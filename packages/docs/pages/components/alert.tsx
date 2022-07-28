import { CodeHighlight } from 'components/CodeHighlight';
import { ComponentDocumentation } from 'components/ComponentDocumentation';

const CODE = `
import { Alert } from '@bedrock-ui/core';

function Example() {
  return (
    <Alert severity="error">Example alert</Alert>
  );
}
`.trim();

function ComponentsAlert() {
  return (
    <ComponentDocumentation name="Alert">
      <CodeHighlight>{CODE}</CodeHighlight>
    </ComponentDocumentation>
  );
}

export default ComponentsAlert;
