import "./FlipBox.css"

function FlipBox({ title, content, img, bgColor, offset, fontcolor }) {
  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        color: `${fontcolor}`,
      }}
      className={`col-6 col-md-2  offset-md-${offset} small-box flip-card`}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front d-flex justify-content-around align-items-center">
          <h2
            style={{
              color: `${fontcolor}`,
            }}
          >
            {title}
          </h2>
        </div>
        <div className="flip-card-back d-flex justify-content-center align-items-center flex-column">
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}

export default FlipBox
