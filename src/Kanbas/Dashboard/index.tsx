
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <img src="/images/reactjs.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1234/Home">
                            CS1234 React JS
                        </a>
                        <p className="wd-dashboard-course-title">
                            Full Stack software developer
                        </p>
                        <a href="#/Kanbas/Courses/1234/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/discretestruct.png" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/1800/Home">
                            CS1800 Discrete Structures
                        </a>
                        <p className="wd-dashboard-course-title">
                            Discrete Structures
                        </p>
                        <a href="#/Kanbas/Courses/1800/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/fundies.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/2500/Home">
                            CS2500 Fundamentals
                        </a>
                        <p className="wd-dashboard-course-title">
                            Fundamentals of Computer Science 1
                        </p>
                        <a href="#/Kanbas/Courses/2500/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/fundieslab.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/2501/Home">
                            CS2501 Lab Course
                        </a>
                        <p className="wd-dashboard-course-title">
                            Lab for CS2500
                        </p>
                        <a href="#/Kanbas/Courses/2501/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/networks.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/2540/Home">
                            CS2540 Fundamentals of Network
                        </a>
                        <p className="wd-dashboard-course-title">
                            Fundamentals of Networks
                        </p>
                        <a href="#/Kanbas/Courses/2540/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course"> 
                    <img src="/images/circuitsandsignals.jpg" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/2150/Home">
                            CS2150 Circuits and Signals
                        </a>
                        <p className="wd-dashboard-course-title">
                            Circuits and Signals
                        </p>
                        <a href="#/Kanbas/Courses/2150/Home"> Go </a>
                    </div>
                </div>
                <div className="wd-dashboard-course">
                    <img src="/images/ood.png" width={200} />
                    <div>
                        <a className="wd-dashboard-course-link"
                            href="#/Kanbas/Courses/3500/Home">
                            CS3500 OOD
                        </a>
                        <p className="wd-dashboard-course-title">
                            Object Oriented Design
                        </p>
                        <a href="#/Kanbas/Courses/3500/Home"> Go </a>
                    </div>
                </div>
            </div>
        </div>
    )
}