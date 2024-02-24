import ModuleList from "../Courses/Modules/List";
import "./index.css";

function Home() {
  return (
    <div className="home-container">
      <h2>Home</h2>
      <div className="modules-container">
        <ModuleList />
      </div>
      <div className="home-container">
  <div className="content-container">
    <div className="btn-group-vertical">
      <button className="btn btn-light-gray-2">Import Existing Content</button>
      <button className="btn btn-light-gray-2">Create Content</button>
      <button className="btn btn-light-gray-2">Import From View</button>
      <button className="btn btn-light-gray-2">View From Home</button>
      <button className="btn btn-light-gray-2">New Announcement</button>
      <button className="btn btn-light-gray-2">New Analytics</button>
      <button className="btn btn-light-gray-2">Notifications</button>
      <button className="btn btn-light-gray-2">Change Prep</button>
    </div>
    <div className="todo-section">
      <h6>To Do:</h6>
      <hr></hr>
      <div>
        <a href="/" className="red-link mt-2">Homework 2 and other dues</a>
        <br></br>
        <br></br>
        <a href="/" className="red-link mt-2">Homework 2 and other dues</a>
        <br></br>
        <br></br>
        <a href="/" className="red-link mt-2">Homework 2 and other dues</a>
        <br></br>
        <br></br>
      </div>
    </div>
    <div className="coming-up-section">
      <h6>Coming up:</h6>
      <hr></hr>
      <div>
        <a href="/" className="red-link mt-2">Coming up are these assignments</a>
        <br></br>
        <br></br>
        <a href="/" className="red-link mt-2">Coming up are these assignments</a>
        <br></br>
        <br></br>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default Home;
