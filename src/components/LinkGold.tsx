import { Link } from "react-router-dom"
import linkStyle from "./linkGold.module.css"
import { ReactComponent as ArrowSvg } from "./../assets/images/main/arrowBlack.svg"
import { ReactNode } from "react"

const LinkComponent: React.FC<{
  to: string
  children: ReactNode
  style?: React.CSSProperties
}> = ({ to, style, children }) => {
  return (
    <Link to={to} className={linkStyle.inner} style={style}>
      {children}
      <ArrowSvg className={linkStyle.arrow} />
    </Link>
  )
}
export default LinkComponent
