import { instantiate } from "../libs/wasm/index.js";

async function init() {
  const response = await fetch("../build/release.wasm");
  const { exports } = await instantiate(await response.arrayBuffer());

  const ptr = exports.get3DText();
  const memory = new Uint8Array(exports.memory.buffer);
  let text = "";
  for (let i = ptr; memory[i] !== 0; i++) {
    text += String.fromCharCode(memory[i]);
  }

  const output = document.getElementById("output");
  output.textContent = text;
  output.classList.add("text-3d");
}

init();
