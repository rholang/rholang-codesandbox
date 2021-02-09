import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Test from "./html";

const App = () => {
  useEffect(() => {
    Test();
  }, []);

  return (
    <Container maxWidth="sm">
      <div>
        <h1>Rholang dApps</h1>

        <p>
          Build your own dApp{" "}
          <span role="img" aria-label="sheep">
            ▶️
          </span>{" "}
          This is a template for evaluation rholang code and see the result. You
          can use testnet or the real mainnet for your contract. This integrates
          also metamask for signing of your transaction.
        </p>

        <h3>How to use it</h3>
        <ul style={{ padding: "0 0 20px 0" }}>
          <li>
            write rholang code under template:` in the rholang/rho.js folder{" "}
          </li>
          <li>
            you can also define variables witch the fields: in rholang/rho.js,
            which are then inserted from the ui into your rholang code
          </li>
          <li>select the action in the ui</li>
          <li>
            select main (rev costs) or testnet (free to use for testing
            purposes)
          </li>
          <li>
            click Explore if your code is only reading something from the
            network
          </li>
          <li>
            click Deploy if your code should manipulate some state on the
            network
          </li>
          <li>
            change the name of the codesandbox template, so that everybody can
            search for your code
          </li>
        </ul>
        <form>
          <fieldset>
            <div style={{ margin: "20px 0 20px 0" }} id="actionControl">
              <label>
                Action:
                <select name="action">
                  <option>Check Registration</option>
                </select>
              </label>

              <textarea id="rholang-term" cols="80" rows="16"></textarea>
            </div>
            <div style={{ margin: "20px 0 20px 0" }} id="netControl">
              <select defaultValue="testnet">
                <option name="network" value="mainnet">
                  mainnet
                </option>
                <option name="network" value="testnet">
                  testnet
                </option>
                <option name="network" value="localhost">
                  localhost
                </option>
              </select>
            </div>
            <div id="runControl">
              <button id="run">Run</button>
              <section id="resultSection">
                <h2>Result</h2>
                <pre id="result"></pre>
                <h2>Block Info</h2>
                <small>
                  <pre id="blockInfo"></pre>
                </small>
              </section>
              <section id="problemSection">
                <h3>Problem</h3>
                <pre id="problem"></pre>
              </section>
            </div>
          </fieldset>
        </form>
        <div id="groupControl">
          <h3>Members...</h3>
        </div>
      </div>
    </Container>
  );
};

export default App;
