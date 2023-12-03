import { Button, ConfigProvider } from 'antd';
import React from 'react';

const AntDesign = () => {
	return (
		<div>
			<Button type="primary">Primary Button</Button>
			<Button type="primary">Primary Button</Button>
			<Button type="primary" ghost>
				Primary
			</Button>
		</div>
	);
};

export default AntDesign;
