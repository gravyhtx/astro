import { useState, useEffect } from 'react';

{/* HOW TO USE //*/}

{/*
  const c1 = <h1>Hi</h1>;
  const c2 = <h1>MOM!</h1>;

  <LoadComponents preLoadComponent={c1} loadedComponent={c2} />

  Expected Output (Pre-Load):  Hi
  Expected Output (Pre-Load):  MOM!

*/}

export default function LoadComponents({ preLoadComponent, loadedComponent, interval, preLoadClasses, classes }) {

  // Set active 'component' to the 'preLoadComponent' before state updates. Sets an empty Fragment as default.
  const a = preLoadComponent || <></>;
  const b = loadedComponent || <></>;
  const [component, setComponent] = useState(a);

  // Set defaults.
  preLoadClasses = preLoadClasses ? ' '+preLoadClasses : '';
  classes = classes ? ' '+classes : '';

  useEffect(() => {
    // Update  'component' to the 'loadedComponent' when state updates.
    const updateComponent = async () => {
      try {
        // Set timeout delay if parameters are entered (correctly).
        if (typeof interval === 'number' && interval !== 0) {
          setTimeout(() => {setComponent(b)}, interval);
        } else if (interval === undefined || interval === 0) {
          setComponent(b);
        } else if (interval && interval !== "number") {
          console.error('Parameter "interval" must be a number or left blank.');
        } else {
          console.error('Yo. Check ur code, homie.');
        }
      } catch (err) {
        console.error(err);
      }
    };

    updateComponent();

  },[]);

  return (
    classes ?
    <div className={component === a ? 'preload-component'+preLoadClasses : classes}>
      {component}
    </div>
    : component
  )
}