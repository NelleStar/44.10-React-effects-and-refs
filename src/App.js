// import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import TimerWrapper from './TimerWrapper';
import Counter from './Counter';
import ProfileViewer from './ProfileViewer';
import ProfileViewerWithSearch from './ProfileViewerWithSearch';
import Video from './Video';
import Focuser from './Focuser';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <Timer />
      {/* <TimerWrapper /> */}
      {/* <ProfileViewer /> */}
      {/* <ProfileViewer name="Weasley" amount={3}/> */}
      {/* <ProfileViewerWithSearch /> */}
      {/* <Video /> */}
      <Focuser />
    </div>
  );
}

export default App;
