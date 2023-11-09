import Course from "./course";

const CourseList = ({ courses }) => {
    return (
        <>
            <div className="row">
                {
                    courses.map((course) => (
                        <div key={course.id} className="col-3">
                            <Course {...course} />
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default CourseList;