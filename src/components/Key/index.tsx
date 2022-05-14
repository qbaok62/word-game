import { useAppDispatch, useAppSelector } from '~/redux/hooks';
import { incPos, setBoard } from '~/redux/reducers/boardSlice';
import { rootState } from '~/redux/type';
import './style.scss';
import { Props } from './type';

const Key: React.FC<Props> = ({ letter }) => {
	const board = useAppSelector((state: rootState) => state.board.board);
	const position = useAppSelector((state: rootState) => state.board.pos);
	const row = useAppSelector((state: rootState) => state.board.row);
	const dispatch = useAppDispatch();

	let currentRow = Math.floor(position / 5);

	const handleChoose = () => {
		if (position >= 30) return;
		if (currentRow > row) return;
		const newBoard = [...board];
		newBoard[position] = letter;
		dispatch(setBoard(newBoard));
		dispatch(incPos());
	};

	return (
		<div className="letter" onClick={handleChoose}>
			{letter}
		</div>
	);
};

export default Key;
