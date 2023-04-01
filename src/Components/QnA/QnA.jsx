import React from 'react';

const QnA = () => {
    return (
      <div className="bg-violet-200 mx-auto p-3 m-5 ">
        <h2 className="font-medium">
          1.What is the difference between props and state?
        </h2>
        <p>
          props are passed via component properties, they're not reactive. State
          are variables that react will react , updating the UI when values
          changes.
        </p>
        <br />
        <h2 className="font-medium">2.How does react work?</h2>
        <p>
          ReactJS divides the UI into isolated reusable pieces of code known as
          components. React components work similarly to JavaScript functions as
          they accept arbitrary inputs called properties or props. It's possible
          to have as many components as necessary without cluttering your code.
        </p>{" "}
        <br />
        <h2 className="font-medium">3.How does usestate work?</h2>
        <p>
          useState is React Hook that allows you to add state to a functional
          component. It returns an array with two values: the current state and
          a function to update it. The Hook takes an initial state value as an
          argument and returns an updated state value whenever the setter
          function is called.
        </p>
        <br />
        <h2 className="font-medium">
          4. What is the use of useEffect other than loading data?
        </h2>
        <p>
          Validating an input while it's receiving characters is another great
          application for useEffect . Whilst the input is being stored in a
          state using useState , the validation takes place every time the input
          changes, giving immediate feedback to the user.
        </p>
      </div>
    );
};

export default QnA;