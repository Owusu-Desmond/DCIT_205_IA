const Course = (props) => {
    const { title, description, imgSrc, link } = props;

    return (
        <div className="course-card">
            <div className="course-card-image">
                <img src={imgSrc} alt={title} />
            </div>
            <div className="course-card-content">
                <h4>{title}</h4>
                <p>{description}</p>
                <a href={link}>Read More</a>
            </div>
        </div>
    );
}

export default Course;
