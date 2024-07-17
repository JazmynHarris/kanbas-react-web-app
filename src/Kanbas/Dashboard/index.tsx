
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1234/Home">
                                <img src="/images/reactjs.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1234 React JS
                                    </h5>
                                    <p className="card-text">
                                        Full Stack software developer
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/1800/Home">
                                <img src="/images/discretestruct.png" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS1800 Discrete Structures
                                    </h5>
                                    <p className="card-text">
                                        Discrete Structures
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/2500/Home">
                                <img src="/images/fundies.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS2500 Fundamentals
                                    </h5>
                                    <p className="card-text">
                                        Fundamentals of Computer Science 1
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/2501/Home">
                                <img src="/images/fundieslab.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS2501 Lab Course
                                    </h5>
                                    <p className="card-text">
                                        Lab for CS2500
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/2540/Home">
                                <img src="/images/networks.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS2540 Fundamentals of Network
                                    </h5>
                                    <p className="card-text">
                                        Fundamentals of Networks
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/2150/Home">
                                <img src="/images/circuitsandsignals.jpg" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS2150 Circuits and Signals
                                    </h5>
                                    <p className="card-text">
                                        Circuits and Signals
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="wd-dashboard-course col" style={{ width: "260px" }}>
                        <div className="card">
                            <a className="wd-dashboard-course-link text-decoration-none text-dark"
                                href="#/Kanbas/Courses/3500/Home">
                                <img src="/images/ood.png" width="100%" />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        CS3500 OOD
                                    </h5>
                                    <p className="card-text">
                                        Object Oriented Design
                                    </p>
                                    <button className="btn btn-primary"> Go </button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}