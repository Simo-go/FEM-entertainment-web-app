import { TailSpin } from "react-loader-spinner";

function ButtonLoader({ className }) {
  return (
    <TailSpin visible={true} height="20" width="20" ariaLabel="tail-spin-loading" radius="2" wrapperClass={className} strokeWidth={4} />
  );
}

export default ButtonLoader;
