// import { name } from "./bases/01-types";
import { pokemon } from "./bases/02-objects";
// import { charmander } from "./bases/05-decorators";
import { charmander } from "./bases/06-decorators2";
// import { charmander } from "./bases/04-injection";

import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    ${pokemon.name}
    ${charmander.name}
  </div>
`;
