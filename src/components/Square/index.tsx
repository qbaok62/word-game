import './style.scss';
import { Props } from './type';
import { motion } from 'framer-motion';
import { useAppSelector } from '~/redux/hooks';
import { rootState } from '~/redux/type';
import { useEffect, useState } from 'react';

const Square: React.FC<Props> = ({ value, squareIdx }) => {
	//Redux state
	const correctWord = useAppSelector((state: rootState) => state.board.correctWord);
	const position = useAppSelector((state: rootState) => state.board.pos);
	const reduxRow = useAppSelector((state: rootState) => state.board.row);
	//State
	const [correct, setCorrect] = useState<boolean>(false);
	const [almost, setAlmost] = useState<boolean>(false);
	const [wrong, setWrong] = useState<boolean>(false);
	let currentPos = (position - 1) % 5;

	const variants = {
		filled: () => ({ scale: [1.2, 1], transition: { duration: 0.2 } }),
		unfilled: () => ({ scale: [1.2, 1], transition: { duration: 0.2 } }),
	};

	useEffect(() => {
		console.log(correctWord);
		console.log(Math.floor(squareIdx / 5) < reduxRow);
		if (correctWord[currentPos] === value) {
			setCorrect(true);
		} else if (!correct && value != '' && correctWord.includes(value)) {
			setAlmost(true);
		} else if (!correct && value != '' && !correctWord.includes(value)) {
			setWrong(true);
		}
		return () => {
			setCorrect(false);
			setAlmost(false);
			setWrong(false);
		};
	}, [value]);

	const status: any =
		Math.floor(squareIdx / 5) < reduxRow &&
		(correct ? 'correct' : almost ? 'almost' : wrong ? 'wrong' : '');

	return (
		<motion.div animate={value ? 'filled' : 'unfilled'} variants={variants}>
			<div className="square" id={status ? status : ''}>
				{value}
			</div>
		</motion.div>
	);
};

export default Square;
