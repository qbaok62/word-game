import Board from '~components/Board';
import Heading from '~components/Heading';
import './App.scss';
import { useAppDispatch } from './redux/hooks';
import { restart } from './redux/reducers/boardSlice';

function App() {
	const dispatch = useAppDispatch();

	const handleRestart = () => {
		dispatch(restart());
	};

	return (
		<div className="App">
			<Heading type="h1" text="Wordiee" />
			<Heading type="subtitle" text="Guess The Word" />
			<button className="restart-btn" onClick={handleRestart}>
				New Game
			</button>
			<div className="board-container">
				<Board />
			</div>
		</div>
	);
}

export default App;
