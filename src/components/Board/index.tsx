import { useSelector } from 'react-redux';
import { rootState } from '~/redux/type';
import Keyboard from '~components/Keyboard';
import Square from '~components/Square';
import './style.scss';

const Board: React.FC = () => {
	const board = useSelector((state: rootState) => state.board.board);

	return (
		<>
			<div className="board">
				{board.map((square, index) => (
					<Square key={index} value={square} squareIdx={index} />
				))}
			</div>
			<div className="keyboard">
				<Keyboard />
			</div>
		</>
	);
};

export default Board;
