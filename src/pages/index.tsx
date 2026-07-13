import type {ReactNode} from 'react';
import {Redirect} from '@docusaurus/router';

// The marketing landing (letic.ia) is built separately. This site serves the
// documentation, so the root redirects straight into the docs.
export default function Home(): ReactNode {
  return <Redirect to="/docs/intro" />;
}
