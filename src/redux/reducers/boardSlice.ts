import { createSlice } from '@reduxjs/toolkit';
import wordlist from '../../words.json';

let randomNumber = Math.floor(Math.random() * wordlist.words.length);

const initialState = {
	board: [
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
		'',
	],
	pos: 0,
	row: 0,
	correctWord: wordlist.words[randomNumber].toUpperCase(),
};

export const boardSlice = createSlice({
	name: 'board',
	initialState,
	reducers: {
		setBoard: (state, action) => {
			state.board = action.payload;
		},
		incPos: (state) => {
			state.pos++;
		},
		decPos: (state) => {
			state.pos--;
		},
		incRow: (state) => {
			state.row++;
		},
		restart: (state) => {
			state.pos = 0;
			state.row = 0;
			state.board = [
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
				'',
			];
		},
	},
});

export const { setBoard, incPos, decPos, incRow, restart } = boardSlice.actions;
export default boardSlice.reducer;
