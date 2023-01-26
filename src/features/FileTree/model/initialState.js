const initialState = {
	current: '',
	folders: {
		byId: {
			2: {
				id: 2,
				date: Date.now(),
				type: 'directory',
				name: 'папка1',
				initialExpand: false,
				parent: null,
				children: [12, 24, 3]
			},
			24: {
				id: 24,
				date: Date.now(),
				type: 'directory',
				name: 'папка2',
				initialExpand: false,
				parent: 2,
				children: [34]
			}
		},
		allIds: [2, 24]
	},
	files: {
		byId: {
			12: {
				id: 12,
				date: Date.now(),
				type: 'file',
				name: 'файл1',
				parent: 2,
				content: {
					type: 'doc',
					content: [
						{
							type: 'heading',
							attrs: {
								textAlign: 'center',
								level: 2
							},
							content: [
								{
									type: 'text',
									text: 'файл1'
								}
							]
						}
					]
				}
			},
			34: {
				id: 34,
				date: Date.now(),
				type: 'file',
				name: 'файл2',
				parent: 24,
				content: {
					type: 'doc',
					content: [
						{
							type: 'heading',
							attrs: {
								textAlign: 'center',
								level: 2
							},
							content: [
								{
									type: 'text',
									text: 'файл2'
								}
							]
						}
					]
				}
			},
			3: {
				id: 3,
				date: Date.now(),
				type: 'file',
				name: 'файл3',
				parent: 2,
				content: {
					type: 'doc',
					content: [
						{
							type: 'heading',
							attrs: {
								textAlign: 'center',
								level: 2
							},
							content: [
								{
									type: 'text',
									text: 'файл3'
								}
							]
						}
					]
				}
			},
			13: {
				id: 13,
				date: Date.now(),
				type: 'file',
				name: 'файл4',
				parent: null,
				content: {
					type: 'doc',
					content: [
						{
							type: 'heading',
							attrs: {
								textAlign: 'center',
								level: 2
							},
							content: [
								{
									type: 'text',
									text: 'файл4'
								}
							]
						}
					]
				}
			}
		},
		allIds: [12, 34, 3, 13]
	}
};

export default initialState;
