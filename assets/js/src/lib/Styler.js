export default function Styler() {
  return [ ...arguments ].filter(argument => argument).join(' ');
}
