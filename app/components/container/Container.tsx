'use client';
import { IPropsContainer } from "./IProps.interface";

const Container: React.FC<IPropsContainer> = ({ children }) => {
  return (
    <div className="max-w-[1660px] mx-auto">
      {children}
    </div>
  )
}

export default Container