import { FC } from 'react';
import { Props } from './type';
import './style.scss';

const Heading: React.FC<Props> = ({ text, type }) => {
	return <p className={`heading-${type}`}>{text}</p>;
};

export default Heading;
