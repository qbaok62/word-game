import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { decPos, incRow, setBoard } from '~/redux/reducers/boardSlice';
import { rootState } from '~/redux/type';
import Key from '../Key';
import './style.scss';
import wordList from '../../words.json';

const Keyboard: React.FC = () => {
	const rows: string[] = ['q w e r t y u i o p', 'a s d f g h j k l', 'z x c v b n m'];
	const board = useAppSelector((state: rootState) => state.board.board);
	const position = useAppSelector((state: rootState) => state.board.pos);
	const row = useAppSelector((state: rootState) => state.board.row);
	const correctWord = useAppSelector((state: rootState) => state.board.correctWord);
	const dispatch = useAppDispatch();

	let board5Words: string = `${board[position - 5]}${board[position - 4]}${board[position - 3]}${
		board[position - 2]
	}${board[position - 1]}`.toLowerCase();

	let currentRow = Math.floor(position / 5);
	let allWords = wordList.words;

	const handleBack = () => {
		if (Math.floor((position - 1) / 5) < row) return;
		const newBoard = [...board];
		newBoard[position - 1] = '';
		dispatch(setBoard(newBoard));
		dispatch(decPos());
	};

	const handleEnter = () => {
		if (!allWords.includes(board5Words)) {
			alert('Invalid words');
			return;
		}
		dispatch(incRow());
		if (position === 30) {
			setTimeout(() => alert('The word is: ' + correctWord), 1500);
		}
	};

	return (
		<div className="keyboard-container">
			{rows.map((row, index) => (
				<div key={index} className="row">
					{index === 2 && (
						<span className="letter-row" onClick={handleEnter}>
							Enter
						</span>
					)}
					{row.split(' ').map((letter, index) => (
						<div key={index} className="letter-row">
							<Key letter={letter.toUpperCase()} />
							{letter === 'm' && <span onClick={handleBack}>Back</span>}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default Keyboard;
