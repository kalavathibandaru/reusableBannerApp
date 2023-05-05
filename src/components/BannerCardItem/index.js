// Write your code here.
import './index.css'

const BannerCard = props => {
  const {Details} = props
  const {headerText, description, className} = Details

  return (
    <li className={className}>
      <h1 className="heading"> {headerText} </h1>
      <p className="paragraph"> {description} </p>
      <button className="button"> Show More </button>
    </li>
  )
}

export default BannerCard
