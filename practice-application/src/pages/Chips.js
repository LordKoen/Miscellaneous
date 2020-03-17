import React from 'react';
import Layout from '../Components/layout';
import foodList from '../../static/foods.JSON';

function chips() {
	let item = foodList.filter((item) => {
		if (item.path == 'chips') {
			return item;
		}
    });
    

	return <Layout item={item[0]}/>;
}

export default chips;
