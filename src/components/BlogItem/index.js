// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="blog-item">
      <div className="blog-item-title-date-container">
        <h1 className="blog-item-title">{title}</h1>
        <p className="blog-item-published-date">{publishedDate}</p>
      </div>
      <p className="blog-item-description">{description}</p>
    </li>
  )
}

export default BlogItem
