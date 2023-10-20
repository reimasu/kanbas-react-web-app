import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommons } from "@fortawesome/free-brands-svg-icons";
import { faBan, faCircleCheck, faFileImport, faLifeRing, faChartColumn, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function StatusNavigation() {
    const buttons = ["Import Exisitng Content", "Import from Commons", "Choose Home Page", "View Course Stream",
                    "New Annoucement", "New Analytics", "View Course Notifications"];
    const icons = [faFileImport, faCreativeCommons, faLifeRing, faChartColumn, faBullhorn, faChartColumn, faBullhorn];
    return (
    <div class={`d-xl-block d-none d-flex flex-column status-menu`}>
        {/* <!-- Course Status --> */}
        <div class="mb-2">
            <h4 class="status-menu">Course Status</h4>
            <div class="btn-group">
                <button type="button" class="btn btn-outline-secondary text-nowrap">
                    <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>Unpublish
                </button>
                <button type="button" class={`btn btn-primary text-nowrap publish-button`} disabled>
                    <FontAwesomeIcon icon={faCircleCheck}></FontAwesomeIcon>Published
                </button>
            </div>
        </div>
        {/* <!-- Course Action Buttons --> */}
        <div class="d-flex flex-column course-action-menu">
            {buttons.map((button, index) => (
            <button type="button" class="btn text-nowrap btn-outline-secondary">
                <FontAwesomeIcon icon={icons[index]}></FontAwesomeIcon>{button}
            </button>
            ))}
        </div>
        {/* <!-- To Do Section --> */}
        <div>
            <h5>To Do</h5>
            <hr/>
            <div class="d-flex flex-col to-do-list">
                <i class="fa-solid fa-circle-exclamation"></i>
                <div class="">
                    <h6>Grade A1 - ENV + HTML</h6>
                    <h6>100 points • Sep 18 at 11:59pm</h6>
                </div>
            </div>
        </div>
        {/* <!-- Coming up --> */}
        <div class="mt-2">
            <div>
                <h5>Coming Up</h5>
            </div>
            <hr/>
            <div class="d-flex flex-col coming-up-list">
                <i class="fa-regular fa-calendar"></i>
                <div>
                    <h6>Lecture</h6>
                    <h6>CS4550.12631.202410</h6>
                    <h6>Sep 11 at 11:45am</h6>
                </div>
            </div>
        </div>
    </div>
    )
}

export default StatusNavigation;