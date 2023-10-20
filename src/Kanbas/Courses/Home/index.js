import ModuleList from "../Modules/ModuleList";
import StatusNavigation from "../StatusNavigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function Home() {
  return (
    <div className={`d-flex flex-row home-page`}>
      <ModuleList />
      <StatusNavigation />
    </div>
  );
}
export default Home;