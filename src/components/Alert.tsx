import type { ReactNode } from "react";

interface Props {
    // Declare as reactnode instead of str since we want to use html syntax in the msg (span)
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">{children}
    <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert